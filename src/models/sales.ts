import { Model, DataTypes, CreationOptional } from 'sequelize';
import { connection } from '../database';

class Sale extends Model {
  declare id: number;
  declare userId: number;
  declare fullName: string;
  declare deliveryDate: string;
  declare direction: string;
  declare contactNumber: number;
  declare deliveryTime: string;
  declare deliveryCost: number;
  declare tax: number;
  declare totalWithTax: number;
  declare amount: number;
  declare surprise: boolean;
  declare forwarding: boolean;
  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;

  static associate = ({ Product, User }) => {
    Sale.belongsTo(Product);
    Sale.belongsTo(User);
  };
}

Sale.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    fullName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    deliveryDate: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    direction: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    contactNumber: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    deliveryTime: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    deliveryCost: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    tax: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    totalWithTax: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    productId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    amount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    surprise: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    forwarding: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
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
    modelName: 'Sale',
    tableName: 'sales',
  },
);

export default Sale;
