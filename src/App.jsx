import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.css"
import Register from "./Components/Pages/Register/Register"
import Login from "./Components/Pages/Login/Login"
export default function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Register />}/>
            <Route path="/login" element={<Login />}/>
        </Routes>
    </BrowserRouter>
  )
}
