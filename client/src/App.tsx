import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import DashboardPage from "./pages/DashboardPage";
import { useReduxAction, useReduxState } from "./hooks/UseRedux";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from "react";
import Admin from "./pages/admin/Admin";
import axios from "./axios";
import OrdersPage from "./pages/OrdersPage";
import DefaultRoute from "./pages/DefaultRoute";

function App() {
    const [isBackendActive, setIsBackendActive] = useState(false);
    //TODO CHANGE TO REDUX STATE
    const { isSignedIn } = useReduxState();
    const { setIsSignedIn, setLoginData } = useReduxAction();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            setIsSignedIn(true);
            setLoginData({
                username: "Hehe",
                password: "Hehe",
            });
        }
    }, []);

    const { setMenu } = useReduxAction();
    useEffect(() => {
        GetMenu();
    }, []);

    async function GetMenu() {
        try {
            const resp = await axios.get("/menu");
            if (resp.status == 200)
            {
                setMenu(resp.data.data);
                setIsBackendActive(true);    
            }
        }
        catch (e: any) {
            console.log(e);
            toast.error(e.message, {
                position: "bottom-right",
            });
        }
    }

    return (
        <>
            <ToastContainer />
            {
                isBackendActive ? (
                    <Routes>
                    {
                        isSignedIn ?
                            (
                                <>
                                    <Route path="/" element={<DashboardPage />} />
                                    <Route path='/orders' element={<OrdersPage/>} />
                                </>
                            ) :
                            (
                                <>
                                    <Route path="/" element={<LandingPage />} />
                                    <Route path="/signin" element={<SignInPage />} />
                                    <Route path="/signup" element={<SignUpPage />} />
                                </>
                            )
                    }
                    <Route path="/*" element={<DefaultRoute/>} />
                    <Route path="/admin/*" element={<Admin />} />
                </Routes>
                ) : (
                    <div className="flex flex-col items-center justify-center h-screen">
                        <h1 className="text-3xl font-medium">Booting up the backend...</h1>
                        <h1 className="text-sm mt-4">It's hosted on render, visit after a few seconds.</h1>
                    </div>
                ) 
            }
        </>
    );
}

export default App;
