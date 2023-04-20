import express from 'express';
import usersRouter from './users';
import productsRouter from './products';
import categoriesRouter from './categories';
import extraItemsRouter from './extraItems';
import salesRouter from './sales';

const router = express.Router();

router.use('/users', usersRouter);
router.use('/products', productsRouter);
router.use('/categories', categoriesRouter);
router.use('/extraItems', extraItemsRouter);
router.use('/sales', salesRouter);

export default router;
