import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import { Lead } from "@/models/Lead";
import { DeletedLead } from "@/models/DeletedLead";
import { verifyToken } from "@/lib/auth";

function checkAuth(request: NextRequest) {
  const token = request.cookies.get("admin_token")?.value;
  return token ? verifyToken(token) : null;
}

// GET /api/admin/leads/[id] — full lead details
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  if (!checkAuth(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    await connectDB();
    const lead = await Lead.findById(params.id).lean();

    if (!lead) {
      return NextResponse.json({ error: "Lead not found" }, { status: 404 });
    }

    return NextResponse.json({ lead });
  } catch (error) {
    console.error("Get lead error:", error);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}

// PATCH /api/admin/leads/[id] — update status, starred, or tags
export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  if (!checkAuth(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await request.json();
    const update: Record<string, unknown> = {};

    if ("status" in body) {
      const validStatuses = ["pending", "contacted", "closed", "spam"];
      if (!validStatuses.includes(body.status)) {
        return NextResponse.json({ error: "Invalid status" }, { status: 400 });
      }
      update.status = body.status;
    }
    if ("starred" in body) update.starred = Boolean(body.starred);
    if ("tags" in body && Array.isArray(body.tags)) update.tags = body.tags;

    await connectDB();
    const lead = await Lead.findByIdAndUpdate(
      params.id,
      { $set: update },
      { new: true }
    ).lean();

    if (!lead) {
      return NextResponse.json({ error: "Lead not found" }, { status: 404 });
    }

    return NextResponse.json({ lead });
  } catch (error) {
    console.error("Update lead error:", error);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}

// DELETE /api/admin/leads/[id] — soft delete: move to DeletedLead collection
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  if (!checkAuth(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    await connectDB();
    const lead = await Lead.findById(params.id).lean() as any;
    if (!lead) return NextResponse.json({ error: "Lead not found" }, { status: 404 });

    await DeletedLead.create({
      name: lead.name,
      email: lead.email,
      phone: lead.phone,
      message: lead.message,
      status: lead.status,
      source: lead.source,
      tags: lead.tags,
      originalCreatedAt: lead.createdAt,
    });

    await Lead.findByIdAndDelete(params.id);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Delete lead error:", error);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}
