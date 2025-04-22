
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

    const firstName = formData.name?.split(" ")[0] || "Interessent";
    await sendAdminEmail(client, formData, smtpUsername);
    await sendUserEmail(client, formData.email, firstName, smtpUsername);
    await client.close();

    return new Response(JSON.stringify({
      success: true,
      message: "E-Mails erfolgreich versendet"
    }), {
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders
      }
    });
  } catch (error) {
    console.error("Fehler beim E-Mail-Versand:", error);
    return new Response(JSON.stringify({
      success: false,
      message: error.message || "Unbekannter Fehler"
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

async function sendAdminEmail(client, data, smtpUsername) {
  // Sanitize all text fields
  const sanitizedData = {};
  for (const key in data) {
    if (typeof data[key] === 'string') {
      sanitizedData[key] = sanitizeText(data[key]);
    } else {
      sanitizedData[key] = data[key];
    }
  }
  
  const rows = [
    { label: "Projekttyp", value: sanitizedData.projectType },
    { label: "Unternehmen", value: sanitizedData.companyName },
    { label: "Branche", value: sanitizedData.industry },
    { label: "Website", value: sanitizedData.websiteUrl || "Nicht angegeben" },
    { label: "Standort", value: sanitizedData.location || "Nicht angegeben" },
    { label: "Hauptziel", value: sanitizedData.goal },
    { label: "Name", value: sanitizedData.name },
    { label: "E-Mail", value: sanitizedData.email },
    { label: "Telefon", value: sanitizedData.phone || "Nicht angegeben" },
    { label: "Nachricht", value: sanitizedData.message || "Keine Nachricht hinterlassen" }
  ];

  const htmlContent = `<!DOCTYPE html><html lang="de"><head><meta charset="UTF-8"></head><body style="font-family: Arial, sans-serif; color: #333;"><div style="display:none; max-height:0; overflow:hidden;">Neue Projektanfrage über ooliv.de – alle Details im Überblick.</div><h1 style="color: #006064;">Neue Projektanfrage</h1><div style="background: #f9f9f9; padding: 20px; border-radius: 8px;"><table style="width: 100%; border-collapse: collapse;">${rows.map((row) => `<tr><td style="padding:10px;border-bottom:1px solid #eee;font-weight:bold;width:150px;">${row.label}:</td><td style="padding:10px;border-bottom:1px solid #eee;">${row.value}</td></tr>`).join("")}</table></div><p style="font-size: 14px; color: #777;">Diese E-Mail wurde automatisch gesendet.<br>&copy; ${new Date().getFullYear()} ooliv</p></body></html>`;

  const textContent = rows.map((r) => `${r.label}: ${r.value}`).join("\n") + `\n\nDiese E-Mail wurde automatisch gesendet.\n© ${new Date().getFullYear()} ooliv`;

  await client.send({
    from: "info@ooliv.de",
    to: smtpUsername,
    subject: "📥 Neue Projektanfrage über ooliv.de",
    html: htmlContent,
    text: textContent,
    encoding: "8bit",
    contentType: "text/html; charset=utf-8",
    textEncoding: "8bit",
    textContentType: "text/plain; charset=utf-8"
  });
}

async function sendUserEmail(client, email, firstName, smtpUsername) {
  const html = `<!DOCTYPE html><html lang="de"><head><meta charset="UTF-8"></head><body style="font-family: Arial, sans-serif; color: #333;"><div style="display:none; max-height:0; overflow:hidden;">Vielen Dank für Ihre Anfrage – wir melden uns zeitnah bei Ihnen.</div><h1 style="color: #006064;">Vielen Dank für Ihre Anfrage</h1><div style="background: #f9f9f9; padding: 20px; border-radius: 8px;"><p>Guten Tag ${firstName},</p><p>vielen Dank für Ihre Nachricht – wir melden uns in Kürze bei Ihnen.</p><p>Sie erreichen uns auch direkt unter <a href="mailto:${smtpUsername}">${smtpUsername}</a> oder telefonisch unter +49 176 80 16 76 41.</p><p style="margin-top: 30px;"><a href="https://ooliv.de" style="background: #006064; color: white; padding: 10px 20px; text-decoration: none; border-radius: 4px;">Mehr über ooliv erfahren</a></p></div><p style="font-size: 14px; color: #777;">ooliv | Mombacher Str. 25 | 55122 Mainz<br>&copy; ${new Date().getFullYear()} ooliv</p></body></html>`;

  const text = `Guten Tag ${firstName},\n\nvielen Dank für Ihre Nachricht – wir melden uns in Kürze bei Ihnen.\n\nKontakt: ${smtpUsername}\nTelefon: 06131 – 63 67 801\n\nMehr über ooliv: https://ooliv.de\n\n© ${new Date().getFullYear()} ooliv`;

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
