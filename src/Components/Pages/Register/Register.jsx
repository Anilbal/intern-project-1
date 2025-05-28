import { useState } from "react";
import "./Register.css"
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";

export default function Register() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
      });
      const navigate=useNavigate()
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();

        localStorage.setItem("user",JSON.stringify(formData))

        const userData = localStorage.getItem("user");
        if (userData) {
          const user = JSON.parse(userData);
          if (user.name && user.email && user.password) {
            toast.success("Registered Successfully! Redirecting to login...");
            setTimeout(()=>{
                navigate("/login")
            },3000)
          }
        } else {
          toast.error("No user data found in localStorage");
        }
      };

  return (
    <div className="register-container">
        <ToastContainer position="top-right" />
    <form className="register-form" onSubmit={handleSubmit}>
      <h2>Create Account</h2>
      <input
        type="text"
        name="name"
        placeholder="Full Name"
        value={formData.name}
        onChange={handleChange}
        required
      />
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
      <button type="submit">Register</button>
      <p>
        Already have an account? <a href="/login">Login</a>
      </p>
    </form>
  </div>
  )
}
