
function CounterButton(props:{quantity: number,setQuantity: (prev: any) => any})
{
    const {quantity, setQuantity} = props;
    return (
    <div className={`bg-gray-200 ${quantity==0?"w-8":"w-24"} duration-200 h-8 relative rounded-full grid place-items-center`}>
        <div className="bg-gray-100 cursor-pointer select-none absolute left-0 grid place-items-center rounded-full w-8 h-8">-</div>
        <div className={`${quantity==0?"bg-primary text-background":"bg-gray-100"} duration-100 cursor-pointer select-none absolute right-0 z-10 grid place-items-center rounded-full w-8 h-8`}>+</div>
        {quantity}
    </div>
  )
}

export default CounterButton