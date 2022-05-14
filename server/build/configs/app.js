"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.startServer = exports.app = void 0;
const express_1 = __importDefault(require("express"));
const sequelize_1 = require("./sequelize");
const port = 3000;
exports.app = (0, express_1.default)();
function startServer() {
    (0, sequelize_1.checkDBConnection)();
    exports.app.listen(port, () => {
        console.log(`App running on port ${port}`);
    });
}
exports.startServer = startServer;
