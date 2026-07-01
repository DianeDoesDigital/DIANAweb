import { serve } from "https://deno.land/std@0.177.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

serve(async (req) => {
  // CORS headers
  if (req.method === "OPTIONS") {
    return new Response("ok", {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
      },
    });
  }

  try {
    const payload = await req.json();
    console.log("Received waitlist payload:", payload);

    // Extract email and name from Supabase database trigger payload (payload.record) or direct invocation
    const record = payload.record || payload;
    const email = record.email;
    const name = record.name || "Early Believer";

    if (!email) {
      return new Response(JSON.stringify({ error: "No email provided" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    if (!RESEND_API_KEY) {
      console.error("RESEND_API_KEY environment variable is not set");
      return new Response(JSON.stringify({ error: "Server email config missing" }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }

    const role = record.role || "personal";

    let subjectText = "Welcome to the DIANA Nexus 😻";
    let headingText = `Welcome to the Nexus, ${name}! 😻`;
    let bodyContent = `
              <p style="margin: 0 0 16px 0;">
                You are officially on the waitlist for the DIANA movement. Thank you for stepping up to help us transform everyday commerce into a lifesaver for rescued animals.
              </p>
              <p style="margin: 0 0 24px 0;">
                We are building an ecosystem where everyday spending at 100% cruelty-free businesses automatically routes a minimum 5% pledge directly to verified, lifelong animal sanctuaries around the world—at zero additional cost to the consumer.
              </p>
              <table width="100%" border="0" cellpadding="0" cellspacing="0" style="background-color: #FFF0F8; border-radius: 12px; border-left: 4px solid #ff0099; margin-bottom: 24px;">
                <tr>
                  <td style="padding: 18px 20px;">
                    <p style="margin: 0; font-size: 14px; font-weight: 600; color: #0A0507;">
                      What happens next?
                    </p>
                    <p style="margin: 6px 0 0 0; font-size: 14px; color: #4A3542;">
                      You have secured early priority access for our upcoming iOS and Android release. When the app drops, you will be among the very first invited to download, explore the global directory, and start generating impact.
                    </p>
                  </td>
                </tr>
              </table>
              <p style="margin: 0 0 30px 0;">
                If you know an ethical business or animal sanctuary that belongs on the platform, send them our way. We can't wait to build this future with you.
              </p>
    `;

    if (role === "merchant") {
      subjectText = "Intake Received: DIANA Merchant Network 😻";
      headingText = "Merchant Intake Received 😻";
      bodyContent = `
              <p style="margin: 0 0 16px 0;">
                Thank you for registering your interest in partnering with DIANA, <strong>${name}</strong>. We have logged your initial details.
              </p>
              <p style="margin: 0 0 24px 0;">
                Because DIANA enforces an uncompromising standard for animal ethics, every merchant partner must complete our formal onboarding and catalog verification before being approved for distribution.
              </p>
              <table width="100%" border="0" cellpadding="0" cellspacing="0" style="background-color: #FFF0F8; border-radius: 12px; border-left: 4px solid #ff0099; margin-bottom: 24px;">
                <tr>
                  <td style="padding: 18px 20px;">
                    <p style="margin: 0; font-size: 14px; font-weight: 600; color: #0A0507;">
                      What happens next?
                    </p>
                    <p style="margin: 6px 0 0 0; font-size: 14px; color: #4A3542;">
                      Our partnerships team will conduct a preliminary check on your submission and follow up directly with your formal Merchant Verification Package & Catalog Review prior to our ecosystem launch.
                    </p>
                  </td>
                </tr>
              </table>
              <p style="margin: 0 0 30px 0;">
                Thank you for your dedication to ethical commerce. We can't wait to transform everyday spending into lifesavers together.
              </p>
      `;
    } else if (role === "sanctuary") {
      subjectText = "Intake Received: DIANA Sanctuary Network 😻";
      headingText = "Sanctuary Intake Received 😻";
      bodyContent = `
              <p style="margin: 0 0 16px 0;">
                Thank you for submitting your sanctuary intake to the DIANA clearinghouse, <strong>${name}</strong>. We deeply honor your frontline work protecting rescued animals.
              </p>
              <p style="margin: 0 0 24px 0;">
                To protect our community's trust and ensure every cent pledged supports lifelong, uncompromised animal care, all sanctuaries must undergo formal due diligence and accreditation before being approved for platform distribution.
              </p>
              <table width="100%" border="0" cellpadding="0" cellspacing="0" style="background-color: #FFF0F8; border-radius: 12px; border-left: 4px solid #ff0099; margin-bottom: 24px;">
                <tr>
                  <td style="padding: 18px 20px;">
                    <p style="margin: 0; font-size: 14px; font-weight: 600; color: #0A0507;">
                      What happens next?
                    </p>
                    <p style="margin: 6px 0 0 0; font-size: 14px; color: #4A3542;">
                      Our verification team will review your initial intake details and follow up directly with our formal Sanctuary Accreditation Package to request animal care standards and governance documentation.
                    </p>
                  </td>
                </tr>
              </table>
              <p style="margin: 0 0 30px 0;">
                Thank you for giving animals the haven they deserve. We look forward to connecting your sanctuary with our global community.
              </p>
      `;
    } else if (role === "builder") {
      subjectText = "Intake Received: DIANA Build Team 😻";
      headingText = "Builder Intake Received 😻";
      bodyContent = `
              <p style="margin: 0 0 16px 0;">
                Thank you for offering your skills to co-create digital infrastructure for animal advocacy, <strong>${name}</strong>. We have logged your selected contribution profile.
              </p>
              <p style="margin: 0 0 24px 0;">
                We carefully curate our core build team across our 6 contribution profiles to ensure complete alignment with our 100% vegan ethics and technical roadmap.
              </p>
              <table width="100%" border="0" cellpadding="0" cellspacing="0" style="background-color: #FFF0F8; border-radius: 12px; border-left: 4px solid #ff0099; margin-bottom: 24px;">
                <tr>
                  <td style="padding: 18px 20px;">
                    <p style="margin: 0; font-size: 14px; font-weight: 600; color: #0A0507;">
                      What happens next?
                    </p>
                    <p style="margin: 6px 0 0 0; font-size: 14px; color: #4A3542;">
                      Our team will reach out directly to request your background, portfolio, or GitHub link as relevant engineering, design, or growth initiatives open up.
                    </p>
                  </td>
                </tr>
              </table>
              <p style="margin: 0 0 30px 0;">
                Thank you for offering your skills and sweat equity for the animals.
              </p>
      `;
    }

    const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Welcome to the Nexus</title>
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap" rel="stylesheet">
</head>
<body style="margin: 0; padding: 0; background-color: #FFF5FA; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #2D1525; -webkit-font-smoothing: antialiased;">
  <table width="100%" border="0" cellpadding="0" cellspacing="0" style="background-color: #FFF5FA; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table width="100%" border="0" cellpadding="0" cellspacing="0" style="max-width: 600px; background-color: #FFFFFF; border-radius: 20px; overflow: hidden; box-shadow: 0 10px 30px rgba(255, 0, 153, 0.08); border: 1px solid rgba(255, 0, 153, 0.2);">
          <tr>
            <td style="background-color: #ff0099; height: 6px; font-size: 0; line-height: 0;">&nbsp;</td>
          </tr>
          <tr>
            <td align="center" style="padding: 40px 40px 20px 40px;">
              <img src="https://dianafortheanimals.org/diana-logo.png" alt="DIANA Logo" width="76" height="76" style="display: block; margin: 0 auto 14px auto;" />
              <h1 style="margin: 0; font-family: 'Playfair Display', Georgia, serif; font-size: 34px; font-weight: 700; letter-spacing: 3.8px; color: #ff0099;">
                DIANA
              </h1>
            </td>
          </tr>
          <tr>
            <td style="padding: 0 40px;">
              <hr style="border: none; border-top: 1px solid #FFE5F3; margin: 20px 0;" />
            </td>
          </tr>
          <tr>
            <td style="padding: 10px 40px 30px 40px; font-size: 16px; line-height: 1.6; color: #4A3542;">
              <h2 style="margin: 0 0 16px 0; font-size: 22px; font-weight: 700; color: #0A0507;">
                ${headingText}
              </h2>
${bodyContent}
              <table border="0" cellpadding="0" cellspacing="0" style="margin: 0 auto;">
                <tr>
                  <td align="center" style="border-radius: 50px; background-color: #ff0099;">
                    <a href="https://dianafortheanimals.org" target="_blank" style="display: inline-block; padding: 14px 32px; font-size: 15px; font-weight: 700; color: #FFFFFF; text-decoration: none; border-radius: 50px;">
                      Explore DIANA Ecosystem
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="padding: 0 40px;">
              <hr style="border: none; border-top: 1px solid #FFE5F3; margin: 10px 0 20px 0;" />
            </td>
          </tr>
          <tr>
            <td align="center" style="padding: 0 40px 35px 40px; font-size: 12px; line-height: 1.5; color: #8C7584;">
              <p style="margin: 0 0 12px 0; font-weight: 600; color: #4A3542;">
                <span style="font-size: 17px; font-weight: 700; letter-spacing: 1.2px; color: #4A3542;">For the Animals,</span><br />
                <span style="font-family: 'Playfair Display', Georgia, serif; font-size: 18px; font-weight: 700; letter-spacing: 1px; color: #ff0099;">The DIANA Team</span>
              </p>
              <p style="margin: 0 0 6px 0; font-size: 11px; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase; color: #0A0507;">
                Digital Infrastructure for Animal Networks &amp; Advocacy
              </p>
              <p style="margin: 0 0 12px 0;">
                ACN 699 347 861 &bull; 100% Vegan &amp; Cruelty-Free Ecosystem
              </p>
              <p style="margin: 0; font-size: 11px; color: #A895A2;">
                You received this email because you signed up on <a href="https://dianafortheanimals.org" style="color: #ff0099; text-decoration: none;">dianafortheanimals.org</a>.<br />
                &copy; 2026 DIANA. All rights reserved.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
    `;

    // Call Resend API
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "DIANA <hello@dianafortheanimals.org>",
        to: [email],
        subject: subjectText,
        html: htmlContent,
      }),
    });

    const resData = await res.json();
    if (!res.ok) {
      console.error("Resend API error:", resData);
      return new Response(JSON.stringify({ error: "Failed to send email", details: resData }), {
        status: res.status,
        headers: { "Content-Type": "application/json" },
      });
    }

    console.log("Email sent successfully:", resData);
    return new Response(JSON.stringify({ success: true, id: resData.id }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
  } catch (error) {
    console.error("Function exception:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
});
