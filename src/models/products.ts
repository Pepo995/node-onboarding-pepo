import { Model, DataTypes, CreationOptional } from 'sequelize';
import { connection } from '../database';
import Category from './categories';
import ExtraItem from './extraItems';

class Product extends Model {
  declare id: number;
  declare name: string;
  declare price: number;
  declare image: string;
  declare description: string;
  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;

  static associate = ({ ProductsExtraItems }) => {
    Product.belongsToMany(ExtraItem, { through: ProductsExtraItems, foreignKey: 'productId' });
  };
}

Product.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
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
    modelName: 'Product',
    tableName: 'products',
  },
);

Category.hasOne(Product);
Product.belongsTo(Category);

export default Product;
