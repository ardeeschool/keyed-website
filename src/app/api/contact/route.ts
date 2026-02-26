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
     const body = await req.json();
        const { name, email, phone, subject, message } = body;
    
        // ── Validation ──
        if (!name || !email || !message) {
          return NextResponse.json(
            { error: "Name, email, and message are required" },
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
    

 
    
    const timestamp = new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
    });

   
    const sheetResponse = await fetch(process.env.GOOGLE_SCRIPT_URL!, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    sheetName: "Contact",
    timestamp,
    name,
    email,
    phone,
    subject,
    message,
  }),
});

const sheetResult = await sheetResponse.text();
console.log("Sheet response:", sheetResult);

   const htmlBody = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: #09090B; padding: 32px; border-radius: 16px 16px 0 0;">
          <h1 style="color: #ffffff; font-size: 24px; margin: 0 0 4px;">New Contact Message</h1>
          <p style="color: rgba(255,255,255,0.5); font-size: 14px; margin: 0;">KeyEd Contact Page</p>
        </div>

        <div style="background: #ffffff; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 16px 16px; overflow: hidden;">
          <table style="width: 100%; border-collapse: collapse;">
            ${row("Received", timestamp)}
            ${row("Name", `<strong>${name}</strong>`)}
            ${row("Email", `<a href="mailto:${email}" style="color:#019192;text-decoration:none;">${email}</a>`)}
            ${phone ? row("Phone", phone) : ""}
            ${subject ? row("Subject", subject) : ""}
            ${row("Message", message)}
          </table>
        </div>

        <p style="color: #9ca3af; font-size: 12px; text-align: center; margin-top: 24px;">
          This email was sent automatically from Keyedsolution.com contact page
        </p>
      </div>
    `;

     await transporter.sendMail({
      from: `"KeyEd Contact" <${process.env.GMAIL_USER}>`,
      to: process.env.CONTACT_EMAIL,
      replyTo: email,
      subject: `Contact: ${subject || "New Message"} — ${name}`,
      html: htmlBody,
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


function row(label: string, value: string) {
  return `
    <tr>
      <td style="padding:14px 20px;border-bottom:1px solid #f3f4f6;color:#6b7a8d;font-size:13px;width:140px;">${label}</td>
      <td style="padding:14px 20px;border-bottom:1px solid #f3f4f6;color:#1a1a1c;font-size:14px;">${value}</td>
    </tr>
  `;
}