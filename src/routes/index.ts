import express from 'express';
import usersRouter from './users';
import productsRouter from './products';
import categoriesRouter from './categories';

const router = express.Router();

router.use('/users', usersRouter);
router.use('/products', productsRouter);
router.use('/categories', categoriesRouter);

export default router;
