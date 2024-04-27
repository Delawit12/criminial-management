import z from "zod";

const adminSchema = {
  registration: z.object({
    username: z.string(),
    password: z.string().min(6).max(12),
    email: z.string().email(),
    role_id: z.number().int(),
  }),
  update: z.object({
    email: z.string().email(),
    username: z.string(),
    role_id: z.number().int(),
    // Add other fields that can be updated here
  }),
};

export default adminSchema;
