import React from "react";
import { useNavigate } from "react-router-dom"; // ✅ import
import UsersTable from "../components/UsersTable";

export default function Users() {

  const navigate = useNavigate(); // ✅ hook at TOP of component

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Users Page</h1>
        <button
          onClick={() => navigate("/admin/add-user")} // ✅ just use it
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Add User
        </button>
      </div>

      <UsersTable />
    </div>
  );
}