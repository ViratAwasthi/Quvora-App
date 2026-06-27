import { Router } from "express";
import nodemailer from "nodemailer";
import { SubmitContactBody } from "@workspace/api-zod";

const router = Router();

function createTransporter() {
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  if (!user || !pass) return null;
  return nodemailer.createTransport({
    service: "gmail",
    auth: { user, pass },
  });
}

router.post("/contact", async (req, res) => {
  const parsed = SubmitContactBody.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({ error: "Invalid form data" });
  }

  const { fullName, email, phone, company, designation, employeeCount, service, message } = parsed.data;

  req.log.info({ fullName, email, company, service }, "Contact inquiry received");

  const transporter = createTransporter();
  if (transporter) {
    const html = `
      <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;background:#f7f8fa;padding:24px;border-radius:12px;">
        <div style="background:#0A2A5E;padding:24px 28px;border-radius:8px 8px 0 0;">
          <h2 style="color:#C89B3C;margin:0;font-size:20px;letter-spacing:1px;">QUVORA CONSULTING</h2>
          <p style="color:rgba(255,255,255,0.6);margin:4px 0 0;font-size:13px;">New Contact Inquiry</p>
        </div>
        <div style="background:#fff;padding:28px;border-radius:0 0 8px 8px;border:1px solid #e8e8e8;border-top:none;">
          <table style="width:100%;border-collapse:collapse;font-size:14px;">
            <tr><td style="padding:8px 0;color:#888;width:140px;vertical-align:top;">Full Name</td><td style="padding:8px 0;color:#0A2A5E;font-weight:600;">${fullName}</td></tr>
            <tr><td style="padding:8px 0;color:#888;vertical-align:top;">Email</td><td style="padding:8px 0;color:#0A2A5E;">${email}</td></tr>
            <tr><td style="padding:8px 0;color:#888;vertical-align:top;">Phone</td><td style="padding:8px 0;color:#0A2A5E;">${phone}</td></tr>
            ${company ? `<tr><td style="padding:8px 0;color:#888;vertical-align:top;">Company</td><td style="padding:8px 0;color:#0A2A5E;">${company}</td></tr>` : ""}
            ${designation ? `<tr><td style="padding:8px 0;color:#888;vertical-align:top;">Designation</td><td style="padding:8px 0;color:#0A2A5E;">${designation}</td></tr>` : ""}
            ${employeeCount ? `<tr><td style="padding:8px 0;color:#888;vertical-align:top;">Company Size</td><td style="padding:8px 0;color:#0A2A5E;">${employeeCount}</td></tr>` : ""}
            <tr><td style="padding:8px 0;color:#888;vertical-align:top;">Service Needed</td><td style="padding:8px 0;color:#0A2A5E;font-weight:600;">${service}</td></tr>
            ${message ? `<tr><td style="padding:8px 0;color:#888;vertical-align:top;">Message</td><td style="padding:8px 0;color:#0A2A5E;">${message}</td></tr>` : ""}
          </table>
          <div style="margin-top:20px;padding-top:16px;border-top:1px solid #f0f0f0;font-size:12px;color:#aaa;">
            Submitted via quvoraconsulting.com contact form
          </div>
        </div>
      </div>
    `;

    try {
      await transporter.sendMail({
        from: `"Quvora Website" <${process.env.SMTP_USER}>`,
        to: "connect@quvoraconsulting.com",
        replyTo: email,
        subject: `New Inquiry: ${service} — ${fullName}${company ? ` (${company})` : ""}`,
        html,
      });
      req.log.info({ to: "connect@quvoraconsulting.com" }, "Inquiry email sent");
    } catch (err) {
      req.log.error({ err }, "Failed to send inquiry email");
    }
  } else {
    req.log.warn("SMTP not configured — inquiry logged only");
  }

  return res.json({
    success: true,
    message: "Thank you! Your inquiry has been received. Our HR experts will contact you shortly.",
  });
});

export default router;
