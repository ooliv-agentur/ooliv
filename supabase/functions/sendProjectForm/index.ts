
import { serve } from "https://deno.land/std@0.177.0/http/server.ts";
import { SMTPClient } from "https://deno.land/x/denomailer@1.6.0/mod.ts";

// CORS headers for browser requests
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ProjectFormData {
  projectType: string;
  companyName: string;
  industry: string;
  websiteUrl: string;
  location: string;
  goal: string;
  name: string;
  email: string;
  phone?: string;
  message?: string;
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const formData: ProjectFormData = await req.json();
    
    // Create SMTP client
    const client = new SMTPClient({
      connection: {
        hostname: "smtp.strato.de",
        port: 465,
        tls: true,
        auth: {
          username: "info@ooliv.de",
          password: Deno.env.get("EMAIL_PASSWORD") || "",
        },
      },
    });

    // Extract first name for personalization
    const firstName = formData.name.split(" ")[0];

    // Send admin notification email
    await sendAdminEmail(client, formData);
    
    // Send confirmation email to user
    await sendUserEmail(client, formData.email, firstName);
    
    // Close the connection
    await client.close();

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Emails sent successfully" 
      }),
      {
        headers: { 
          "Content-Type": "application/json",
          ...corsHeaders 
        },
      }
    );

  } catch (error) {
    console.error("Error sending emails:", error);
    
    return new Response(
      JSON.stringify({ 
        success: false, 
        message: error.message 
      }),
      {
        status: 500,
        headers: { 
          "Content-Type": "application/json",
          ...corsHeaders 
        },
      }
    );
  }
});

async function sendAdminEmail(client: SMTPClient, formData: ProjectFormData) {
  // Generate detail rows for admin email
  const detailRows = [
    { label: "Projekttyp", value: formData.projectType },
    { label: "Unternehmen", value: formData.companyName },
    { label: "Branche", value: formData.industry },
    { label: "Website", value: formData.websiteUrl || "Nicht angegeben" },
    { label: "Standort", value: formData.location || "Nicht angegeben" },
    { label: "Hauptziel", value: formData.goal },
    { label: "Name", value: formData.name },
    { label: "E-Mail", value: formData.email },
    { label: "Telefon", value: formData.phone || "Nicht angegeben" },
    { label: "Nachricht", value: formData.message || "Keine Nachricht hinterlassen" },
  ];

  // Format the details as HTML table rows
  const detailsHTML = detailRows.map(row => 
    `<tr>
      <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; width: 150px;">${row.label}:</td>
      <td style="padding: 10px; border-bottom: 1px solid #eee;">${row.value}</td>
    </tr>`
  ).join("");

  // HTML Template for admin email
  const htmlContent = `
    <!DOCTYPE html>
    <html lang="de">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Neue Projektanfrage</title>
    </head>
    <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
      <div style="text-align: center; margin-bottom: 30px;">
        <img src="https://ooliv.de/logo-email.png" alt="ooliv Logo" width="150" style="margin-bottom: 20px;">
        <h1 style="color: #006064; margin: 0;">Neue Projektanfrage</h1>
      </div>
      
      <div style="background-color: #f9f9f9; border-radius: 8px; padding: 20px; margin-bottom: 30px;">
        <p>Eine neue Projektanfrage ist über das Formular eingegangen:</p>
        
        <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
          <tbody>
            ${detailsHTML}
          </tbody>
        </table>
      </div>
      
      <div style="text-align: center; font-size: 14px; color: #777; margin-top: 30px;">
        <p>Diese E-Mail wurde automatisch gesendet.</p>
        <p>&copy; ${new Date().getFullYear()} ooliv GmbH</p>
      </div>
    </body>
    </html>
  `;

  // Plain text version for email clients that don't support HTML
  const textContent = `
    NEUE PROJEKTANFRAGE
    
    Eine neue Projektanfrage ist über das Formular eingegangen:
    
    ${detailRows.map(row => `${row.label}: ${row.value}`).join('\n')}
    
    Diese E-Mail wurde automatisch gesendet.
    © ${new Date().getFullYear()} ooliv GmbH
  `;

  // Send the email
  await client.send({
    from: "info@ooliv.de",
    to: "info@ooliv.de",
    subject: "Neues Projektformular eingegangen",
    html: htmlContent,
    text: textContent,
  });

  console.log("Admin notification email sent");
}

async function sendUserEmail(client: SMTPClient, userEmail: string, firstName: string) {
  // HTML Template for user confirmation email
  const htmlContent = `
    <!DOCTYPE html>
    <html lang="de">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Vielen Dank für Ihre Anfrage</title>
    </head>
    <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
      <div style="text-align: center; margin-bottom: 30px;">
        <img src="https://ooliv.de/logo-email.png" alt="ooliv Logo" width="150" style="margin-bottom: 20px;">
        <h1 style="color: #006064; margin: 0;">Vielen Dank für deine Anfrage</h1>
      </div>
      
      <div style="background-color: #f9f9f9; border-radius: 8px; padding: 20px; margin-bottom: 30px;">
        <p>Hallo ${firstName},</p>
        
        <p>vielen Dank für deine Anfrage – wir melden uns in Kürze bei dir.</p>
        
        <p>Falls du uns direkt kontaktieren möchtest, erreichst du uns unter <a href="mailto:info@ooliv.de" style="color: #006064; text-decoration: none;">info@ooliv.de</a> oder telefonisch unter +49 176 80 16 76 41.</p>
        
        <div style="margin: 30px 0; text-align: center;">
          <a href="https://ooliv.de" style="background-color: #006064; color: white; padding: 12px 20px; text-decoration: none; border-radius: 4px; font-weight: bold;">Mehr über ooliv erfahren</a>
        </div>
      </div>
      
      <div style="text-align: center; font-size: 14px; color: #777; margin-top: 30px;">
        <p>ooliv GmbH | Mombacher Str. 25 | 55122 Mainz</p>
        <p>&copy; ${new Date().getFullYear()} ooliv GmbH</p>
      </div>
    </body>
    </html>
  `;

  // Plain text version for email clients that don't support HTML
  const textContent = `
    VIELEN DANK FÜR DEINE ANFRAGE
    
    Hallo ${firstName},
    
    vielen Dank für deine Anfrage – wir melden uns in Kürze bei dir.
    
    Falls du uns direkt kontaktieren möchtest, erreichst du uns unter info@ooliv.de 
    oder telefonisch unter +49 176 80 16 76 41.
    
    Mehr über ooliv: https://ooliv.de
    
    ooliv GmbH | Mombacher Str. 25 | 55122 Mainz
    © ${new Date().getFullYear()} ooliv GmbH
  `;

  // Send the email
  await client.send({
    from: "info@ooliv.de",
    to: userEmail,
    subject: "Vielen Dank für deine Anfrage bei ooliv",
    html: htmlContent,
    text: textContent,
  });

  console.log("User confirmation email sent");
}
