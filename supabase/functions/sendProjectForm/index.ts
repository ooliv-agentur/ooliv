
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
    const formData = await req.json();
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
    console.error("Error sending emails:", error);
    return new Response(JSON.stringify({
      success: false,
      message: error.message || "Unknown error"
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

  // Check if this is a prototype request
  const isPrototype = sanitizedData.projectType === 'prototype';

  if (isPrototype) {
    // Send prototype-specific email
    await sendPrototypeAdminEmail(client, sanitizedData, smtpUsername, language);
  } else {
    // Send regular project inquiry email
    await sendRegularAdminEmail(client, sanitizedData, smtpUsername, language);
  }
}

async function sendPrototypeAdminEmail(client, data, smtpUsername, language) {
  const currentTime = new Date().toLocaleString(language === "en" ? "en-US" : "de-DE", {
    timeZone: "Europe/Berlin",
    year: "numeric",
    month: "2-digit", 
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit"
  });

  const labels = language === "en" 
    ? {
        subject: "🚀 New Free Concept Request via ooliv.de",
        title: "New Free Website Concept Request",
        email: "Email",
        timestamp: "Requested at",
        source: "Source",
        description: "The customer has requested a free website concept. This is a 48-hour commitment to provide strategic wireframes and content concept.",
        action: "Next Steps",
        actionItems: [
          "• Confirm receipt within 24 hours",
          "• Prepare strategic wireframes based on AIDA principle",
          "• Create content concept and user journey",
          "• Deliver concept within 48 hours"
        ],
        footer: `This email was sent automatically.\n© ${new Date().getFullYear()} ooliv`
      }
    : {
        subject: "🚀 Neue Prototyp-Anfrage über ooliv.de",
        title: "Neue Website-Konzept Anfrage",
        email: "E-Mail",
        timestamp: "Angefragt am",
        source: "Quelle",
        description: "Der Kunde hat ein kostenloses Website-Konzept angefragt. Hierbei handelt es sich um eine 48-Stunden-Zusage für strategische Wireframes und Inhaltskonzept.",
        action: "Nächste Schritte",
        actionItems: [
          "• Eingangsbestätigung innerhalb von 24 Stunden",
          "• Strategische Wireframes nach AIDA-Prinzip erstellen",
          "• Inhaltskonzept und User Journey entwickeln", 
          "• Konzept innerhalb von 48 Stunden liefern"
        ],
        footer: `Diese E-Mail wurde automatisch gesendet.\n© ${new Date().getFullYear()} ooliv`
      };

  const htmlContent = `<!DOCTYPE html>
<html lang="${language}">
<head><meta charset="UTF-8"></head>
<body style="font-family: Arial, sans-serif; color: #333;">
  <div style="display:none; max-height:0; overflow:hidden;">${language === "en" ? "New free concept request via ooliv.de" : "Neue Prototyp-Anfrage über ooliv.de"}</div>
  
  <h1 style="color: #006064; margin-bottom: 10px;">${labels.title}</h1>
  <p style="color: #666; font-style: italic; margin-bottom: 25px;">${labels.description}</p>
  
  <div style="background: #f0f8ff; padding: 20px; border-radius: 8px; border-left: 4px solid #006064; margin-bottom: 25px;">
    <table style="width: 100%; border-collapse: collapse;">
      <tr>
        <td style="padding: 8px 0; font-weight: bold; width: 120px;">${labels.email}:</td>
        <td style="padding: 8px 0; color: #006064; font-weight: 600;">${data.email}</td>
      </tr>
      <tr>
        <td style="padding: 8px 0; font-weight: bold;">${labels.timestamp}:</td>
        <td style="padding: 8px 0;">${currentTime}</td>
      </tr>
      <tr>
        <td style="padding: 8px 0; font-weight: bold;">${labels.source}:</td>
        <td style="padding: 8px 0;">ooliv.de (Prototyp-Formular)</td>
      </tr>
    </table>
  </div>
  
  <div style="background: #fff3cd; padding: 20px; border-radius: 8px; border-left: 4px solid #ffc107;">
    <h3 style="color: #856404; margin-top: 0; margin-bottom: 15px;">${labels.action}:</h3>
    <div style="color: #856404;">
      ${labels.actionItems.map(item => `<div style="margin-bottom: 5px;">${item}</div>`).join('')}
    </div>
  </div>
  
  <p style="font-size: 14px; color: #777; margin-top: 30px;">
    ${language === "en" ? "This email was sent automatically." : "Diese E-Mail wurde automatisch gesendet."}<br>
    &copy; ${new Date().getFullYear()} ooliv
  </p>
</body>
</html>`;

  const textContent = `${labels.title}

${labels.description}

${labels.email}: ${data.email}
${labels.timestamp}: ${currentTime}
${labels.source}: ooliv.de (Prototyp-Formular)

${labels.action}:
${labels.actionItems.join('\n')}

${labels.footer}`;

  await client.send({
    from: "info@ooliv.de",
    to: smtpUsername,
    replyTo: data.email,
    subject: labels.subject,
    html: htmlContent,
    text: textContent,
    encoding: "8bit",
    contentType: "text/html; charset=utf-8",
    textEncoding: "8bit",
    textContentType: "text/plain; charset=utf-8"
  });
}

async function sendRegularAdminEmail(client, data, smtpUsername, language) {
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
    { label: labels.projectType, value: data.projectType },
    { label: labels.companyName, value: data.companyName },
    { label: labels.industry, value: data.industry },
    { label: labels.websiteUrl, value: data.websiteUrl || labels.notSpecified },
    { label: labels.location, value: data.location || labels.notSpecified },
    { label: labels.goal, value: data.goal },
    { label: labels.name, value: data.name },
    { label: labels.email, value: data.email },
    { label: labels.phone, value: data.phone || labels.notSpecified },
    { label: labels.message, value: data.message || labels.noMessage }
  ];

  const htmlContent = `<!DOCTYPE html><html lang="${language}"><head><meta charset="UTF-8"></head><body style="font-family: Arial, sans-serif; color: #333;"><div style="display:none; max-height:0; overflow:hidden;">${language === "en" ? "New project inquiry via ooliv.de – all details in overview." : "Neue Projektanfrage über ooliv.de – alle Details im Überblick."}</div><h1 style="color: #006064;">${labels.title}</h1><div style="background: #f9f9f9; padding: 20px; border-radius: 8px;"><table style="width: 100%; border-collapse: collapse;">${rows.map((row) => `<tr><td style="padding:10px;border-bottom:1px solid #eee;font-weight:bold;width:150px;">${row.label}:</td><td style="padding:10px;border-bottom:1px solid #eee;">${row.value}</td></tr>`).join("")}</table></div><p style="font-size: 14px; color: #777;">${language === "en" ? "This email was sent automatically." : "Diese E-Mail wurde automatisch gesendet."}<br>&copy; ${new Date().getFullYear()} ooliv</p></body></html>`;

  const textContent = rows.map((r) => `${r.label}: ${r.value}`).join("\n") + `\n\n${labels.footer}`;

  await client.send({
    from: "info@ooliv.de",
    to: smtpUsername,
    replyTo: data.email, // Set reply-to to the user's email for faster replies
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
