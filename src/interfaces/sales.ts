import { z } from 'zod';

export const createSaleParams = z.object({
  userId: z.number(),
  fullName: z.string(),
  deliveryDate: z.string(),
  direction: z.string(),
  contactNumber: z.number(),
  deliveryTime: z.string(),
  deliveryCost: z.number(),
  productId: z.number(),
  tax: z.number(),
  totalWithTax: z.number(),
  amount: z.number(),
  surprise: z.boolean(),
  forwarding: z.boolean(),
});
export type CreateSaleParams = z.infer<typeof createSaleParams>;
