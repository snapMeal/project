import { Router } from "express";

const errorRouter = Router();

errorRouter.all("/*", (_req, res) => {
    res.json({
        message: "no such route or method for this route exists in the system",
        success: false,
    }).status(404);
});

export { errorRouter };
