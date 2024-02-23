import { userEntity } from "../../entity/user";
import { IUser } from "../../interface/user";
import { IUserService } from "./IUserService";

class singleton implements IUserService{
    login(payload:IUser){
        console.log(userEntity.findById(""))
        return payload;
    }
}

const UserService = new singleton();

export {UserService};