import User from '../models/user';
import { CreateUserParams } from '../interfaces';

export const getUsers = async () => await User.findAll();

export const getUserById = async (userId: number) => await User.findOne({ where: { id: userId } });

export const createUser = async (createUserParams) => await User.create(createUserParams);

export const deleteUser = async (userId: number) => await User.destroy({ where: { id: userId } });

export const updateUser = async (userId: number, userUpdate: CreateUserParams) => {
  const user = await User.findOne({
    where: { id: userId },
  });
  user?.update(userUpdate);
  return user;
};
