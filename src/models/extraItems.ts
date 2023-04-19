import { Model, DataTypes, CreationOptional } from 'sequelize';
import { connection } from '../database';

class ExtraItem extends Model {
  declare id: number;
  declare name: string;
  declare price: number;
  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;

  static associate = ({ Product, ProductsExtraItems }) => {
    ExtraItem.belongsToMany(Product, { through: ProductsExtraItems, foreignKey: 'extraItemId' });
  };
}

ExtraItem.init(
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
      unique: false,
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
    modelName: 'ExtraItem',
    tableName: 'extraItems',
  },
);

export default ExtraItem;
