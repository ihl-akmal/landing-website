import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
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
  ],
};
