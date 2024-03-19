import { IUser } from "../../interface/user";

export interface IUserService{
    login:(user:IUser)=>Promise<string>;
    signup:(user: IUser)=>Promise<string>;
}