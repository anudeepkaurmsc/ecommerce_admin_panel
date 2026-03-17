import React, { useEffect, useState } from "react";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { getUsers } from "../api/UserApi";

export default function UsersTable() {

  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const response = await getUsers();
      console.log("First user:", response.data.results[0]);
      setUsers(response.data.results);
    } catch (error) {
      setError("Failed to load users");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-40">
        <p className="text-gray-500">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-40">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow p-6">
      <table className="w-full text-left">
        <thead className="border-b">
          <tr className="text-gray-500">
            <th>Avatar</th>
            <th>Name</th>
            <th>Email Id</th>
            <th>Role</th>
            <th>Status</th>
            <th>Created At</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index} className="border-b">

              {/* ✅ Fixed Avatar */}
              <td className="py-3">
                <img
                  src={
                    user.avatar ||
                    `https://ui-avatars.com/api/?name=${user.name}&background=random`
                  }
                  alt={user.name}
                  className="w-10 h-10 rounded-full object-cover"
                  onError={(e) => {
                    e.target.src = `https://ui-avatars.com/api/?name=${user.name}&background=random`;
                  }}
                />
              </td>

              <td className="py-3">{user.name}</td>
              <td className="py-3">{user.email}</td>
              <td>{user.role}</td>

              {/* ✅ Fixed Status */}
              <td>
                <span className={`text-white px-3 py-1 rounded-full text-sm
                  ${user.status?.toLowerCase() === "active" || !user.status
                    ? "bg-green-500"
                    : "bg-red-500"}`}>
                  {user.status || "Active"}
                </span>
              </td>

              {/* ✅ Fixed CreatedAt */}
              <td>
                {user.createdAt
                  ? new Date(user.createdAt).toLocaleDateString("en-GB", {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                    })
                  : "N/A"}
              </td>

              <td className="flex gap-3 px-3 py-5 items-center">
                <FiEdit
                  className="text-blue-500 cursor-pointer hover:text-blue-700"
                  size={20}
                  onClick={() => navigate(`/admin/edit-user/${user._id}`)}
                />
                <FiTrash2
                  className="text-red-500 cursor-pointer hover:text-red-700"
                  size={20}
                />
              </td>

            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-6 text-sm text-gray-600">
        <p>Showing 1 to {users.length} results</p>
        <div className="flex items-center gap-2">
          <button className="px-3 py-1 border rounded">1</button>
          <button className="px-3 py-1 bg-blue-600 text-white rounded">2</button>
          <button className="px-3 py-1 border rounded">3</button>
        </div>
        <div className="flex gap-2">
          <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300">
            Previous
          </button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
