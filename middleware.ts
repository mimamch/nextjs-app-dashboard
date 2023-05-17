// export { default } from 'next-auth/middleware';

import { withAuth } from 'next-auth/middleware';

import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  if (
    !req.cookies.get('next-auth.session-token')?.value &&
    !req.nextUrl.pathname.startsWith('/auth')
  ) {
    return NextResponse.redirect(req.nextUrl.origin + '/auth/login');
  }
  if (
    req.cookies.get('next-auth.session-token')?.value &&
    req.nextUrl.pathname.startsWith('/auth')
  ) {
    return NextResponse.redirect(req.nextUrl.origin + '/');
  }
  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - static (static files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|static|favicon.ico|_next|grid).*)',
  ],
};

export default withAuth(middleware, {});
