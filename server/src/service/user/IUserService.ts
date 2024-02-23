import { IUser } from "../../interface/user";

export interface IUserService{
    login:(user:IUser)=>IUser;
}