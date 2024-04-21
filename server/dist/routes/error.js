"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorRouter = void 0;
const express_1 = require("express");
const errorRouter = (0, express_1.Router)();
exports.errorRouter = errorRouter;
errorRouter.all("/*", (_req, res) => {
    res.json({
        message: "no such route or method for this route exists in the system",
        success: false,
    }).status(404);
});
