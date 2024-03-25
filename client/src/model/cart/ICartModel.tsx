import { Action } from "easy-peasy";
import { menuItem } from "../../interface/MenuItem";

export interface ICartModel {
  cart: any;
  menu:any;
  setMenu:Action<ICartModel, menuItem[]>;
  addInCart: Action<ICartModel, any>;
}
