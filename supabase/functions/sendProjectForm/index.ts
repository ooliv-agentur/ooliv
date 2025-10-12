
import { serve } from "https://deno.land/std@0.177.0/http/server.ts";
import { SMTPClient } from "https://deno.land/x/denomailer@1.6.0/mod.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    let formData;
    try {
      formData = await req.json();
    } catch (e) {
      return new Response(JSON.stringify({
        success: false,
        message: "Invalid JSON payload"
      }), {
        status: 400,
        headers: { "Content-Type": "application/json", ...corsHeaders }
      });
    }

    // Validate required fields
    if (!formData.email || !formData.name || !formData.projectType) {
      return new Response(JSON.stringify({
        success: false,
        message: "Missing required fields: email, name, projectType"
      }), {
        status: 400,
        headers: { "Content-Type": "application/json", ...corsHeaders }
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      return new Response(JSON.stringify({
        success: false,
        message: "Invalid email format"
      }), {
        status: 400,
        headers: { "Content-Type": "application/json", ...corsHeaders }
      });
    }

    // Validate field lengths
    const maxLengths = {
      name: 100,
      email: 255,
      companyName: 200,
      industry: 100,
      websiteUrl: 500,
      location: 200,
      goal: 500,
      phone: 50,
      message: 2000
    };

    for (const [field, maxLength] of Object.entries(maxLengths)) {
      if (formData[field] && formData[field].length > maxLength) {
        return new Response(JSON.stringify({
          success: false,
          message: `Field ${field} exceeds maximum length of ${maxLength}`
        }), {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders }
        });
      }
    }

    const smtpUsername = Deno.env.get("SMTP_USERNAME");
    const smtpPassword = Deno.env.get("SMTP_PASSWORD");

    // Determine language based on form data
    // If a form is submitted from an English page, we'll expect a "language" field to be set to "en"
    const language = formData.language || "de"; // Default to German if not specified
    
    console.log(`Processing form submission in language: ${language}`);

    const client = new SMTPClient({
      connection: {
        hostname: "smtp.mailbox.org",
        port: 465,
        tls: true,
        auth: {
          username: smtpUsername,
          password: smtpPassword
        }
      }
    });

    const firstName = formData.name?.split(" ")[0] || (language === "en" ? "Customer" : "Interessent");
    await sendAdminEmail(client, formData, smtpUsername, language);
    await sendUserEmail(client, formData.email, firstName, smtpUsername, language);
    await client.close();

    return new Response(JSON.stringify({
      success: true,
      message: language === "en" ? "Emails sent successfully" : "E-Mails erfolgreich versendet"
    }), {
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders
      }
    });
  } catch (error) {
    console.error("Error sending emails:", error instanceof Error ? error.message : "Unknown error");
    return new Response(JSON.stringify({
      success: false,
      message: "Failed to send emails"
    }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders
      }
    });
  }
});

// Helper function to sanitize text by removing MIME encoding artifacts
function sanitizeText(text) {
  if (!text) return "";
  
  // Replace =20 with regular spaces
  return text.replace(/=20/g, " ")
    // Handle other common MIME encoding issues if needed
    .replace(/=([0-9A-F]{2})/g, (match, p1) => {
      try {
        return String.fromCharCode(parseInt(p1, 16));
      } catch (e) {
        return match;
      }
    });
}

async function sendAdminEmail(client, data, smtpUsername, language) {
  // Sanitize all text fields
  const sanitizedData = {};
  for (const key in data) {
    if (typeof data[key] === 'string') {
      sanitizedData[key] = sanitizeText(data[key]);
    } else {
      sanitizedData[key] = data[key];
    }
  }

  // Different labels and content based on language
  const labels = language === "en" 
    ? {
        projectType: "Project Type",
        companyName: "Company",
        industry: "Industry",
        websiteUrl: "Website",
        location: "Location",
        goal: "Main Goal",
        name: "Name",
        email: "Email",
        phone: "Phone",
        message: "Message",
        notSpecified: "Not specified",
        noMessage: "No message left",
        subject: "📥 New Project Inquiry via ooliv.de",
        title: "New Project Inquiry",
        footer: `This email was sent automatically.\n© ${new Date().getFullYear()} ooliv`
      }
    : {
        projectType: "Projekttyp",
        companyName: "Unternehmen", 
        industry: "Branche",
        websiteUrl: "Website",
        location: "Standort",
        goal: "Hauptziel",
        name: "Name",
        email: "E-Mail",
        phone: "Telefon",
        message: "Nachricht",
        notSpecified: "Nicht angegeben",
        noMessage: "Keine Nachricht hinterlassen",
        subject: "📥 Neue Projektanfrage über ooliv.de",
        title: "Neue Projektanfrage",
        footer: `Diese E-Mail wurde automatisch gesendet.\n© ${new Date().getFullYear()} ooliv`
      };
  
  const rows = [
    { label: labels.projectType, value: sanitizedData.projectType },
    { label: labels.companyName, value: sanitizedData.companyName },
    { label: labels.industry, value: sanitizedData.industry },
    { label: labels.websiteUrl, value: sanitizedData.websiteUrl || labels.notSpecified },
    { label: labels.location, value: sanitizedData.location || labels.notSpecified },
    { label: labels.goal, value: sanitizedData.goal },
    { label: labels.name, value: sanitizedData.name },
    { label: labels.email, value: sanitizedData.email },
    { label: labels.phone, value: sanitizedData.phone || labels.notSpecified },
    { label: labels.message, value: sanitizedData.message || labels.noMessage }
  ];

  const htmlContent = `<!DOCTYPE html><html lang="${language}"><head><meta charset="UTF-8"></head><body style="font-family: Arial, sans-serif; color: #333;"><div style="display:none; max-height:0; overflow:hidden;">${language === "en" ? "New project inquiry via ooliv.de – all details in overview." : "Neue Projektanfrage über ooliv.de – alle Details im Überblick."}</div><h1 style="color: #006064;">${labels.title}</h1><div style="background: #f9f9f9; padding: 20px; border-radius: 8px;"><table style="width: 100%; border-collapse: collapse;">${rows.map((row) => `<tr><td style="padding:10px;border-bottom:1px solid #eee;font-weight:bold;width:150px;">${row.label}:</td><td style="padding:10px;border-bottom:1px solid #eee;">${row.value}</td></tr>`).join("")}</table></div><p style="font-size: 14px; color: #777;">${language === "en" ? "This email was sent automatically." : "Diese E-Mail wurde automatisch gesendet."}<br>&copy; ${new Date().getFullYear()} ooliv</p></body></html>`;

  const textContent = rows.map((r) => `${r.label}: ${r.value}`).join("\n") + `\n\n${labels.footer}`;

  await client.send({
    from: "info@ooliv.de",
    to: smtpUsername,
    replyTo: sanitizedData.email, // Set reply-to to the user's email for faster replies
    subject: labels.subject,
    html: htmlContent,
    text: textContent,
    encoding: "8bit",
    contentType: "text/html; charset=utf-8",
    textEncoding: "8bit",
    textContentType: "text/plain; charset=utf-8"
  });
}

async function sendUserEmail(client, email, firstName, smtpUsername, language) {
  // Use the correct phone number based on language
  const phoneNumber = language === "en" ? "+49 6131 – 63 67 801" : "06131 – 63 67 801";
  
  // Email content based on language
  if (language === "en") {
    const html = `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"></head><body style="font-family: Arial, sans-serif; color: #333;"><div style="display:none; max-height:0; overflow:hidden;">Thank you for your inquiry – we'll get back to you soon.</div><h1 style="color: #006064;">Thank you for your inquiry</h1><div style="background: #f9f9f9; padding: 20px; border-radius: 8px;"><p>Hello ${firstName},</p><p>Thank you for your message – we will get back to you shortly.</p><p>You can also reach us directly at <a href="mailto:${smtpUsername}">${smtpUsername}</a> or by phone at ${phoneNumber}.</p><p style="margin-top: 30px;"><a href="https://ooliv.de/en" style="background: #006064; color: white; padding: 10px 20px; text-decoration: none; border-radius: 4px;">Learn more about ooliv</a></p></div><p style="font-size: 14px; color: #777;">ooliv | Mombacher Str. 25 | 55122 Mainz<br>&copy; ${new Date().getFullYear()} ooliv</p></body></html>`;
    const text = `Hello ${firstName},\n\nThank you for your message – we will get back to you shortly.\n\nContact: ${smtpUsername}\nPhone: ${phoneNumber}\n\nLearn more about ooliv: https://ooliv.de/en\n\n© ${new Date().getFullYear()} ooliv`;
    
    await client.send({
      from: "info@ooliv.de",
      to: email,
      subject: "✅ Thank you for your inquiry at ooliv",
      html,
      text,
      encoding: "8bit",
      contentType: "text/html; charset=utf-8",
      textEncoding: "8bit",
      textContentType: "text/plain; charset=utf-8"
    });
  } else {
    // German email (updated with correct phone)
    const html = `<!DOCTYPE html><html lang="de"><head><meta charset="UTF-8"></head><body style="font-family: Arial, sans-serif; color: #333;"><div style="display:none; max-height:0; overflow:hidden;">Vielen Dank für Ihre Anfrage – wir melden uns zeitnah bei Ihnen.</div><h1 style="color: #006064;">Vielen Dank für Ihre Anfrage</h1><div style="background: #f9f9f9; padding: 20px; border-radius: 8px;"><p>Guten Tag ${firstName},</p><p>vielen Dank für Ihre Nachricht – wir melden uns in Kürze bei Ihnen.</p><p>Sie erreichen uns auch direkt unter <a href="mailto:${smtpUsername}">${smtpUsername}</a> oder telefonisch unter ${phoneNumber}.</p><p style="margin-top: 30px;"><a href="https://ooliv.de" style="background: #006064; color: white; padding: 10px 20px; text-decoration: none; border-radius: 4px;">Mehr über ooliv erfahren</a></p></div><p style="font-size: 14px; color: #777;">ooliv | Mombacher Str. 25 | 55122 Mainz<br>&copy; ${new Date().getFullYear()} ooliv</p></body></html>`;
    const text = `Guten Tag ${firstName},\n\nvielen Dank für Ihre Nachricht – wir melden uns in Kürze bei Ihnen.\n\nKontakt: ${smtpUsername}\nTelefon: ${phoneNumber}\n\nMehr über ooliv: https://ooliv.de\n\n© ${new Date().getFullYear()} ooliv`;
    
    await client.send({
      from: "info@ooliv.de",
      to: email,
      subject: "✅ Vielen Dank für Ihre Anfrage bei ooliv",
      html,
      text,
      encoding: "8bit",
      contentType: "text/html; charset=utf-8",
      textEncoding: "8bit",
      textContentType: "text/plain; charset=utf-8"
    });
  }
}
