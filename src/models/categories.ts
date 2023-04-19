import { Model, DataTypes, CreationOptional } from 'sequelize';
import { connection } from '../database';

class Category extends Model {
  declare id: number;
  declare name: string;
  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;

  static associate = ({ Product }) => {
    Category.hasMany(Product);
  };
}

Category.init(
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
    modelName: 'Category',
    tableName: 'categories',
  },
);

export default Category;
