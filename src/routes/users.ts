import express, { NextFunction, Request, Response } from 'express';
import {
  CreateUserParams,
  createUserParams,
  getUserParams,
  loginUserParams,
  LoginUserParams,
  updateUserParams,
} from '../interfaces/index';
import { getUsers, register, getUserById, deleteUser, updateUser, login } from '../controllers/users';

const router = express.Router();

router.get('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const allUsers = await getUsers();
    res.send(allUsers);
  } catch (error: any) {
    next(error);
  }
});

router.get('/:id', async ({ params }: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = getUserParams.parse(params);
    const user = await getUserById(id);
    res.send(user);
  } catch (error: any) {
    next(error);
  }
});

router.post('/register', async ({ body }: { body: CreateUserParams }, res: Response, next: NextFunction) => {
  try {
    const parsed = createUserParams.parse(body);
    const createdUser = await register(parsed);

    res.status(200).send(createdUser);
  } catch (error: any) {
    next(error);
  }
});

router.post('/login', async ({ body }: { body: LoginUserParams }, res: Response, next: NextFunction) => {
  try {
    const { email, password } = loginUserParams.parse(body);
    const tokenData = await login(email, password);

    res.status(200).send(tokenData);
  } catch (error: any) {
    next(error);
  }
});

router.delete('/:id', async ({ params }: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = getUserParams.parse(params);
    const user = await deleteUser(id);
    res.status(200).send(user);
  } catch (error: any) {
    next(error);
  }
});

router.put('/:id', async ({ body, params }: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = getUserParams.parse(params);
    const updatedAtributes = updateUserParams.parse(body);
    const data = await updateUser(id, updatedAtributes);
    res.status(200).send(data);
  } catch (error: any) {
    next(error);
  }
});

export default router;
