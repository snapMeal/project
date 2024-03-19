import { IUser } from "../interface/user";
import { User } from "../models/user";
import { APIError } from "../utils/errorHandler";

async function findById(id: string): Promise<IUser> {
    try {
        const data = await User.findById(id);
        if (!data) throw new APIError("User not found", 404);
        return data;
    } catch (error) {
        throw new APIError("error occured in repo", 500);
    }
}

async function findByField(field: string, key: string): Promise<IUser[]> {
    return await User.find({ [field]: key });
}

async function save(payload:IUser): Promise<IUser> {
    const newUser = new User(payload);
    const data = await newUser.save();
    return data;
}

export { findById, findByField, save };
