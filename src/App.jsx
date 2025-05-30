import { BrowserRouter, Route, Routes } from "react-router-dom"
import Register from "./Components/Pages/Register/Register"
import Login from "./Components/Pages/Login/Login"
import Home from "./Components/Pages/Home/Home"
import "./App.css"
export default function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Register />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/home" element={<Home />}/>
        </Routes>
    </BrowserRouter>
  )
}
