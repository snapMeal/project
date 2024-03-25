import { FilterActionTypes, StateMapper, action } from "easy-peasy";
import { ICartModel } from "./ICartModel";
import { menuItem } from "../../interface/MenuItem";

export const cartModel: ICartModel = {
    cart:[],
    menu:[],
    setMenu: action(
        (state: StateMapper<FilterActionTypes<ICartModel>>, payload:menuItem[]) => {
          payload.forEach((e:menuItem)=>{
            state.menu.push({...e,quantity:0});
          })
        }),
  addInCart: action(
    (state: StateMapper<FilterActionTypes<ICartModel>>, payload) => {
        const item = state.cart.findIndex((e:any)=>{
            e._id = payload._id
        })
        if(item!=-1){
            state.cart[item].quantity++;
        }
        else{
            payload.quantity = 1;
            state.cart.push(payload)
        }
    },
  ),
};
