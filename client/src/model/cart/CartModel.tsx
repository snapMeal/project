import { FilterActionTypes, StateMapper, action } from "easy-peasy";
import { ICartModel } from "./ICartModel";
import { menuItem } from "../../interface/MenuItem";

export const cartModel: ICartModel = {
  cart: [],
  menu: [],
  setMenu: action(
    (
      state: StateMapper<FilterActionTypes<ICartModel>>,
      payload: menuItem[],
    ) => {
      const menu: any = [];
      payload.forEach((e: menuItem) => {
        menu.push({ ...e, quantity: 0 });
      });
      state.menu = menu;
    },
  ),
  setItemQty: action(
    (state: StateMapper<FilterActionTypes<ICartModel>>, payload) => {
      const itemIndex = state.cart.findIndex((e: any) => {
        e._id == payload._id;
      });
      if (state.cart[itemIndex].qty <= 0) {
        state.cart.splice(itemIndex, 1);
      } else {
        state.cart[itemIndex].qty++;
      }
    },
  ),
};
