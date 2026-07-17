import { z } from "zod";
import { contactForm } from "@/lib/data";

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, contactForm.errors.name)
    .max(80, contactForm.errors.name),
  email: z.email(contactForm.errors.email),
  budget: z.string().trim().max(60).optional(),
  message: z
    .string()
    .trim()
    .min(12, contactForm.errors.message)
    .max(4000, contactForm.errors.messageMax)
});

export type ContactInput = z.infer<typeof contactSchema>;
