import * as admin from 'firebase-admin';

// Reformat private key to ensure it is handled correctly since sometimes
// newlines get escaped inside env variables.
const formatPrivateKey = (key: string | undefined) => {
  if (!key) return undefined;
  return key.replace(/\\n/g, '\n');
};

if (!admin.apps.length) {
  try {
    admin.initializeApp({
      credential: admin.credential.cert({
        projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
        privateKey: formatPrivateKey(process.env.FIREBASE_PRIVATE_KEY),
      }),
      storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET
    });
  } catch (error) {
    console.error('Firebase admin initialization error:', error);
  }
}

const adminDb = admin.firestore();
const adminAuth = admin.auth();
const adminStorage = admin.storage();

export { adminDb, adminAuth, adminStorage };
