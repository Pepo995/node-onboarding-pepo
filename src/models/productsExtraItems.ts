import { Model, DataTypes, CreationOptional } from 'sequelize';
import { connection } from '../database';
import ExtraItem from './extraItems';
import Product from './products';

class ProductsExtraItems extends Model {
  declare productId: number;
  declare extraItemId: number;
  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;

  static associate = ({ Product, ExtraItem }) => {
    ProductsExtraItems.belongsTo(Product, { foreignKey: 'productId' });
    ProductsExtraItems.belongsTo(ExtraItem, { foreignKey: 'extraItemId' });
  };
}

ProductsExtraItems.init(
  {
    productId: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      references: {
        model: Product,
        key: 'id',
      },
    },
    extraItemId: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      references: {
        model: ExtraItem,
        key: 'id',
      },
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    sequelize: connection,
    modelName: 'ProductsExtraItems',
    tableName: 'productsExtraItems',
  },
);

export default ProductsExtraItems;
