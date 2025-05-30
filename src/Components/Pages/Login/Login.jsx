import { useState } from "react";
import "../Register/Register.css";
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";

export default function Login() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
      });
      const navigate=useNavigate()
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        const user=JSON.parse(localStorage.getItem("user"))
        if (formData.password !== user.password || formData.email!==user.email) {
          toast.error("Email or Passwords do not match!");
          return;
        }
        if(user){
          user.isLoggedIn=true;

          localStorage.setItem("user", JSON.stringify(user));
        }
        toast.success("User logged in!");
        setTimeout(()=>{
          navigate("/home")
        },3000)
      };
  return (
    <div className="register-container">
    <ToastContainer position="top-right" />
    <form className="register-form" onSubmit={handleSubmit}>
      <h2>Login</h2>
      <input
        type="email"    
        name="email"
        placeholder="Email Address"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
        required
      />
      <button type="submit">Login</button>
      <p>
        Doesnt have an account? <a href="/">Register</a>
      </p>
    </form>
  </div>
  )
}
