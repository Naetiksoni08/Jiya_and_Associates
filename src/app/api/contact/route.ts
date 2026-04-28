import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { connectDB } from "@/lib/db";
import { Lead } from "@/models/Lead";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// Validate the form input
const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().regex(/^\d{10}$/, "Please enter a valid 10-digit phone number"),
  nature: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

const escapeHtml = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate — if invalid, return field errors
    const result = contactSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json(
        { error: "Validation failed", issues: result.error.flatten().fieldErrors },
        { status: 422 }
      );
    }

    const { name, email, phone, nature, message } = result.data;

    // Save to MongoDB
    await connectDB();
    await Lead.create({ name, email, phone, nature, message, source: "website" });

    // Send email notification — wrapped in try/catch so email failure never breaks the form
    try {
      await Promise.all([
        // Email 1: Lead notification to firm
        resend.emails.send({
          from: process.env.RESEND_FROM_EMAIL!,
          to: process.env.RESEND_TO_EMAIL!,
          subject: `New Enquiry from ${name}`,
          html: `
            <h2>New Lead — Jiya &amp; Associates</h2>
            <p><strong>Name:</strong> ${escapeHtml(name)}</p>
            <p><strong>Email:</strong> ${escapeHtml(email)}</p>
            <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
            <p><strong>Message:</strong></p>
            <p>${escapeHtml(message)}</p>
          `,
        }),
        // Email 2: Confirmation to visitor
        resend.emails.send({
          from: process.env.RESEND_FROM_EMAIL!,
          to: email,
          subject: `We've received your enquiry — Jiya & Associates`,
          html: `
            <div style="font-family: Georgia, serif; max-width: 600px; margin: 0; padding: 32px; background: #ffffff; text-align: left;">
              <h1 style="font-size: 22px; color: #0a1628; margin-bottom: 24px; border-bottom: 2px solid #c9a84c; padding-bottom: 12px;">Jiya &amp; Associates — Legal &amp; Compliance Experts</h1>
              <p style="font-size: 17px; color: #333333; line-height: 1.7;">Dear <strong>${escapeHtml(name)}</strong>,</p>
              <p style="font-size: 17px; color: #333333; line-height: 1.7;">Thank you for reaching out to <strong>Jiya &amp; Associates</strong>.</p>
              <p style="font-size: 17px; color: #333333; line-height: 1.7;">We have received your enquiry and our team will get back to you within <strong>24 hours</strong>.</p>
              <br/>
              <p style="font-size: 17px; color: #333333; line-height: 1.7;">Warm regards,</p>
              <p style="font-size: 17px; color: #0a1628;"><strong>Jiya &amp; Associates</strong></p>
            </div>
          `,
        }),
      ]);
    } catch (emailError) {
      console.error("Email send failed:", emailError);
    }

    return NextResponse.json(
      { success: true, message: "Your enquiry has been received. We will contact you shortly." },
      { status: 201 }
    );
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}
