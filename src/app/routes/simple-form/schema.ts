import { z } from 'zod';

export const UserSchema = z.object({
  firstName: z.string().trim().min(1),
  lastName: z.string().trim().min(1),
  email: z.string().email(),
});

export type User = z.infer<typeof UserSchema>;
