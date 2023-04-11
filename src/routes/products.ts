import express, { NextFunction, Request, Response } from 'express';
import { createProduct, deleteProduct, getProductById, getProducts, updateProduct } from '../controllers';
import {
  createProductParams,
  CreateProductParams,
  getProductsParams,
  GetProductsParams,
  getProductParams,
  updateProductParams,
} from '../interfaces';
import { authenticate } from '../middlewares/error';

const router = express.Router();

router.get(
  '/',
  authenticate.authenticate('jwt', { session: false }),
  async (req: Request<any, any, any, GetProductsParams>, res: Response, next: NextFunction) => {
    try {
      const { query } = req;
      const parsedParams = getProductsParams.parse(query);

      const allProducts = await getProducts(parsedParams);

      res.send(allProducts);
    } catch (error: any) {
      next(error);
    }
  },
);

router.get(
  '/:id',
  authenticate.authenticate('jwt', { session: false }),
  async ({ params }: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = getProductParams.parse(params);
      const product = await getProductById(id);
      res.send(product);
    } catch (error: any) {
      next(error);
    }
  },
);

router.post(
  '/',
  authenticate.authenticate('jwt', { session: false }),
  async ({ body }: { body: CreateProductParams }, res: Response, next: NextFunction) => {
    try {
      const parsed = createProductParams.parse(body);
      const createdProduct = await createProduct(parsed);

      res.status(200).send(createdProduct);
    } catch (error: any) {
      next(error);
    }
  },
);

router.delete(
  '/:id',
  authenticate.authenticate('jwt', { session: false }),
  async ({ params }: Request, res: Response) => {
    try {
      const { id } = getProductParams.parse(params);
      const product = await deleteProduct(id);
      res.status(200).send(product);
    } catch (error: any) {
      res.send({ error: error.message });
    }
  },
);

router.put(
  '/:id',
  authenticate.authenticate('jwt', { session: false }),
  async ({ body, params }: Request, res: Response) => {
    try {
      const { id } = getProductParams.parse(params);
      const updatedAtributes = updateProductParams.parse(body);
      const data = await updateProduct(id, updatedAtributes);
      res.status(200).send(data);
    } catch (error: any) {
      res.send({ error: error.message });
    }
  },
);

export default router;
