import { authModel } from "./auth/AuthorizationModel";
import { IAuthModel } from "./auth/IAuthorizationModel";

export const model = {
  auth: authModel,
};

export interface IStore {
  auth: IAuthModel;
}
