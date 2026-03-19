import React from 'react'
import { useNavigate } from 'react-router-dom';
import {useState} from 'react';
import { loginUser } from '../api/authService';
function Login() {
 const[email, setEmail] = useState("");
 const[password, setPassword] = useState("");
 const navigate = useNavigate();
  const handlesubmit = async(e) =>{
    e.preventDefault();
    try{
      const response =await loginUser({
        email: email,
        password: password
      });
      const data = response.data;
      console.log("Data:", data);
      localStorage.setItem("token", data.token);
      navigate("/admin/users");
    } catch(error){
      console.log("Error:", error);
    }
  };
  
  return (
    <div className='flex item-center justify-center min-h-1 bg-gray-100'>
      <div className='bg-white p-8 rounded-2xl shadow-md w-full max-w-sm'>
        <h2 className='text-2xl font-bold text-center mb-6'>Login</h2>
          <form onSubmit={handlesubmit}>
            <div className='mb-4'>
              <label className="block mb-1 text-sm font-medium">Email</label>
                <input
                type ="email"
                placeholder='Enter your email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                 className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-1 "
                 required
                />
            </div>
            <div className='mb-4'>
              <label className="block mb-1 text-sm font-medium">Password</label>
                <input
                type ="password"
                placeholder='Enter your password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                 className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-1 "
                 required
                />
            </div>
             <button 
             type ="submit"
             className='w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition '
             >
              Login
             </button>
          </form>
      </div>
    </div>
  );
}

export default Login
