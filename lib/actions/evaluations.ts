'use server';

import { adminDb } from '@/lib/firebase/admin';
import * as admin from 'firebase-admin';
import { randomBytes } from 'crypto';
import { getAdminClassById } from './classes';
import { revalidatePath } from 'next/cache';

interface GenerateLinkResult {
    success: boolean;
    token?: string;
    error?: string;
}

// This is the original, stable interface before my complex changes.
interface ValidateTokenResult {
    isValid: boolean;
    error?: string;
    classData?: {
        id: string;
        title: string;
    };
    registrations?: { id: string; name: string }[];
}

export interface EvaluationSubmission {
    id: string;
    registrantName: string;
    submittedAt: Date;
}

export async function generateEvaluationLink(classId: string, expiresAt: Date): Promise<GenerateLinkResult> {
  try {
    const classData = await getAdminClassById(classId);
    if (!classData) {
      return { success: false, error: "Kelas tidak ditemukan." };
    }

    const token = randomBytes(24).toString('hex');

    await adminDb.collection('evaluationLinks').doc(token).set({
      classId,
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
      expiresAt,
    });
    
    revalidatePath(`/admin/kelas/${classId}/evaluasi`);
    return { success: true, token };
  } catch (error) {
    console.error("Error generating evaluation link:", error);
    return { success: false, error: "Gagal membuat link evaluasi." };
  }
}

export async function getActiveEvaluationLink(classId: string): Promise<{ token: string; expiresAt: Date; } | null> {
    try {
        const snapshot = await adminDb.collection('evaluationLinks').where('classId', '==', classId).limit(1).get();
        if (snapshot.empty) return null;

        const doc = snapshot.docs[0];
        const data = doc.data();
        const expiresAt = data.expiresAt.toDate();
        const now = new Date();

        if (expiresAt > now) {
            return { token: doc.id, expiresAt };
        } else {
            return null;
        }
    } catch (error) {
        console.error("Error getting active evaluation link:", error);
        return null;
    }
}

// This is the original, stable version of the function.
export async function validateEvaluationToken(token: string): Promise<ValidateTokenResult> {
    try {
        const tokenDoc = await adminDb.collection('evaluationLinks').doc(token).get();
        if (!tokenDoc.exists) {
            return { isValid: false, error: "Link evaluasi tidak valid atau telah digunakan." };
        }

        const linkData = tokenDoc.data()!;
        const now = new Date();
        if (linkData.expiresAt.toDate() < now) {
            return { isValid: false, error: "Form evaluasi telah kedaluwarsa." };
        }

        const classId = linkData.classId;
        const classData = await getAdminClassById(classId);
        if (!classData) {
            return { isValid: false, error: "Kelas yang terhubung dengan link ini tidak ditemukan." };
        }

        const [registrationsSnap, submissionsSnap] = await Promise.all([
            adminDb.collection('classes').doc(classId).collection('registrations').orderBy('name', 'asc').get(),
            adminDb.collection('evaluations').where('classId', '==', classId).get()
        ]);

        const submittedRegistrationIds = new Set(submissionsSnap.docs.map(doc => doc.data().registrationId));
        const availableRegistrations = registrationsSnap.docs
            .map(doc => ({ id: doc.id, name: doc.data().name as string }))
            .filter(reg => !submittedRegistrationIds.has(reg.id));

        return {
            isValid: true,
            classData: { id: classData.id!, title: classData.title },
            registrations: availableRegistrations,
        };

    } catch (error) {
        console.error("Error validating token:", error);
        return { isValid: false, error: "Terjadi kesalahan server saat memvalidasi link." };
    }
}


export async function submitEvaluation(token: string, classId: string, data: any) {
    try {
        const linkDocRef = adminDb.collection('evaluationLinks').doc(token);
        const linkDoc = await linkDocRef.get();

        if (!linkDoc.exists || linkDoc.data()?.classId !== classId) {
             return { success: false, error: "Link evaluasi tidak valid atau sudah tidak aktif." };
        }

        const existingSubmission = await adminDb.collection('evaluations')
            .where('classId', '==', classId)
            .where('registrationId', '==', data.registrationId)
            .limit(1)
            .get();

        if (!existingSubmission.empty) {
            return { success: false, error: "Evaluasi untuk nama ini sudah pernah dikirimkan." };
        }

        const evaluationData = {
            classId: classId,
            registrationId: data.registrationId,
            submittedAt: admin.firestore.FieldValue.serverTimestamp(),
            ...data
        };

        await adminDb.collection('evaluations').add(evaluationData);
        
        revalidatePath(`/admin/kelas/${classId}/evaluasi`);

        return { success: true };

    } catch (error) {
        console.error("Error submitting evaluation:", error);
        return { success: false, error: "Terjadi kesalahan pada server saat mengirimkan evaluasi." };
    }
}


export async function getEvaluationSubmissions(classId: string): Promise<EvaluationSubmission[]> {
    try {
        const evaluationsSnap = await adminDb.collection('evaluations')
            .where('classId', '==', classId)
            .orderBy('submittedAt', 'desc')
            .get();

        if (evaluationsSnap.empty) {
            return [];
        }

        const registrationsSnap = await adminDb.collection('classes').doc(classId).collection('registrations').get();
        const registrationNameMap = new Map<string, string>();
        registrationsSnap.forEach(doc => {
            registrationNameMap.set(doc.id, doc.data().name);
        });

        const submissions: EvaluationSubmission[] = evaluationsSnap.docs.map(doc => {
            const data = doc.data();
            const registrantName = registrationNameMap.get(data.registrationId) || 'Nama Tidak Ditemukan';
            return {
                id: doc.id,
                registrantName: registrantName,
                submittedAt: data.submittedAt.toDate(),
            };
        });

        return submissions;

    } catch (error) {
        console.error("Error getting evaluation submissions:", error);
        return [];
    }
}

export async function getFullEvaluationsForExport(classId: string): Promise<any[]> {
    try {
        const evaluationsSnap = await adminDb.collection('evaluations')
            .where('classId', '==', classId)
            .orderBy('submittedAt', 'desc')
            .get();

        if (evaluationsSnap.empty) {
            return [];
        }

        const registrationsSnap = await adminDb.collection('classes').doc(classId).collection('registrations').get();
        const registrationNameMap = new Map<string, string>();
        registrationsSnap.forEach(doc => {
            registrationNameMap.set(doc.id, doc.data().name);
        });

        const evaluationsForExport = evaluationsSnap.docs.map(doc => {
            const data = doc.data();
            const registrantName = registrationNameMap.get(data.registrationId) || 'Nama Tidak Ditemukan';
            
            return {
                "Nama Peserta": registrantName,
                "Waktu Mengisi": data.submittedAt.toDate().toLocaleString('id-ID', { dateStyle: 'full', timeStyle: 'long' }),
                "Mengalami Perubahan Positif": data.selfChange || '-',
                "Cerita Perubahan": data.changeDescription || '-',
                "Rating Acara Keseluruhan": data.overallRating || 0,
                "Rating Narasumber": data.speakerRating || 0,
                "Rating Moderator": data.moderatorRating || 0,
                "Materi Sesuai Harga": data.isWorthy || '-',
                "Tertarik Ikut Kelas Serupa": data.wouldAttendAgain || '-',
                "Rating Rekomendasi (1-5)": data.recommendationLikelihood || 0,
                "Saran Perbaikan": data.improvementSuggestion || '-',
            };
        });

        return evaluationsForExport;

    } catch (error) {
        console.error("Error getting full evaluations for export:", error);
        return [];
    }
}
