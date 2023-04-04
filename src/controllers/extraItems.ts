import { CreateExtraItemParams } from '../interfaces';
import { ExtraItem } from '../models';

export const getExtraItems = async () => await ExtraItem.findAll();

export const createExtraItem = async (createExtraItemParams: CreateExtraItemParams) => {
  const extraItem = await ExtraItem.findOne({
    where: { name: createExtraItemParams.name },
  });

  if (extraItem) {
    throw new Error('The item already exists');
  }

  return await ExtraItem.create(createExtraItemParams);
};
