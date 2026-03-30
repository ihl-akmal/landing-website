"use server";

import { adminDb } from "@/lib/firebase/admin";
import { revalidatePath } from "next/cache";

export interface ClassData {
  id?: string;
  
  // SEO & URL
  slug: string;
  metaTitle?: string;
  metaDescription?: string;
  keywords?: string;

  // Detail Kelas
  title: string;
  subtitle?: string;
  flyerUrl?: string;
  shortDescription?: string;
  instructor?: string;
  date?: string;
  time?: string;
  location?: string;
  
  // Konten List
  whatYouWillLearn?: string[];
  benefits?: string[];
  
  // Pendaftaran & Harga
  closeRegistration?: string; // ISO string 
  price?: string;
  wagLink?: string;

  // Status
  status: "draft" | "publish" | "closed";
  
  // Sistem
  createdAt?: string;
}


export async function getAdminClasses() {
  try {
    const snapshot = await adminDb
      .collection("classes")
      .orderBy("createdAt", "desc")
      .get();
      
    return snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as ClassData[];
  } catch (error) {
    console.error("Error fetching classes:", error);
    return [];
  }
}

export async function createClass(data: Omit<ClassData, "id" | "createdAt">) {
  try {
    const newClassRef = adminDb.collection("classes").doc();
    const classData = {
      ...data,
      createdAt: new Date().toISOString(),
    };
    
    await newClassRef.set(classData);
    revalidatePath("/admin/kelas");
    revalidatePath("/kelas");
    
    return { success: true, id: newClassRef.id };
  } catch (error) {
    console.error("Error creating class:", error);
    return { success: false, error: "Gagal membuat kelas" };
  }
}

export async function deleteClass(id: string) {
  try {
    await adminDb.collection("classes").doc(id).delete();
    revalidatePath("/admin/kelas");
    revalidatePath("/kelas");
    return { success: true };
  } catch (error) {
    return { success: false, error: "Gagal menghapus kelas" };
  }
}

export async function getClassBySlug(slug: string): Promise<ClassData | null> {
  try {
    const snapshot = await adminDb
      .collection("classes")
      .where("slug", "==", slug)
      .where("status", "==", "publish") // Hanya ambil kelas yang sudah publish
      .limit(1)
      .get();

    if (snapshot.empty) {
      return null;
    }

    const doc = snapshot.docs[0];
    return {
      id: doc.id,
      ...doc.data(),
    } as ClassData;
  } catch (error) {
    console.error(`Error fetching class with slug ${slug}:`, error);
    return null;
  }
}

export async function getAdminClassById(id: string): Promise<ClassData | null> {
  try {
    const doc = await adminDb.collection("classes").doc(id).get();
    if (!doc.exists) {
      return null;
    }
    return { id: doc.id, ...doc.data() } as ClassData;
  } catch (error) {
    console.error(`Error fetching class with id ${id}:`, error);
    return null;
  }
}

export async function updateClass(id: string, data: Partial<ClassData>) {
  try {
    await adminDb.collection("classes").doc(id).update(data);
    revalidatePath("/admin/kelas");
    revalidatePath(`/kelas/${data.slug}`);
    revalidatePath(`/admin/kelas/${id}/edit`);
    return { success: true };
  } catch (error) {
    console.error(`Error updating class with id ${id}:`, error);
    return { success: false, error: "Gagal memperbarui kelas" };
  }
}
