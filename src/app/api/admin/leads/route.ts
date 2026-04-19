import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import { Lead } from "@/models/Lead";
import { verifyToken } from "@/lib/auth";

// Helper: check auth on every admin API call
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

    const { searchParams } = new URL(request.url);
    const status = searchParams.get("status");
    const search = searchParams.get("search");
    const tag = searchParams.get("tag");

    const query: Record<string, unknown> = {};
    if (status) {
      query.status = status;
    } else {
      query.status = { $ne: "spam" };
    }
    if (tag) query.tags = tag;
    if (search) {
      query.$or = [
        { name: { $regex: search, $options: "i" } },
        { phone: { $regex: search, $options: "i" } },
        { email: { $regex: search, $options: "i" } },
      ];
    }

    // Starred leads always appear first, then newest
    const leads = await Lead.find(query).sort({ starred: -1, createdAt: -1 }).lean();

    return NextResponse.json({ leads });
  } catch (error) {
    console.error("Get leads error:", error);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}

// POST /api/admin/leads — manually add a lead from admin panel
export async function POST(request: NextRequest) {
  if (!checkAuth(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    await connectDB();
    const body = await request.json();
    const { name, email, phone, message, status, tags, source, enquiryDate } = body;

    if (!name || !email || !phone) {
      return NextResponse.json({ error: "Name, email and phone are required" }, { status: 400 });
    }

    const lead = await Lead.create({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: phone.trim(),
      message: message?.trim() || "Manually added by admin",
      status: status || "pending",
      tags: tags || [],
      source: source || "whatsapp",
      createdAt: enquiryDate ? new Date(enquiryDate) : new Date(),
    });

    return NextResponse.json({ success: true, lead }, { status: 201 });
  } catch (error) {
    console.error("Add lead error:", error);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}

// PATCH /api/admin/leads — bulk update status for multiple leads
export async function PATCH(request: NextRequest) {
  if (!checkAuth(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { ids, status } = await request.json();
    const validStatuses = ["pending", "contacted", "closed", "spam"];
    if (!Array.isArray(ids) || !validStatuses.includes(status)) {
      return NextResponse.json({ error: "Invalid request" }, { status: 400 });
    }

    await connectDB();
    await Lead.updateMany({ _id: { $in: ids } }, { status });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Bulk update error:", error);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}
