import { menuI } from "../interface/menu";
import mongoose, { Schema } from "mongoose";
const menuSchema: Schema<menuI> = new Schema({
  canteen: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});
export const menu = mongoose.model("menu", menuSchema);
