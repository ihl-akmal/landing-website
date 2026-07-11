import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {

// Redirect sertifikat subdomain ke Vercel Blob
if (request.headers.get('host') === 'sertifikat.grazedu.web.id') {
  const path = request.nextUrl.pathname
  const blobBaseUrl = 'https://gevwyt8rj7c5q78a.public.blob.vercel-storage.com'
  return NextResponse.rewrite(`${blobBaseUrl}${path}`)
}

  const isLoginPage = request.nextUrl.pathname === '/admin/login';
  const isAdminRoute = request.nextUrl.pathname.startsWith('/admin');
  
  // Custom API routes for admin if any? Let's protect them too if needed.
  // Actually, we protect frontend routes here. API routes should verify cookies inside their own request handlers.
  
  if (isAdminRoute && !isLoginPage) {
    const adminToken = request.cookies.get('adminToken');
    
    // If not authenticated, redirect to login page
    if (!adminToken || adminToken.value !== 'authenticated') {
      const url = request.nextUrl.clone();
      url.pathname = '/admin/login';
      return NextResponse.redirect(url);
    }
  }


  
  // Redirect root /admin to /admin/kelas
  if (request.nextUrl.pathname === '/admin') {
    const url = request.nextUrl.clone();
    url.pathname = '/admin/kelas';
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/admin/:path*',
    '/:path*',
  ],
};
