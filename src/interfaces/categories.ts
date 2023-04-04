import { z } from 'zod';

export const createCategoryParams = z.object({
  name: z.string(),
});
export type CreateCategoryParams = z.infer<typeof createCategoryParams>;
