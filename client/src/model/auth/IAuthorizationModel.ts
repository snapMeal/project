import { Action } from "easy-peasy";
import { LoginUser } from "../../interface/User";

export interface IAuthModel {
  loginDetails: LoginUser;
  setLoginData: Action<IAuthModel, LoginUser>;
}
