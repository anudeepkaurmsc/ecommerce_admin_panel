import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { loginUser } from "../api/authApi";


export default function Login() {

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async(e) => {
    e.preventDefault();
    try {
      const response = await loginUser({ email, password });
      console.log(response.data); 
    
      localStorage.setItem("token", response.data.token); 
      navigate("/admin/Users");
    }catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">

      <form onSubmit={handleLogin} className="bg-white p-6 rounded shadow w-80">

        <h2 className="text-xl font-bold mb-4 text-center">Login</h2>

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-2 mb-3"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-2 mb-4"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="w-full bg-blue-600 text-white p-2 rounded">
          Login
        </button>

      </form>
    </div>
  );
}
