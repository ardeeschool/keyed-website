import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";

// ─────────────────────────────────────────────
// Gmail SMTP transporter
// ─────────────────────────────────────────────
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();

    // ── Extract fields ──
    const profile = formData.get("profile") as string;
    const fullName = formData.get("fullName") as string;
    const email = formData.get("email") as string;
    const mobile = formData.get("mobile") as string;
    const experience = formData.get("experience") as string;
    const dob = formData.get("dob") as string;
    const city = formData.get("city") as string;
    const address = formData.get("address") as string;
    const message = (formData.get("message") as string) || "";
    const cvFile = formData.get("cv") as File | null;

    // ── Validation ──
    if (
      !profile ||
      !fullName ||
      !email ||
      !mobile ||
      !experience ||
      !dob ||
      !city ||
      !address
    ) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // ─────────────────────────────────────────────
    // Prepare CV attachment (for email only)
    // ─────────────────────────────────────────────
    const attachments: { filename: string; content: Buffer }[] = [];
    let cvFileName = "Not uploaded";

    if (cvFile && cvFile.size > 0) {
      const bytes = await cvFile.arrayBuffer();
      attachments.push({
        filename: cvFile.name,
        content: Buffer.from(bytes),
      });

      cvFileName = `${cvFile.name} (${(cvFile.size / 1024 / 1024).toFixed(1)} MB)`;
    }

    const timestamp = new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
    });

    // ─────────────────────────────────────────────
    // 1️⃣ Send data to Google Apps Script (Sheet)
    // ─────────────────────────────────────────────
    const sheetResponse = await fetch(process.env.GOOGLE_SCRIPT_URL!, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    sheetName: "Career",
    timestamp,
    profile,
    fullName,
    email,
    mobile,
    experience,
    dob,
    city,
    address,
    message,
  }),
});

const sheetResult = await sheetResponse.text();
console.log("Sheet response:", sheetResult);

    const htmlBody = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: #09090B; padding: 32px; border-radius: 16px 16px 0 0;">
          <h1 style="color: #ffffff; font-size: 24px; margin: 0 0 4px;">New Job Application</h1>
          <p style="color: rgba(255,255,255,0.5); font-size: 14px; margin: 0;">KeyEd Career Page · ${profile}</p>
        </div>

        <div style="background: #ffffff; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 16px 16px;">
          <table style="width: 100%; border-collapse: collapse;">
            ${row("Submitted", timestamp)}
            ${row("Applied For", profile)}
            ${row("Full Name", `<strong>${fullName}</strong>`)}
            ${row("Email", `<a href="mailto:${email}">${email}</a>`)}
            ${row("Mobile", mobile)}
            ${row("Experience", experience)}
            ${row("Date of Birth", dob)}
            ${row("City", city)}
            ${row("Address", address)}
            ${message ? row("Message", message) : ""}
            ${row("CV", cvFileName)}
          </table>
        </div>

        <p style="color: #9ca3af; font-size: 12px; text-align: center; margin-top: 24px;">
          This email was sent automatically from keyedsolution.com career page
        </p>
      </div>
    `;

    await transporter.sendMail({
      from: `"KeyEd Careers" <${process.env.GMAIL_USER}>`,
      to: process.env.CONTACT_EMAIL,
      replyTo: email,
      subject: `New Application: ${profile} — ${fullName}`,
      html: htmlBody,
      attachments,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Submission error:", error);
    return NextResponse.json(
      { error: "Failed to send application. Please try again." },
      { status: 500 }
    );
  }
}

// ─────────────────────────────────────────────
// Helper for email rows
// ─────────────────────────────────────────────
function row(label: string, value: string) {
  return `
    <tr>
      <td style="padding:14px 20px;border-bottom:1px solid #f3f4f6;color:#6b7a8d;font-size:13px;width:140px;">${label}</td>
      <td style="padding:14px 20px;border-bottom:1px solid #f3f4f6;color:#1a1a1c;font-size:14px;">${value}</td>
    </tr>
  `;
}