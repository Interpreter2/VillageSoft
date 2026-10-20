import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, company, service, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const submissionTime = new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      dateStyle: "medium",
      timeStyle: "short",
    });

    const leadData = {
      Timestamp: submissionTime,
      Name: name.trim(),
      Email: email.trim(),
      Phone: phone ? phone.trim() : "N/A",
      Company: company ? company.trim() : "N/A",
      Service: service ? service.trim() : "General",
      Message: message.trim(),
    };

    const webhookUrl = process.env.GOOGLE_SHEET_WEBHOOK_URL || process.env.SHEETDB_URL;

    if (webhookUrl) {
      const isSheetDB = webhookUrl.includes("sheetdb.io");
      const payload = isSheetDB ? { data: [leadData] } : leadData;

      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
        redirect: "follow",
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error("Google Sheet webhook error:", errorText);
        return NextResponse.json(
          { error: "Failed to record message to Google Sheet." },
          { status: 502 }
        );
      }
    } else {
      // Development / unconfigured webhook fallback: log to console
      console.log("[VillageSoft Contact Form] New Submission (Webhook URL not set yet):", leadData);
    }

    return NextResponse.json({
      success: true,
      message: "Your message has been sent successfully! Our team will contact you soon.",
    });
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again later." },
      { status: 500 }
    );
  }
}
