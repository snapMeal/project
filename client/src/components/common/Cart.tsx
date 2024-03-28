import { useReduxState } from "../../hooks/UseRedux";
import FoodItemCard from "../dashboard/FoodItemCard"
import Button from "./Button"

function Cart(props:{cartOpen:boolean,setCartOpen:(prev:any)=>any})
{
    const { menu } = useReduxState();
    return (
    <>
        <div onClick={()=>props.setCartOpen(false)} className={`${props.cartOpen?"bg-text/50":"pointer-events-none"} duration-300 fixed z-40 w-screen h-screen left-0 top-0`}/>
        <div className={`${props.cartOpen?"":"translate-x-full"} right-0 duration-300 p-8 fixed z-50 w-full md:w-128 h-screen top-0 bg-background shadow-xl flex flex-col justify-between`}>
            <h2 className='text-4xl flex justify-between items-center'>
                <span>Cart</span>
                <svg onClick={()=>props.setCartOpen(false)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 hover:text-primary hover:scale-105 active:scale-95 duration-200">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
            </h2>
            <div className="overflow-y-scroll grow mt-8">
                <div className="flex flex-col gap-4 items-stretch">
                {
                    menu.map((item:any, index: any) => item && <FoodItemCard horizontal={true} key={index} item={item}/>)
                }
                </div>
            </div>
            <div>
                <Button onClick={()=>{
                    props.setCartOpen(false);
                    //TODO API CALL HERE
                }} className="w-full" color={"primary"}>Proceed To Checkout</Button>
            </div>
        </div>
    </>
  )
}

export default Cart