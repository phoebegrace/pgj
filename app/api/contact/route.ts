import { Resend } from "resend";

export const runtime = "nodejs";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const fd = await req.formData();

    const name = String(fd.get("name") || "").trim();
    const email = String(fd.get("email") || "").trim();
    const subject = String(fd.get("subject") || "").trim();
    const message = String(fd.get("message") || "").trim();

    const file = fd.get("attachment");

    if (!name || !email || !subject || !message) {
      return Response.json({ error: "Missing required fields." }, { status: 400 });
    }

    const to = process.env.CONTACT_TO_EMAIL || "juayongphoebe@gmail.com";
    const from = process.env.CONTACT_FROM_EMAIL || "onboarding@resend.dev";

    // Attachment (optional, max 5MB)
    let attachments: { filename: string; content: string }[] = [];
    if (file && file instanceof File) {
      const maxBytes = 5 * 1024 * 1024;
      if (file.size > maxBytes) {
        return Response.json({ error: "Attachment too large (max 5MB)." }, { status: 400 });
      }

      const bytes = Buffer.from(await file.arrayBuffer());
      attachments = [
        {
          filename: file.name,
          content: bytes.toString("base64"),
        },
      ];
    }

    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `[Portfolio Contact] ${subject}`,
      html: `
        <div style="font-family:system-ui,Segoe UI,Arial,sans-serif;line-height:1.6">
          <h2 style="margin:0 0 12px">New Portfolio Message</h2>
          <p style="margin:0 0 6px"><b>Name:</b> ${escapeHtml(name)}</p>
          <p style="margin:0 0 6px"><b>Email:</b> ${escapeHtml(email)}</p>
          <p style="margin:0 0 14px"><b>Subject:</b> ${escapeHtml(subject)}</p>
          <div style="padding:12px;border:1px solid #eee;border-radius:12px">
            ${escapeHtml(message).replace(/\n/g, "<br/>")}
          </div>
        </div>
      `,
      attachments,
    });

    if (error) {
      console.error("RESEND ERROR:", error);
      return Response.json({ error: "Email failed to send." }, { status: 500 });
    }

    return Response.json({ ok: true });
  } catch (err) {
    console.error("CONTACT API ERROR:", err);
    return Response.json({ error: "Server error." }, { status: 500 });
  }
}

function escapeHtml(input: string) {
  return input
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
