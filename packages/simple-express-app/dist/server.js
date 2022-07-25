"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// import cors from 'cors';
const app = (0, express_1.default)();
const port = 3001;
// app.use(cors());
app.get('/data', (req, res) => {
    res.json({ foo: 'bar' });
});
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
