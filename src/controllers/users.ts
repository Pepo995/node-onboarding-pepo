import User from '../models/user';
import { CreateUserParams, UpdateUserParams } from '../interfaces';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const getUsers = async () => await User.findAll();

export const getUserById = async (userId: number) =>
  await User.findOne({
    where: { id: userId },
  });

const createToken = (id: number, email: string) =>
  jwt.sign({ id, email }, process.env.ACCESS_TOKEN_SECRET || 'TOP_SECRET');

export const createUser = async (createUserParams: CreateUserParams) => {
  const hashedPassword = await bcrypt.hash(createUserParams.password, 10);
  createUserParams.password = hashedPassword;

  const user = await User.findOne({
    where: { email: createUserParams.email },
  });

  if (user) {
    throw new Error('The user already exists');
  }

  return await User.create(createUserParams);
};

export const login = async (email: string, password: string) => {
  const user = await User.findOne({
    where: { email },
  });

  if (!user) {
    throw new Error('The user does not exists');
  }

  const passwordMatch = await bcrypt.compare(password, user.password);

  if (!passwordMatch) {
    throw new Error('Invalid credentials');
  }

  return { token: createToken(user.id, email) };
};

export const deleteUser = async (userId: number) => {
  const user = await User.findOne({
    where: { id: userId },
  });

  if (!user) {
    throw new Error('The user does not exists');
  }

  await User.destroy({
    where: { id: userId },
  });

  return user;
};

export const updateUser = async (userId: number, userUpdate: UpdateUserParams) => {
  const user = await User.findOne({
    where: { id: userId },
  });

  if (!user) {
    throw new Error('The user does not exists');
  }

  user.update(userUpdate);

  return user;
};
