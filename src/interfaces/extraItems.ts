import { z } from 'zod';

export const createExtraItemParams = z.object({
  name: z.string(),
  price: z.number(),
});
export type CreateExtraItemParams = z.infer<typeof createExtraItemParams>;
