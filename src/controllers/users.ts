import User from '../models/user';
import { CreateUserParams } from '../interfaces';

export const getUsers = async () => {
  const users = await User.findAll();
  return users;
};

export const getUserById = async (userId: number) => {
  const user = await User.findOne({
    where: { id: userId },
  });
  return user;
};

export const createUser = async (createUserParams: CreateUserParams) => {
  await User.create(createUserParams);
};

export const deleteUser = async (userId: number) => {
  await User.destroy({
    where: { id: userId },
  });
};

export const updateUser = async (userId: number, userUpdate: CreateUserParams) => {
  const user = await User.findOne({
    where: { id: userId },
  });
  user?.update(userUpdate);
  return user;
};
