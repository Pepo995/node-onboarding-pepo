import { CreateCategoryParams } from '../interfaces';
import { Category } from '../models';

export const getCategories = async () => await Category.findAll();

export const createCategory = async (createCategoryParamas: CreateCategoryParams) => {
  const category = await Category.findOne({
    where: { name: createCategoryParamas.name },
  });

  if (category) {
    throw new Error('The category already exists');
  }

  return await Category.create(createCategoryParamas);
};
