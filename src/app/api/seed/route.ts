import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import { Lead } from "@/models/Lead";

// Visit this route once to insert a dummy lead for testing
// GET /api/seed
export async function GET() {
  if (process.env.NODE_ENV === "production") {
    return NextResponse.json({ error: "Not available in production" }, { status: 403 });
  }

  await connectDB();

  await Lead.create({
    name: "Rahul Sharma",
    email: "rahul.sharma@example.com",
    phone: "9876543210",
    message:
      "I am looking for legal assistance regarding a GST dispute with the tax authorities. We received a show cause notice last month and need urgent representation. Please let me know the process and your fees.",
    status: "pending",
    source: "jiya-and-associates",
  });

  return NextResponse.json({ success: true, message: "Dummy lead inserted" });
}
