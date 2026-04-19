import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import { DeletedLead } from "@/models/DeletedLead";
import { verifyToken } from "@/lib/auth";

function checkAuth(request: NextRequest) {
  const token = request.cookies.get("admin_token")?.value;
  return token ? verifyToken(token) : null;
}

export async function GET(request: NextRequest) {
  if (!checkAuth(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  try {
    await connectDB();
    const leads = await DeletedLead.find().sort({ deletedAt: -1 }).lean();
    return NextResponse.json({ leads });
  } catch (error) {
    console.error("Get deleted leads error:", error);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}
