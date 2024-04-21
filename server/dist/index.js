"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const config_1 = require("./config");
config_1.app.listen(process.env.PORT, () => {
    console.log(`app running on port ${process.env.PORT}`);
});
