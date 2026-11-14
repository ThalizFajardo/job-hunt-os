import { z } from "zod";

export const applicationschema = z.object({
  role: z.string(),
  stage: z.enum(["applied", "screening", "technical", "offer", "rejected"]),
  platform: z.string(),
  link: z.string(),
  company: z.string(),
});

export type ApplicationForm = z.infer<typeof applicationschema>;
