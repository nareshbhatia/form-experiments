// Generated by ts-to-zod
import { z } from 'zod';

export const userSchema = z.object({
  firstName: z.string().trim().min(1),
  lastName: z.string().trim().min(1),
  email: z.string().email(),
});

export const addressSchema = z.object({
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

export const userProfileSchema = z.object({
  user: userSchema,
  address: addressSchema,
});

export const categorySchema = z.object({
  id: z.string(),
  name: z.string().trim().min(1),
  photo: z.string().trim().min(1),
});

export const productSchema = z.object({
  id: z.string(),
  name: z.string().trim().min(1),
  description: z.string().trim().min(1),
  manufacturer: z.string().trim().min(1),
  photo: z.string().trim().min(1),
  price: z.number(),
  categoryId: z.string(),
});

export const orderItemSchema = z.object({
  id: z.string(),
  productId: z.string(),
  quantity: z.number(),
});

export const inputOrderSchema = z.object({
  id: z.string(),
  product1Id: z.string(),
  product2Id: z.string(),
  product3Id: z.string(),
});

export const uiProductSchema = z.object({
  product: productSchema,
  category: categorySchema,
});

export const uiOrderItemSchema = z.object({
  orderItem: orderItemSchema,
  uiProduct: uiProductSchema,
});
