'use server';

import { adminDb } from '@/lib/firebase/admin';
import { revalidatePath } from 'next/cache';

export interface RegistrationData {
  id?: string;
  classId: string;
  name: string;
  email: string;
  whatsapp: string;
  domicile: string;
  usia?: number; // Menambahkan usia, dibuat opsional untuk kompatibilitas
  status: string;
  infoSource: string;
  challenge: string;
  hope: string;
  createdAt?: string;
}

/**
 * Memeriksa apakah email sudah terdaftar untuk kelas tertentu.
 * @param classId ID kelas
 * @param email Email yang akan diperiksa
 * @returns Object dengan boolean `exists`
 */
export async function checkEmailExists(classId: string, email: string) {
  try {
    if (!classId || !email) {
      // Tidak mengembalikan error, anggap tidak ada jika input tidak valid
      return { exists: false };
    }

    const snapshot = await adminDb
      .collection('classes')
      .doc(classId)
      .collection('registrations')
      .where('email', '==', email)
      .limit(1)
      .get();

    return { exists: !snapshot.empty };
  } catch (error) {
    console.error('Error checking email existence:', error);
    // Jika terjadi error di server, kembalikan pesan untuk ditampilkan
    return { error: 'Gagal memverifikasi email. Silakan coba lagi.' };
  }
}

export async function createRegistration(data: RegistrationData) {
  try {
    const { classId, ...registrationDetails } = data;

    if (!classId) {
      throw new Error('Class ID is missing');
    }

    const registrationRef = adminDb
      .collection('classes')
      .doc(classId)
      .collection('registrations')
      .doc();

    await registrationRef.set({
      ...registrationDetails,
      createdAt: new Date().toISOString(),
    });

    revalidatePath(`/admin/kelas/${classId}`); // Untuk refresh data di admin jika ada

    return { success: true, id: registrationRef.id };
  } catch (error) {
    console.error('Error creating registration:', error);
    // Periksa tipe error dan kembalikan pesan yang sesuai
    const errorMessage = error instanceof Error ? error.message : 'Gagal melakukan pendaftaran';
    return { success: false, error: errorMessage };
  }
}

export async function getRegistrationsByClassId(classId: string) {
  try {
    const snapshot = await adminDb
      .collection('classes')
      .doc(classId)
      .collection('registrations')
      .orderBy('createdAt', 'desc')
      .get();

    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    })) as RegistrationData[];
  } catch (error) {
    console.error('Error fetching registrations:', error);
    return [];
  }
}
