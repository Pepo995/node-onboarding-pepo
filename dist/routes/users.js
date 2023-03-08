"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const users_1 = require("../controllers/users");
const router = express_1.default.Router();
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield (0, users_1.getUsers)();
        res.send(data);
    }
    catch (error) {
        res.send({ error: error.message });
    }
}));
router.get('/:id', ({ body }, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield (0, users_1.getUserById)(body.id);
        res.send(data);
    }
    catch (error) {
        res.send({ error: error.message });
    }
}));
router.post('/', ({ body }, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield (0, users_1.createUser)(body);
        res.status(200).send(user);
    }
    catch (error) {
        res.send({ error: error.message });
    }
}));
router.delete('/:id', ({ body }, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield (0, users_1.deleteUser)(body.id);
        res.status(200).send(data);
    }
    catch (error) {
        res.send({ error: error.message });
    }
}));
router.put('/:id', ({ body }, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield (0, users_1.updateUser)(body.id, body);
        res.status(200).send(data);
    }
    catch (error) {
        res.send({ error: error.message });
    }
}));
exports.default = router;
