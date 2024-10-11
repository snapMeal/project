import { Document, Types } from "mongoose";
export interface menuI extends Document {
  canteen: string;
  title: string;
  description: string;
  price: number;
  image: string;
}
