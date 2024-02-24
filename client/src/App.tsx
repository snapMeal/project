import { Routes, Route } from "react-router-dom"
import LandingPage from "./pages/LandingPage"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/about" element={<h1>HOME</h1>} />
        <Route path="/services" element={<h1>HOME</h1>} />
        <Route path="/*" element={<h1>404</h1>} />
      </Routes>
    </>
  )
}

export default App
