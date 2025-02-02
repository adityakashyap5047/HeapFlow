import { NextRequest, NextResponse } from 'next/server'

import getOrCreateDB from './models/server/dbSetup'
import getOrCreateStorage from './models/server/storageSetup'
import { account } from './models/client/config';

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  
  await Promise.all([
    getOrCreateDB(),
    getOrCreateStorage()
  ])

  const protectedRoutes = ["/questions/ask"];

  // Check if the requested path is protected
  if (protectedRoutes.some((path) => request.nextUrl.pathname.startsWith(path))) {
    try {
        // Try getting the logged-in user session
        await account.get();
        return NextResponse.next(); // Allow access
    } catch {
        // If an error occurs (user not logged in), redirect to login page
        return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  return NextResponse.next()
}
 
// See "Matching Paths" below to learn more
export const config = {
  /* match all request paths except for the the ones that starts with:
  - api
  - _next/static
  - _next/image
  - favicon.com

  */
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
}