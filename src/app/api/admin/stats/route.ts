import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import { Lead } from "@/models/Lead";
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

    const now = new Date();
    const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
    const monthAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);

    const [total, pending, contacted, closed, spam, thisWeek, thisMonth, starred] =
      await Promise.all([
        Lead.countDocuments({ status: { $ne: "spam" } }),
        Lead.countDocuments({ status: "pending" }),
        Lead.countDocuments({ status: "contacted" }),
        Lead.countDocuments({ status: "closed" }),
        Lead.countDocuments({ status: "spam" }),
        Lead.countDocuments({ createdAt: { $gte: weekAgo }, status: { $ne: "spam" } }),
        Lead.countDocuments({ createdAt: { $gte: monthAgo }, status: { $ne: "spam" } }),
        Lead.countDocuments({ starred: true }),
      ]);

    return NextResponse.json({
      total, pending, contacted, closed, spam, thisWeek, thisMonth, starred,
    });
  } catch (error) {
    console.error("Stats error:", error);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}
