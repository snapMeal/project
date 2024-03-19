import { Schema, model } from "mongoose";
import { IUser } from "../interface/user";

const userSchema = new Schema<IUser>({
    email: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        unique: true,
        required: true,
        index: true,
    },
});

export const User = model("user", userSchema);
