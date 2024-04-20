import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import DashboardPage from "./pages/DashboardPage";
import { useReduxAction, useReduxState } from "./hooks/UseRedux";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from "react";
import Admin from "./pages/admin/Admin";
import axios from "./axios";

function App() {
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
                setMenu(resp.data.data);
        }
        catch (e: any) {
            toast.error(e.message, {
                position: "bottom-right",
            });
        }
    }

    return (
        <>
            <ToastContainer />
            <Routes>
                {
                    isSignedIn ?
                        (
                            <>
                                <Route path="/" element={<DashboardPage />} />
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
                <Route path="/*" element={<h1>404</h1>} />
                <Route path="/admin/*" element={<Admin />} />
            </Routes>
        </>
    );
}

export default App;
