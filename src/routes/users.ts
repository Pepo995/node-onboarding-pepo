import express, { Request, Response } from 'express';
import { CreateUserParams } from '../interfaces/index';
import { getUsers, createUser, getUserById, deleteUser, updateUser } from '../controllers/users';

const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
  try {
    const data = await getUsers();
    res.send(data);
  } catch (error: any) {
    res.send({ error: error.message });
  }
});

router.get('/:id', async ({ body }: { body: CreateUserParams }, res: Response) => {
  try {
    const data = await getUserById(body.id);
    res.send(data);
  } catch (error: any) {
    res.send({ error: error.message });
  }
});

router.post('/', async ({ body }: { body: CreateUserParams }, res: Response) => {
  try {
    const user = await createUser(body);
    res.status(200).send(user);
  } catch (error: any) {
    res.send({ error: error.message });
  }
});

router.delete('/:id', async ({ body }: { body: CreateUserParams }, res: Response) => {
  try {
    const data = await deleteUser(body.id);
    res.status(200).send(data);
  } catch (error: any) {
    res.send({ error: error.message });
  }
});

router.put('/:id', async ({ body }: { body: CreateUserParams }, res: Response) => {
  try {
    const data = await updateUser(body.id, body);
    res.status(200).send(data);
  } catch (error: any) {
    res.send({ error: error.message });
  }
});

export default router;
