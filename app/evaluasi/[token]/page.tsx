'use client';

import { useParams } from 'next/navigation';
import EvaluationClientPage from "./evaluation-client-page";




/**
 * This is the root page for the /evaluasi/[token] route.
 * It uses the `useParams` hook to get the token from the URL, which is the 
 * standard way for client components.
 * It then passes the token to the main client component (`EvaluationClientPage`).
 */
export default function EvaluationTokenPage() {
  // Use the standard client-side hook to get dynamic parameters
  const params = useParams();
  const token = params.token as string; // Type cast token from params

  // Render the client page, but only if a token is present in the URL.
  // This prevents rendering errors during Next.js pre-rendering or if the URL is malformed.
  return token ? <EvaluationClientPage token={token} /> : null;
 }
