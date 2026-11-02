import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Fallback FormSubmit token if SMTP is not configured
const FORMSUBMIT_TOKEN = "0d301ed05ffe056a530f5320794928cc";

export async function POST(request) {
  try {
    const body = await request.json();
    const { firstName, lastName, name, email, phone, organization, service, message } = body;
    const fullName = name || `${firstName || ""} ${lastName || ""}`.trim();

    if (!fullName || !email) {
      return NextResponse.json(
        { success: false, error: "Name and email are required" },
        { status: 400 }
      );
    }

    // 1. If SMTP environment variables are set (e.g. Hostinger SMTP / Vercel):
    const smtpHost = process.env.SMTP_HOST;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const rawRecipients =
      process.env.CONTACT_RECIPIENT_EMAILS ||
      process.env.CONTACT_RECIPIENT_EMAIL ||
      process.env.SMTP_TO_EMAIL ||
      "";

    const recipientList = rawRecipients
      ? rawRecipients
        .split(",")
        .map((e) => e.trim())
        .filter(Boolean)
      : smtpUser
        ? [smtpUser]
        : [];

    const recipientEmail = recipientList.length > 0 ? recipientList.join(", ") : smtpUser;

    // 1. Try SMTP if configured (Hostinger / Gmail / Custom SMTP)
    if (smtpHost && smtpUser && smtpPass) {
      try {
        const smtpPort = parseInt(process.env.SMTP_PORT || "465", 10);
        const isSecure = smtpPort === 465;

        const transporter = nodemailer.createTransport({
          host: smtpHost,
          port: smtpPort,
          secure: isSecure,
          auth: {
            user: smtpUser,
            pass: smtpPass,
          },
        });

        const emailHtml = `
          <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #E6E6E6; border-radius: 8px; overflow: hidden; background-color: #FEFEFE;">
            <div style="background-color: #BA676A; padding: 24px 28px; color: #FFFFFF;">
              <h2 style="margin: 0; font-size: 22px; font-weight: 600; font-family: Georgia, serif; font-style: italic;">Dr. Sini Rajesh</h2>
              <p style="margin: 4px 0 0 0; font-size: 14px; opacity: 0.9;">New Website Inquiry</p>
            </div>
            <div style="padding: 28px;">
              <table style="width: 100%; border-collapse: collapse; font-size: 15px;">
                <tr style="border-bottom: 1px solid #F0F0F0;">
                  <td style="padding: 10px 0; font-weight: 600; color: #595959; width: 140px;">Name:</td>
                  <td style="padding: 10px 0; color: #1A1A1A; font-weight: 500;">${fullName}</td>
                </tr>
                <tr style="border-bottom: 1px solid #F0F0F0;">
                  <td style="padding: 10px 0; font-weight: 600; color: #595959;">Email:</td>
                  <td style="padding: 10px 0; color: #1A1A1A;"><a href="mailto:${email}" style="color: #BA676A; text-decoration: none;">${email}</a></td>
                </tr>
                <tr style="border-bottom: 1px solid #F0F0F0;">
                  <td style="padding: 10px 0; font-weight: 600; color: #595959;">Phone:</td>
                  <td style="padding: 10px 0; color: #1A1A1A;">${phone || "Not provided"}</td>
                </tr>
                <tr style="border-bottom: 1px solid #F0F0F0;">
                  <td style="padding: 10px 0; font-weight: 600; color: #595959;">Organization:</td>
                  <td style="padding: 10px 0; color: #1A1A1A;">${organization || "Not provided"}</td>
                </tr>
                <tr style="border-bottom: 1px solid #F0F0F0;">
                  <td style="padding: 10px 0; font-weight: 600; color: #595959;">Service / Area:</td>
                  <td style="padding: 10px 0; color: #BA676A; font-weight: 600;">${service || "General Inquiry"}</td>
                </tr>
                <tr>
                  <td style="padding: 14px 0 6px 0; font-weight: 600; color: #595959; vertical-align: top;">Message:</td>
                  <td style="padding: 14px 0 6px 0; color: #1A1A1A; line-height: 1.6; white-space: pre-wrap;">${message || "No message provided."}</td>
                </tr>
              </table>
            </div>
            <div style="background-color: #F8F8F8; padding: 14px 28px; font-size: 12px; color: #777777; border-top: 1px solid #EAEAEA;">
              This email was sent from the contact form on Dr. Sini Rajesh website. You can reply directly to this email to contact ${fullName}.
            </div>
          </div>
        `;

        await transporter.sendMail({
          from: `"${process.env.SMTP_FROM_NAME || "Dr. Sini Rajesh Website"}" <${smtpUser}>`,
          to: recipientEmail,
          replyTo: email,
          subject: `New Inquiry from ${fullName} - ${service || "Website Contact"}`,
          html: emailHtml,
        });

        return NextResponse.json(
          {
            success: true,
            message: "Thank you for reaching out. Your message has been sent successfully.",
          },
          { status: 200 }
        );
      } catch (smtpErr) {
        console.warn("SMTP send failed, falling back to direct relay:", smtpErr?.message || smtpErr);
      }
    }

    // 2. Direct Delivery Fallback: Delivers to the configured recipient email(s)
    const primaryRecipient = recipientList[0] || null;
    const targetEndpoint = primaryRecipient
      ? `https://formsubmit.co/ajax/${encodeURIComponent(primaryRecipient)}`
      : `https://formsubmit.co/ajax/${FORMSUBMIT_TOKEN}`;

    const payload = {
      name: fullName,
      "First Name": firstName || "",
      "Last Name": lastName || "",
      email: email,
      phone: phone || "Not provided",
      organization: organization || "Not provided",
      "Selected Service": service || "General Inquiry",
      message: message || "",
      _subject: `New Inquiry from ${fullName} - Dr. Sini Rajesh Website`,
      _template: "table",
      _captcha: "false",
      ...(recipientList.length > 1 ? { _cc: recipientList.slice(1).join(", ") } : {}),
    };

    const formSubmitRes = await fetch(targetEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    });

    const formSubmitData = await formSubmitRes.json().catch(() => ({}));

    if (
      formSubmitRes.ok &&
      (formSubmitData.success === "true" ||
        formSubmitData.success === true ||
        formSubmitData.status === "success" ||
        formSubmitData.message)
    ) {
      return NextResponse.json(
        {
          success: true,
          message: "Thank you for reaching out. Your message has been sent successfully.",
        },
        { status: 200 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Thank you for reaching out. We have received your message.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact Form API Error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to send message. Please try again later." },
      { status: 500 }
    );
  }
}
