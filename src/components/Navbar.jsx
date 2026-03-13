import React from "react";
import { FaSearch } from "react-icons/fa";  
import { useState } from "react";
import { Navigate } from "react-router-dom";
export default function Navbar() {
    const [search, setSearch] = useState("");
    const handleSearchChange = (e) => {
        setSearch(e.target.value);
    }
  return (
    <div className="flex justify-between items-center bg-white shadow p-4">

      <h1 className="text-xl font-semibold">
        Users
      </h1>
      <div className="relative">
        <input
          type="text"
          value={search}
          onChange={handleSearchChange}
          placeholder="Search users..."
          className="border rounded px-4 py-1"
        />
        <FaSearch className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500" />  
      </div>
       
      <button 
         onClick = {() => Navigate("/add-user")}
         className="bg-blue-600 text-white px-4 py-2 rounded">
        Add User
      </button>

    </div>
  );
}