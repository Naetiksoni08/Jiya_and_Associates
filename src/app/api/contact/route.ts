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
  phone: z.string().min(7, "Invalid phone number"),
  nature: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

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
      await resend.emails.send({
        from: process.env.RESEND_FROM_EMAIL!,
        to: process.env.RESEND_TO_EMAIL!,
        subject: `New Enquiry from ${name}`,
        html: `
          <h2>New Lead — Jiya &amp; Associates</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}</p>
        `,
      });
    } catch (emailError) {
      // Log but do not return an error to the user
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
