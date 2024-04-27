import { z } from "zod";

const userSchema = {
  userLogin: z.object({
    username: z.string(),
    password: z.string().min(6).max(20),
    email: z.string().email(),
    role_id: z.number().int(),
  }),
  userProfile: z.object({
    full_name: z.string(),
    date_of_birth: z.string(),
    gender: z.string().min(4).max(6),
    address: z.string(),
    phone_number: z.string().min(10).max(15),
    department: z.string().optional(),
    badge_number: z.string().optional(),
    rank: z.string().optional(),
    hire_date: z.string().optional(),
  }),
};

export default userSchema;
