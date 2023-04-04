import { z } from 'zod';

export const createProductParams = z.object({
  name: z.string(),
  price: z.number(),
  image: z.string(),
  categoryId: z.number(),
});
export type CreateProductParams = z.infer<typeof createProductParams>;

export const getProductParams = z.object({
  id: z.string().transform((val) => parseInt(val)),
});
export type GetProductParams = z.infer<typeof getProductParams>;

export const updateProductParams = z.object({
  name: z.string(),
  price: z.number(),
  image: z.string(),
});
export type UpdateProductParams = z.infer<typeof updateProductParams>;

export const getProductsParams = z.object({
  name: z.string().nullable().optional(),
  categories: z
    .string()
    .transform((val) => parseInt(val))
    .array()
    .nullable()
    .optional(),
  sortBy: z.string().nullable().optional(),
  page: z.string().transform((val) => parseInt(val)),
  size: z.string().transform((val) => parseInt(val)),
});
export type GetProductsParams = z.infer<typeof getProductsParams>;
