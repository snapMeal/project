import { FilterActionTypes, StateMapper, action } from "easy-peasy";
import { IAuthModel } from "./IAuthorizationModel";
import { LoginUser } from "../../interface/User";

export const authModel: IAuthModel = {
  loginDetails: {
    username: "",
    password: "",
  },
  isSignedIn: false,
  setLoginData: action(
    (state: StateMapper<FilterActionTypes<IAuthModel>>, payload: LoginUser) => {
      state.loginDetails = payload;
    },
  ),
};
