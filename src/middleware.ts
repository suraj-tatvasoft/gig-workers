// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';

const protectedRoutes = ['/api/protected', '/api/test/private', '/dashboard', '/profile']; // Add more as needed

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Skip auth if route is not protected
  const isProtectedRoute = protectedRoutes.some((route) =>
    pathname.startsWith(route)
  );
  if (!isProtectedRoute) {
    return NextResponse.next();
  }

  // Try to get JWT token from cookie
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  // If no token — unauthorized
  if (!token) {
    return NextResponse.json(
      { message: 'Unauthorized: Token missing or expired' },
      { status: 401 }
    );
  }

  // Optional: Check for manual token expiration
  const now = Math.floor(Date.now() / 1000);
  if (token.exp && token.exp < now) {
    return NextResponse.json({ message: 'Token expired' }, { status: 401 });
  }

  // Forward token info to route handlers (optional)
  const requestHeaders = new Headers(req.headers);
  requestHeaders.set('x-user-id', token.sub || '');
  requestHeaders.set('x-user-role', token.role || '');

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}

// Apply middleware only to selected route patterns
export const config = {
  matcher: ['/api/:path*', '/dashboard/:path*', '/profile'], // can expand as needed
};