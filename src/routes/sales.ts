import express, { NextFunction, Request, Response } from 'express';
import { createSale } from '../controllers';
import { CreateSaleParams, createSaleParams } from '../interfaces';
import { authenticate } from '../middlewares/error';

const router = express.Router();

router.post(
  '/',
  authenticate.authenticate('jwt', { session: false }),
  async ({ body }: { body: CreateSaleParams }, res: Response, next: NextFunction) => {
    try {
      const parsed = createSaleParams.parse(body);
      const createdSale = await createSale(parsed);

      res.status(200).send(createdSale);
    } catch (error: any) {
      next(error);
    }
  },
);

export default router;
