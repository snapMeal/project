import { Action } from "easy-peasy";
import { menuItem } from "../../interface/MenuItem";

export interface ICartModel {
  cart: any;
  menu: any;
  setMenu: Action<ICartModel, menuItem[]>;
  setItemQty: Action<ICartModel, { _id: string; qty: number }>;
}
