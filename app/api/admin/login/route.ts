import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { password } = await request.json();

    if (password === process.env.ADMIN_PASSWORD) {
      // Buat response redirection
      const response = NextResponse.json({ success: true });
      
      // Set cookie dengan secure option
      response.cookies.set({
        name: 'adminToken',
        value: 'authenticated',
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: 60 * 60 * 24 * 7, // 1 minggu
        path: '/',
      });

      return response;
    }

    return NextResponse.json(
      { success: false, message: 'Password salah' },
      { status: 401 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Terjadi kesalahan' },
      { status: 500 }
    );
  }
}
