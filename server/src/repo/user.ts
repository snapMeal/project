import { User } from "../models/user";

async function findById(id: string) {
    return await User.findById(id);
}

export {findById}