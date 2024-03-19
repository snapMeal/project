import { findById } from "../../repo/user";
import { IUser } from "../../interface/user";
import { IUserService } from "./IUserService";

class singleton implements IUserService{
    login(payload:IUser){
        console.log(findById(""))
        return payload;
    }
}

const UserService = new singleton();

export {UserService};