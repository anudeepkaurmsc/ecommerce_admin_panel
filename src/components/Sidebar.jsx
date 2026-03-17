import React from "react";
import {  NavLink,useNavigate} from "react-router-dom";
import { FaBox, FaShoppingCart, FaSignOutAlt, FaTachometerAlt, FaUsers } from "react-icons/fa";
export default function Sidebar() {
  const navigate = useNavigate();

  // ✅ Logout function
  const handleLogout = () => {
    localStorage.removeItem("token"); // ✅ clear token
    navigate("/");                     // ✅ go to login page
  };
  return (
    <div className="w-64  bg-gray-900 text-white p-5">

      <h1 className="text-2xl font-bold mb-8">Admin Panel</h1>

      <ul className="space-y-4">
          <li>
           <NavLink
              to="/admin/dashboard"
                className={({ isActive }) => {
                  return isActive
                    ? "flex items-center gap-3 p-3 rounded bg-gray-700"
                    : "flex items-center gap-3 p-3 rounded hover:bg-gray-700";
                }}
              > 
                <FaTachometerAlt />
                Dashboard
           </NavLink>
        </li>
         <li>
            <NavLink
              to="/admin/orders"
              className={({ isActive }) => {
                return isActive
                  ? "flex items-center gap-3 p-3 rounded bg-gray-700"
                  : "flex items-center gap-3 p-3 rounded hover:bg-gray-700";
              }}
            >
              <FaShoppingCart />
              Orders
            </NavLink>
        </li>      

        <li>
          <NavLink
            to="/admin/products"
            className={({ isActive }) => {    
              return isActive
                ? "flex items-center gap-3 p-3 rounded bg-gray-700"
                : "flex items-center gap-3 p-3 rounded hover:bg-gray-700";
            }}
          >
            <FaBox className="inline-block mr-2" />
            Products
          </NavLink>
        </li>
        <li>
            <NavLink
              to="/admin/users"
              className={({ isActive }) => {
                return isActive
                  ? "flex items-center gap-3 p-3 rounded bg-gray-700"
                  : "flex items-center gap-3 p-3 rounded hover:bg-gray-700";
              }}
            >
              <FaUsers />
              Users
            </NavLink>
        </li>       
        <li>
            <NavLink
              to="/admin/logout"
              className={({ isActive }) => {
                return isActive
                  ? "flex items-center gap-3 p-3 rounded bg-gray-700"
                  : "flex items-center gap-3 p-3 rounded hover:bg-gray-700";
              }}
            >
              <FaSignOutAlt/>
              <button
              onClick={handleLogout}
              className="flex items-center gap-3 px-4 py-3 rounded-lg transition hover:bg-gray-700 text-left mt-auto"
            >
                  Logout
              </button>
            </NavLink>
        </li>
      </ul>
    </div>
  );
}
 