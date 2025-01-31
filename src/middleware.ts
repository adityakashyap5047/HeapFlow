import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
export function middleware(request: NextRequest) {
  return NextResponse.redirect(new URL('/home', request.url))
}
 
// See "Matching Paths" below to learn more
export const config = {
    /* match all request paths except for the ones that starts with:

        - api
        - _next/static
        - _next/image
        - favicon.com
    */
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}