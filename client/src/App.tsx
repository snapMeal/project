import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import DashboardPage from "./pages/DashboardPage";
import { useReduxState } from "./hooks/UseRedux";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App()
{
  //TODO CHANGE TO REDUX STATE
  const { isSignedIn } = useReduxState();
  return (
    <>
    <ToastContainer/>
      {
        isSignedIn ?
        (
          <Routes>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/*" element={<h1>404</h1>} />
          </Routes>
        ):
        (
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/signin" element={<SignInPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/*" element={<h1>404</h1>} />
          </Routes>
        )
      }
    </>
  );
}

export default App;
