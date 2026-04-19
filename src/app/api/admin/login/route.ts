import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { signToken } from "@/lib/auth";

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json({ error: "Email and password required" }, { status: 400 });
    }

    // Build list of admins from env
    const admins = [
      { email: process.env.ADMIN_EMAIL!, hash: process.env.ADMIN_PASSWORD_HASH! },
      { email: process.env.ADMIN_EMAIL_2!, hash: process.env.ADMIN_PASSWORD_HASH_2! },
    ].filter((a) => a.email && a.hash);

    const matched = admins.find((a) => a.email === email);
    if (!matched) {
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
    }

    const isValid = await bcrypt.compare(password, matched.hash);
    if (!isValid) {
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
    }

    // Create JWT token
    const token = signToken(email);

    // Set as httpOnly cookie — browser JS cannot read this
    const response = NextResponse.json({ success: true });
    response.cookies.set("admin_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7, // 7 days in seconds
      path: "/",
    });

    return response;
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}
