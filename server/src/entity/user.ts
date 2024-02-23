import { User } from "../models/user";

class singleton {
    async findById(id:string){
        return await User.findById(id);
    }
}

export const userEntity = new singleton();