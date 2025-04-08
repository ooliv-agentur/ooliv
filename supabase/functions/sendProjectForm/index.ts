import { serve } from "https://deno.land/std@0.177.0/http/server.ts";
import { SMTPClient } from "https://deno.land/x/denomailer@1.6.0/mod.ts";

// CORS headers for browser requests
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

// Base64 encoded ooliv logo for inline embedding
const OOLIV_LOGO_BASE64 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAAAyCAYAAAC+jCIaAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAUsSURBVHgB7ZzNbxtVFMXPm4nTuKSh0I8gFUFViYKQWoSExKYSO5bs2bJkgcQfsGXJhj/gY8ueJStWCKQghAQSSEBtqqYkaVO3SfwxY8/wnthVZeLM+H1sN/dIx28mUeq5tX/z5t47z7YADAbDf/JXG1vYJzpEiCiNgUjFgAdoY/0TnLJo5wDFAkosJhYvaBD9RjQiSgOvkYgpllZEJZ3GkudjTrBM0YFxT+DhVh2DweAME4vBYTCxGAwODLUxPrj0PXyZI00+bpRkAVOiiFW/iNRIgD6KVDGwgSHOWBe/uw6fRDL0Oj3P4dJUGWvFDsK+QpZUiWzxmwZR4RRbr4m3L/6AXNpDKhNt/U5HMU9S9QWfHW9BgDtZeXUFe3d/wyjzwgvv4M2F9yFN+fguFj/+GNKMvOPfL+L09M8ZH7/t/AJpXk7wHvFcXziREb98+hXcQQuvvd1HJu1jwQj4MuPjXimx4HseyWWuYJ54wlmI4SgXIc3BwhxyIw5+ubQe3P7J3cQrx5lLnDO3q0dh+OT4CYgWu57ER9nTFQSRqjx5Jjgv1UO8FDyrGNuYoAmJJUmCf2GqVMNirQefZUclnbMhj1cW+ObtK+Hx3NwCXj7TCiOLJNXqT8Lj1sIsxsHkr0O+UNtQN9oQZbooXxR0GNqpYrHOg4gRxztOZzWEmKmKMU9GEE/3vBDJx+GxQx+l56rV3YGDpSvjFKseziNkIhESQoNepzh4+PgeSpU9RIsM7VQr4SYyGcliTKx2U0h8IhZ9rzK+iqhKIpW1Vvkpki06r5BTuRPNNmtRVhwlOpGqfLyHSrEZnWqIiRWr2RxlrD3h8S1K/i1Wm9o5bkLIvHKAE2KvvHI4jP7MzLw0uapVObF2H0EWcWJpFZ21OQopCiQWZ43V8j7K9S1Unf+9B/d+Ra2yCxfKpRLk+BCiLBfKEdYqVUOxKhv3ISfVMvYfrUCODyHKMiFVEjWJJLi1Fopll+dYZaKGHBdCHnWw+/A2RGnEi7VbRwdCjDMhj1qs59VNiPLYiPXX2u/O121tfAvpdP+qB3i2C4qjiIrk4xrx40q3HHXFcppY3W4X1jMVcRmCpEsLFg3ihxVx2RVFWnRSAVHx5VyxOhTj6eoTiNPzSbJITSyJPe6TS8kIVK4HuHm0jEqQ03Q1+t9v1fWNVYiiVcTdBWmQm/cTvBP65bBp8ffkxBcfYXLqDUizT7GTJ9GhB6ULqIfUKtuOeZZu3reCcCbW5PWPIEn5zzJWP/sWEpRIrKzULQ28qXK+z44v7D3GScPMWCeHFw0Gg8NgYjE4DCYWg8ER5fZeLZdIkxLOFw1c4Gzx/eUahoGJxeAwmFgMDoOJxeAwPIxY2nsvnLr4BkLJcvNVw/8aCc8VMkAXIV0M9gJRKGBiMTgMfioc+R8wYnE49z1iF/eeq/hL2yrAFhZeqmAAc6r/GQPzn1jkVB2k6VNIXwA26P4dVYEtqvp8+MUVDDjLrY3wXVd2xjph7HHWknQIlYEtrDNuGiNQnYGUsXJC+ZS9LKa0iDBJssEk6rT5q7rBQEQB5VTcF8VLV3TqPwLM2yM8C+L/H4xYwfqeWG4nKFQB+V4HZ8KN3waONNFD+ZL+d+Nn6JkU11HEoI9JNJgULGJbQqwwGCTi+w/+BsuXCUukjfS5AAAAAElFTkSuQmCC";

interface ProjectFormData {
  projectType: string;
  companyName: string;
  industry: string;
  websiteUrl?: string;
  location?: string;
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
        hostname: Deno.env.get("EMAIL_HOST") || "smtp.mailbox.org",
        port: parseInt(Deno.env.get("EMAIL_PORT") || "587"),
        tls: true,
        auth: {
          username: Deno.env.get("EMAIL_USER") || "info@ooliv.de",
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
        message: "E-Mails erfolgreich versendet" 
      }),
      {
        headers: { 
          "Content-Type": "application/json",
          ...corsHeaders 
        },
      }
    );

  } catch (error) {
    console.error("Fehler beim E-Mail-Versand:", error);
    
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

  // HTML Template for admin email with single-line preview
  const htmlContent = `
    <!DOCTYPE html>
    <html lang="de">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Neue Projektanfrage</title>
    </head>
    <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
      <div style="display:none; max-height:0; overflow:hidden;">Neue Projektanfrage über ooliv.de - alle Details im Überblick.</div>
      <div style="text-align: center; margin-bottom: 30px;">
        <img src="${OOLIV_LOGO_BASE64}" alt="ooliv Logo" width="150" style="margin-bottom: 20px;">
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

  // Send the email with 8bit encoding and UTF-8 charset
  await client.send({
    from: "info@ooliv.de",
    to: "info@ooliv.de",
    subject: "📥 Neue Projektanfrage über ooliv.de",
    html: htmlContent,
    text: textContent,
    encoding: "8bit",
    contentType: "text/html; charset=utf-8",
    textEncoding: "8bit",
    textContentType: "text/plain; charset=utf-8"
  });

  console.log("Admin notification email sent");
}

async function sendUserEmail(client: SMTPClient, userEmail: string, firstName: string) {
  // HTML Template for user confirmation email with single-line preview
  const htmlContent = `
    <!DOCTYPE html>
    <html lang="de">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Vielen Dank für deine Anfrage</title>
    </head>
    <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
      <div style="display:none; max-height:0; overflow:hidden;">Vielen Dank für Ihre Anfrage - wir melden uns in Kürze bei Ihnen.</div>
      <div style="text-align: center; margin-bottom: 30px;">
        <img src="${OOLIV_LOGO_BASE64}" alt="ooliv Logo" width="150" style="margin-bottom: 20px;">
        <h1 style="color: #006064; margin: 0;">Vielen Dank für deine Anfrage</h1>
      </div>
      
      <div style="background-color: #f9f9f9; border-radius: 8px; padding: 20px; margin-bottom: 30px;">
        <p>Hallo ${firstName},</p>
        
        <p>vielen Dank für deine Anfrage – wir melden uns in Kürze bei dir.</p>
        
        <p>Falls du uns direkt kontaktieren möchtest, erreichst du uns unter <a href="mailto:info@ooliv.de" style="color: #006064; text-decoration: none;">info@ooliv.de</a> oder telefonisch unter 06131 – 63 67 801.</p>
        
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
    oder telefonisch unter 06131 – 63 67 801.
    
    Mehr über ooliv: https://ooliv.de
    
    ooliv GmbH | Mombacher Str. 25 | 55122 Mainz
    © ${new Date().getFullYear()} ooliv GmbH
  `;

  // Send the email with 8bit encoding and UTF-8 charset
  await client.send({
    from: "info@ooliv.de",
    to: userEmail,
    subject: "✅ Vielen Dank für deine Anfrage bei ooliv",
    html: htmlContent,
    text: textContent,
    encoding: "8bit",
    contentType: "text/html; charset=utf-8",
    textEncoding: "8bit", 
    textContentType: "text/plain; charset=utf-8"
  });

  console.log("User confirmation email sent");
}
