import { Model, DataTypes, CreationOptional } from 'sequelize';
import { connection } from '../database';

class Product extends Model {
  declare id: number;
  declare name: string;
  declare price: number;
  declare image: string;
  declare description: string;
  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;

  static associate = ({ ExtraItem, ProductsExtraItems, Category, Sale }) => {
    Product.belongsToMany(ExtraItem, { through: ProductsExtraItems, foreignKey: 'productId' });
    Product.belongsTo(Category);
    Product.hasMany(Sale);
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

export default Product;
