import { Schema, model } from "mongoose";
import { IUser } from "../interface/user";

const userSchema = new Schema<IUser>({
    email:String,
    password:String,
    rating:Number
})

export const User = model('user',userSchema);