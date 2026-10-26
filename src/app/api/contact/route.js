import { NextResponse } from "next/server";

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

    // Process contact form submission (e.g. log, forward to email / CRM)
    return NextResponse.json(
      {
        success: true,
        message: "Message sent! Thank you for reaching out.",
        data: { fullName, email, phone, organization, service, message },
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
