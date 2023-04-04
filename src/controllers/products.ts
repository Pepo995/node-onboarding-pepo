import { ExtraItem, Product } from '../models';
import { createProductParams, CreateProductParams, GetProductsParams, UpdateProductParams } from '../interfaces';
import { undefined } from 'zod';
import { Op } from 'sequelize';

export const getProducts = async ({ name, categories, sortBy, page, size }: GetProductsParams) => {
  const where: { [key: string]: any } = {};

  if (name != null) {
    where.name = { [Op.like]: `%${name}%` };
  }

  if (categories != null) {
    where.categoryId = { [Op.in]: [categories] };
  }

  const totalCount = await Product.count({ where });

  const products = await Product.findAll({
    where,
    order:
      sortBy === 'price_asc' ? [['price', 'ASC']] : sortBy === 'price_desc' ? [['price', 'DESC']] : [['id', 'ASC']],
    offset: page * size,
    limit: size,
    subQuery: false,
  });
  return { totalCount, products };
};

export const getProductById = async (productId: number) =>
  await Product.findByPk(productId, {
    include: {
      model: ExtraItem,
      attributes: ['id', 'name', 'price'],
    },
  });

export const createProduct = async (createProduct: CreateProductParams) => {
  const product = await Product.findOne({
    where: { name: createProduct.name },
  });

  if (product) {
    throw new Error('The product already exists');
  }
  return await Product.create(createProduct);
};

export const deleteProduct = async (productId: number) => {
  const product = await Product.findOne({
    where: { id: productId },
  });

  if (!product) {
    throw new Error('The product does not exists');
  }

  await Product.destroy({
    where: { id: productId },
  });

  return product;
};

export const updateProduct = async (productId: number, productData: UpdateProductParams) => {
  const product = await Product.findOne({
    where: { id: productId },
  });

  if (!product) {
    throw new Error('The product does not exists');
  }

  product.update(productData);

  return product;
};
