"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const mongoose_1 = __importDefault(require("mongoose"));
const app_1 = __importDefault(require("./app"));
const DB_URI = process.env.DB_URI;
mongoose_1.default.connect(DB_URI)
    .then(() => {
    console.log('DB connection established');
})
    .catch((err) => {
    console.log('MongoDB connection error');
    console.log(err);
});
const port = process.env.PORT;
const hostname = '127.0.0.1';
app_1.default.listen(port, () => {
    console.log(`The server is listening on port ${port} of ${hostname}`);
});
//# sourceMappingURL=server.js.map