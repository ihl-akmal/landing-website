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
  status: string;
  infoSource: string;
  challenge: string;
  hope: string;
  createdAt?: string;
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
