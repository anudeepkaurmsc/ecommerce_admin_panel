import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddUser() {

  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    role: "Admin",
    status: true
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(user); // later send to API

    alert("User Added Successfully");

    navigate("/");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">

      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl shadow w-96"
      >

        <h2 className="text-xl font-semibold mb-4">Add New User</h2>

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          onChange={handleChange}
          className="w-full border p-2 mb-3"
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          className="w-full border p-2 mb-3"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          className="w-full border p-2 mb-3"
        />

        <select
          name="role"
          onChange={handleChange}
          className="w-full border p-2 mb-3"
        >
          <option>Admin</option>
          <option>Customer</option>
        </select>

        <button className="w-full bg-blue-600 text-white p-2 rounded">
          Create User
        </button>

      </form>
    </div>
  );
}