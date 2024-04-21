"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const db_1 = require("./db");
var express_1 = require("./express");
Object.defineProperty(exports, "app", { enumerable: true, get: function () { return express_1.app; } });
process.on('uncaughtException', (error) => {
    console.log("error : ", error);
});
(0, db_1.connectDB)();
