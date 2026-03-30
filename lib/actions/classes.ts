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

/**
 * Gets all classes for the admin panel.
 * It dynamically changes the status of "publish" classes to "closed" 
 * if the registration date has passed, to match the public view.
 */
export async function getAdminClasses() {
  try {
    const snapshot = await adminDb
      .collection("classes")
      .orderBy("createdAt", "desc")
      .get();
      
    const now = new Date();

    return snapshot.docs.map((doc) => {
      const classData = { id: doc.id, ...doc.data() } as ClassData;

      // Dynamic status change for admin panel view
      if (classData.status === "publish" && classData.closeRegistration && new Date(classData.closeRegistration) < now) {
        return { ...classData, status: "closed" };
      }

      return classData;
    }) as ClassData[];
  } catch (error) {
    console.error("Error fetching classes:", error);
    return [];
  }
}

/**
 * Gets all classes that are relevant for the public.
 * It dynamically changes the status of "publish" classes to "closed" 
 * if the registration date has passed.
 */
export async function getPublicClasses(): Promise<ClassData[]> {
  try {
    const snapshot = await adminDb
      .collection("classes")
      .where("status", "in", ["publish", "closed"])
      .orderBy("createdAt", "desc")
      .get();
      
    const now = new Date();

    return snapshot.docs.map((doc) => {
      const classData = { id: doc.id, ...doc.data() } as ClassData;

      // Dynamic status change
      if (classData.status === "publish" && classData.closeRegistration && new Date(classData.closeRegistration) < now) {
        return { ...classData, status: "closed" };
      }

      return classData;
    });
  } catch (error) {
    console.error("Error fetching public classes:", error);
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

/**
 * Gets a single class by its slug for public view.
 * It won't return "draft" classes.
 * It dynamically changes the status of a "publish" class to "closed"
 * if the registration date has passed.
 */
export async function getClassBySlug(slug: string): Promise<ClassData | null> {
  try {
    const snapshot = await adminDb
      .collection("classes")
      .where("slug", "==", slug)
      .limit(1)
      .get();

    if (snapshot.empty) {
      return null;
    }

    const doc = snapshot.docs[0];
    const classData = {
      id: doc.id,
      ...doc.data(),
    } as ClassData;

    // Don't show draft classes to the public
    if (classData.status === "draft") {
      return null;
    }

    // Dynamic status change
    const now = new Date();
    if (classData.status === "publish" && classData.closeRegistration && new Date(classData.closeRegistration) < now) {
      return { ...classData, status: "closed" };
    }

    return classData;
  } catch (error) {
    console.error(`Error fetching class with slug ${slug}:`, error);
    return null;
  }
}

// Returns the raw data, so the edit form shows the true status
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
