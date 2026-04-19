import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import { Lead } from "@/models/Lead";
import { verifyToken } from "@/lib/auth";

function checkAuth(request: NextRequest) {
  const token = request.cookies.get("admin_token")?.value;
  return token ? verifyToken(token) : null;
}

// DELETE /api/admin/leads/[id]/notes — delete a note by its _id
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  if (!checkAuth(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { noteId } = await request.json();

    await connectDB();

    const lead = await Lead.findByIdAndUpdate(
      params.id,
      { $pull: { notes: { _id: noteId } } },
      { new: true }
    ).lean();

    if (!lead) {
      return NextResponse.json({ error: "Lead not found" }, { status: 404 });
    }

    return NextResponse.json({ lead });
  } catch (error) {
    console.error("Delete note error:", error);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}

// POST /api/admin/leads/[id]/notes — add a note to a lead
export async function POST(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  if (!checkAuth(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { content } = await request.json();

    if (!content || content.trim().length === 0) {
      return NextResponse.json({ error: "Note content is required" }, { status: 400 });
    }

    await connectDB();

    // $push appends the new note to the notes array
    const lead = await Lead.findByIdAndUpdate(
      params.id,
      { $push: { notes: { content: content.trim(), createdAt: new Date() } } },
      { new: true }
    ).lean();

    if (!lead) {
      return NextResponse.json({ error: "Lead not found" }, { status: 404 });
    }

    return NextResponse.json({ lead });
  } catch (error) {
    console.error("Add note error:", error);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}
