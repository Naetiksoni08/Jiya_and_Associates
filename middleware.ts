import { NextRequest, NextResponse } from "next/server";

// NOTE: jsonwebtoken is Node.js only — cannot be used in Edge Runtime middleware.
// We check cookie existence here for UX redirect; actual JWT verification
// happens in each API route (which runs in Node.js runtime).
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const ADMIN_PATH = process.env.ADMIN_PATH!;

  // Maintenance mode — set MAINTENANCE_MODE=true in Vercel env vars to enable
  if (process.env.MAINTENANCE_MODE === "true") {
    if (pathname !== "/maintenance" && !pathname.startsWith(`/${ADMIN_PATH}`)) {
      return NextResponse.redirect(new URL("/maintenance", request.url));
    }
  }

  // Rule 1: /admin always returns 404
  if (pathname === "/admin" || pathname.startsWith("/admin/")) {
    return NextResponse.rewrite(new URL("/not-found", request.url));
  }

  // Rule 2: Protect the real admin route
  if (pathname.startsWith(`/${ADMIN_PATH}`)) {
    const token = request.cookies.get("admin_token")?.value;

    // Login page: let unauthenticated through, redirect authenticated to leads
    if (pathname === `/${ADMIN_PATH}/login`) {
      if (token) {
        return NextResponse.redirect(
          new URL(`/${ADMIN_PATH}/leads`, request.url)
        );
      }
      return NextResponse.next();
    }

    // All other admin routes: redirect to login if no token
    if (!token) {
      return NextResponse.redirect(
        new URL(`/${ADMIN_PATH}/login?unauthorized=1`, request.url)
      );
    }
  }

  return NextResponse.next();
}

// Run middleware on all routes except static files and Next.js internals
export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
