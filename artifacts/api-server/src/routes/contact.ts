import { Router } from "express";
import { SubmitContactBody } from "@workspace/api-zod";

const router = Router();

router.post("/contact", async (req, res) => {
  const parsed = SubmitContactBody.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({ error: "Invalid form data" });
  }

  const { fullName, email, phone, company, service, message } = parsed.data;

  req.log.info(
    { fullName, email, phone, company, service },
    "Contact inquiry received"
  );

  return res.json({
    success: true,
    message: "Thank you! Your inquiry has been received. Our HR experts will contact you shortly.",
  });
});

export default router;
