import { useState } from 'react'
import { Link } from 'react-router-dom';
import Button from '../../components/common/Button';
import { useModal } from '../../context/ModalContext';

function DashboardPage() {
    const modal = useModal();
    interface order {
        username: string;
        status: "unverified" | "verified" | "in-progress" | "done" | "cancelled";
        menu: {
            title: string;
            price: string;
            quantity: number;
        }[]
    }
    const [orders, setOrders] = useState<order[]>([
        {
            username: 'Himanshu',
            status: "unverified",
            menu: [
                {
                    title: 'Sandwich',
                    price: '₹30',
                    quantity: 1
                },
                {
                    title: 'Veg Burger',
                    price: '₹45',
                    quantity: 1
                }
            ]
        },
        {
            username: 'Deepanshu',
            status: "verified",
            menu: [
                {
                    title: 'Samosa',
                    price: '₹30',
                    quantity: 3
                },
                {
                    title: 'Mountain Dew',
                    price: '₹40',
                    quantity: 1
                }
            ]
        },
        {
            username: 'Divyansh',
            status: "in-progress",
            menu: [
                {
                    title: 'Pav Bhaji',
                    price: '₹60',
                    quantity: 2
                },
                {
                    title: 'Veg Burger',
                    price: '₹45',
                    quantity: 1
                }
            ]
        },
        {
            username: 'Nipun',
            status: "done",
            menu: [
                {
                    title: 'Pav Bhaji',
                    price: '₹60',
                    quantity: 2
                },
                {
                    title: 'Veg Burger',
                    price: '₹45',
                    quantity: 1
                }
            ]
        }
    ]);
    return (
        <main className="container p-4 mx-auto flex flex-col lg:grow lg:h-0 lg:flex-row gap-4">
            <div className={`w-full h-full card shadow-xl p-4 flex flex-col ${orders.length === 0 ? "justify-center" : ""} gap-2 bg-background2 rounded-xl lg:overflow-y-auto`}>
                {
                    orders.length === 0 && <h1 className="text-2xl text-center">No Orders</h1>
                }
                {
                    orders.map((order, index) => (
                        <div key={index} className="p-4 card">
                            <div className="flex justify-between">
                                <h1 className="text-2xl font-bold">{order.username}</h1>
                                <h1 className={`px-4 py-2 text-white rounded-full ${{
                                    unverified: "bg-slate-800",
                                    verified: "bg-yellow-500",
                                    "in-progress": "bg-blue-500",
                                    done: "bg-green-500",
                                    cancelled: "bg-red"
                                }[order.status]} text-xs capitalize`}>
                                    {order.status}
                                </h1>
                            </div>
                            <div className="flex flex-col gap-2 p-4">
                                {
                                    order.menu.map((item, index) => (
                                        <div key={index} className="flex justify-between">
                                            <h1>{item.title}</h1>
                                            <h1>{item.price} x {item.quantity} = {parseInt(item.price.split("₹")[1], 10) * item.quantity}</h1>
                                        </div>
                                    ))
                                }
                            </div>
                            <Button className="w-full" color="primary"
                                onClick={async () => {
                                    if (!(await modal?.CreateModal("Confirmation", "Are you sure you want to change the status of this order?", "Yes", "No"))) {
                                        return;
                                    }
                                    setOrders((prev) => {
                                        const newOrders = [...prev];
                                        if (order.status === "unverified")
                                            newOrders[index].status = "verified";
                                        else if (order.status === "verified")
                                            newOrders[index].status = "in-progress";
                                        else if (order.status === "in-progress")
                                            newOrders[index].status = "done";
                                        else
                                            newOrders.splice(index, 1);
                                        return newOrders;
                                    })
                                }}
                            >
                                {
                                    {
                                        unverified: "Verify Payment",
                                        verified: "Start Preparing",
                                        "in-progress": "Mark as Done",
                                        done: "Done",
                                        cancelled: "Cancelled"
                                    }[order.status]
                                }
                            </Button>
                        </div>
                    ))
                }
            </div>
            <div className="w-full h-128 lg:h-full flex flex-col gap-4">
                <Link to={'menu'} className="h-full w-full relative bg-black rounded-xl overflow-clip grid place-content-center group">
                    <img className="w-full h-full absolute opacity-50 group-hover:scale-105 duration-300" src="https://images.pexels.com/photos/313700/pexels-photo-313700.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    <h1 className="text-2xl md:text-4xl font-bold text-white z-10">Edit Menu</h1>
                </Link>
                <Link to={'orders'} className="h-full w-full relative bg-black rounded-xl overflow-clip grid place-content-center group">
                    <img className="w-full h-full absolute opacity-50 group-hover:scale-105 duration-300" src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    <h1 className="text-2xl md:text-4xl font-bold text-white z-10">View Order History</h1>
                </Link>
            </div>
        </main>
    )
}

export default DashboardPage