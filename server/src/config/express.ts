import express from "express";
import { router } from "../routes";
import { errorMiddleware } from "../middleware/errorMiddleware";

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use("/",router);
app.use(errorMiddleware);

export {app};