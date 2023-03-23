import express, { NextFunction, Request, Response } from 'express';
import { createCategory, getCategories } from '../controllers';
import { createCategoryParams, CreateCategoryParams } from '../interfaces';
import { authenticate } from '../middlewares/error';

const router = express.Router();

router.get('/', authenticate.authenticate('jwt', { session: false }), async (req: Request, res: Response) => {
  try {
    const allCategories = await getCategories();
    res.send(allCategories);
  } catch (error: any) {
    res.send({ error: error.message });
  }
});

router.post(
  '/',
  authenticate.authenticate('jwt', { session: false }),
  async ({ body }: { body: CreateCategoryParams }, res: Response, next: NextFunction) => {
    try {
      const parsed = createCategoryParams.parse(body);
      const createdCategory = await createCategory(parsed);

      res.status(200).send(createdCategory);
    } catch (error: any) {
      next(error);
    }
  },
);

export default router;
