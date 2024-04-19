import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import DashboardPage from "./pages/DashboardPage";
import { useReduxAction, useReduxState } from "./hooks/UseRedux";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from "react";
import AdminDashboardPage from "./pages/admin/AdminDashboardPage";

function App()
{
  //TODO CHANGE TO REDUX STATE
  const { isSignedIn } = useReduxState();
  const { setIsSignedIn , setLoginData } = useReduxAction();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if(token)
    {
      setIsSignedIn(true);
      setLoginData({
        username: "Hehe",
        password: "Hehe",
      });
    }
  }, []);

  return (
    <>
    <ToastContainer/>
    <Routes>
      {
        isSignedIn ?
        (
            <>
              <Route path="/" element={<DashboardPage />} />
            </>
            ):
            (
            <>
              <Route path="/" element={<LandingPage />} />
              <Route path="/signin" element={<SignInPage />} />
              <Route path="/signup" element={<SignUpPage />} />
            </>
        )
      }
      <Route path="/*" element={<h1>404</h1>} />
      <Route path="/admin/*" element={<AdminDashboardPage />} />
    </Routes>
    </>
  );
}

export default App;
