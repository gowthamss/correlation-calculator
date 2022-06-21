"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
// Middleware
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.get('/', (req, res) => {
    res.send('Hello Correlation Calculator with node and typescript - wowing');
});
// app.listen(port, () => {
//     return console.log(`Express is listening at http://localhost:${port}`);
// });
exports.default = app;
//# sourceMappingURL=app.js.map