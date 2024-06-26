import { Router } from "express";
import { asyncHandler } from "../utils/asyncHandler";
import { menuController } from "../controller/menu";
const menuRouter = Router();
menuRouter.get("/menu", asyncHandler(menuController.menuDetails));
menuRouter.post("/menu", asyncHandler(menuController.addMenu));
menuRouter.put("/menu", menuController.updateMenu);
menuRouter.delete("/menu", menuController.deleteMenu);
export { menuRouter };
