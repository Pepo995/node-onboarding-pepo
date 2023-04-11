'use strict';
import User from './user';
import Product from './products';
import Category from './categories';
import ExtraItem from './extraItems';
import ProductsExtraItems from './productsExtraItems';

const models = { User, Product, Category, ExtraItem, ProductsExtraItems };

Object.entries(models).map(([, model]: any[]) => {
  if (model?.associate) {
    model.associate(models);
  }
});

export { User, Product, Category, ExtraItem, ProductsExtraItems };
