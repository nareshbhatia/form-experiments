import { z } from 'zod';

export const UserSchema = z.object({
  firstName: z.string().trim().min(1),
  lastName: z.string().trim().min(1),
  email: z.string().email(),
});

export type User = z.infer<typeof UserSchema>;

export const AddressSchema = z.object({
  company: z.string().trim().optional(),
  street: z.string().trim().min(1),
  city: z.string().trim().min(1),
  state: z.string().trim().min(2),
  zip: z
    .string()
    .trim()
    .min(5)
    .max(5)
    .regex(/^\d{5}$/),
});

export type Address = z.infer<typeof AddressSchema>;

export const UserProfileSchema = z.object({
  user: UserSchema,
  address: AddressSchema,
});

export type UserProfile = z.infer<typeof UserProfileSchema>;
