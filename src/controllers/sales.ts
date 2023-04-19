import { CreateSaleParams } from '../interfaces';
import { Sale } from '../models';

export const createSale = async (createSaleParams: CreateSaleParams) => await Sale.create(createSaleParams);
