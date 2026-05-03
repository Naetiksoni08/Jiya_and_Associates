import { NextRequest, NextResponse } from "next/server";

// NOTE: jsonwebtoken is Node.js only — cannot be used in Edge Runtime middleware.
// We check cookie existence here for UX redirect; actual JWT verification
// happens in each API route (which runs in Node.js runtime).
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // ✅ Check maintenance FIRST, before anything that could throw
  const isMaintenanceMode = process.env.MAINTENANCE_MODE === "true";
  
  if (isMaintenanceMode) {
    const ADMIN_PATH = process.env.ADMIN_PATH ?? "";
    if (
      pathname !== "/maintenance" &&
      !pathname.startsWith("/_next") &&
      !(ADMIN_PATH && pathname.startsWith(`/${ADMIN_PATH}`))
    ) {
      return NextResponse.redirect(new URL("/maintenance", request.url));
    }
    return NextResponse.next();
  }

  const ADMIN_PATH = process.env.ADMIN_PATH!;

  // Rule 1: /admin always returns 404
  if (pathname === "/admin" || pathname.startsWith("/admin/")) {
    return NextResponse.rewrite(new URL("/not-found", request.url));
  }

  // Rule 2: Protect the real admin route
  if (pathname.startsWith(`/${ADMIN_PATH}`)) {
    const token = request.cookies.get("admin_token")?.value;

    if (pathname === `/${ADMIN_PATH}/login`) {
      if (token) {
        return NextResponse.redirect(
          new URL(`/${ADMIN_PATH}/leads`, request.url)
        );
      }
      return NextResponse.next();
    }

    if (!token) {
      return NextResponse.redirect(
        new URL(`/${ADMIN_PATH}/login?unauthorized=1`, request.url)
      );
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};