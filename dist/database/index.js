"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connection = void 0;
const sequelize_1 = require("sequelize");
const databasePort = process.env.DB_PORT;
exports.connection = new sequelize_1.Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    port: databasePort,
    dialect: process.env.DB_DIALECT,
    host: process.env.DB_HOST,
});
