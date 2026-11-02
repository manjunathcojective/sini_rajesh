exports.handler = async function (event, context) {
  // Only allow POST
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({ success: false, error: "Method Not Allowed" }),
    };
  }

  try {
    const body = JSON.parse(event.body || "{}");
    const { firstName, lastName, name, email, phone, organization, service, message } = body;
    const fullName = name || `${firstName || ""} ${lastName || ""}`.trim();

    if (!fullName || !email) {
      return {
        statusCode: 400,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({ success: false, error: "Name and email are required" }),
      };
    }

    // Process contact form submission (e.g. log, forward to email / CRM)
    console.log("Contact form submission received:", {
      fullName,
      email,
      phone,
      organization,
      service,
      message,
      timestamp: new Date().toISOString(),
    });

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        success: true,
        message: "Thank you for reaching out. I will get back to you soon.",
        data: { fullName, email, phone, organization, service, message },
      }),
    };
  } catch (error) {
    console.error("Netlify contact function error:", error);
    return {
      statusCode: 500,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({ success: false, error: "Internal Server Error" }),
    };
  }
};
