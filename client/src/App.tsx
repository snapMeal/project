import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/about" element={<h1>HOME</h1>} />
        <Route path="/services" element={<h1>HOME</h1>} />
        <Route path="/*" element={<h1>404</h1>} />
      </Routes>
    </>
  );
}

export default App;
