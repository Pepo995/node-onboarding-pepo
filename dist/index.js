"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const express_1 = __importDefault(require("express"));
const index_1 = __importDefault(require("./routes/index"));
const index_2 = require("./database/index");
const app = (0, express_1.default)();
const port = process.env.PORT || 3001;
app.use('/', express_1.default.json(), index_1.default);
index_2.connection.authenticate().then(() => {
    app.listen(port, () => {
        console.log(`App listening on port ${port}`);
    });
});
