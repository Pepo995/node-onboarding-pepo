import express, { NextFunction, Request, Response } from 'express';
import { createExtraItem, getExtraItems } from '../controllers';
import { createExtraItemParams, CreateExtraItemParams } from '../interfaces';
import { authenticate } from '../middlewares/error';

const router = express.Router();

router.get('/', authenticate.authenticate('jwt', { session: false }), async (req: Request, res: Response) => {
  try {
    const allExtraItems = await getExtraItems();
    res.send(allExtraItems);
  } catch (error: any) {
    res.send({ error: error.message });
  }
});

router.post(
  '/',
  authenticate.authenticate('jwt', { session: false }),
  async ({ body }: { body: CreateExtraItemParams }, res: Response, next: NextFunction) => {
    try {
      const parsed = createExtraItemParams.parse(body);
      const createdExtraItem = await createExtraItem(parsed);

      res.status(200).send(createdExtraItem);
    } catch (error: any) {
      next(error);
    }
  },
);

export default router;
