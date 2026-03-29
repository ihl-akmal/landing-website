"use server";

import { adminDb } from "@/lib/firebase/admin";
import { revalidatePath } from "next/cache";

export interface ClassData {
  id?: string;
  slug: string;
  title: string;
  shortDescription?: string;
  description?: string;
  category?: string;
  date?: string;
  time?: string;
  instructor?: string;
  price?: string;
  image?: string;
  status: "draft" | "publish";
  wagLink?: string;
  closeRegistration?: string; // ISO string 
  createdAt?: string;
  // Pertanyaan custom tambahan jika diperlukan
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
