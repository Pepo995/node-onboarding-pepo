'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('sales', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      userId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'users',
          },
          key: 'id',
        },
        allowNull: false,
      },
      fullName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      deliveryDate: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      direction: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      contactNumber: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      deliveryTime: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      deliveryCost: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      tax: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      totalWithTax: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      productId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'products',
          },
          key: 'id',
        },
        allowNull: false,
      },
      amount: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      surprise: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      forwarding: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('sales');
  },
};
