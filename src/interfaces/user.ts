import { z } from 'zod';

export const createUserParams = z.object({
  firstName: z.string(),
  lastName: z.string(),
  email: z.string(),
  password: z.string(),
  company: z.string(),
  profileImage: z.string(),
  position: z.string(),
});
export type CreateUserParams = z.infer<typeof createUserParams>;

export const loginUserParams = z.object({
  email: z.string(),
  password: z.string(),
});
export type LoginUserParams = z.infer<typeof loginUserParams>;

export const getUserParams = z.object({
  id: z.string().transform((val) => parseInt(val)),
});
export type GetUserParams = z.infer<typeof getUserParams>;

export const updateUserParams = z.object({
  email: z.string().nullable().optional(),
  firstName: z.string().nullable().optional(),
  lastName: z.string().nullable().optional(),
});
export type UpdateUserParams = z.infer<typeof updateUserParams>;
