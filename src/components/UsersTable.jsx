import React from "react";
import { FiEdit, FiTrash2 } from "react-icons/fi";  
export default function UsersTable() {
  const users = [
    { avatar: "https://via.placeholder.com/50", name: "John Doe", email: "john.doe@example.com", role: "Admin", status: "Active", "Created At": "21 Oct 2021", Action:"Edit"  },
    { avatar: "https://via.placeholder.com/50", name: "Jane Smith", email: "jane.smith@example.com", role: "Customer", status: "Active", "Created At": "22 Oct 2021", Action:"Edit" },
    { avatar: "https://via.placeholder.com/50", name: "Michael Lee", email: "michael.lee@example.com", role: "Customer", status: "Active", "Created At": "23 Oct 2021",Action:"Edit" },
    { avatar: "https://via.placeholder.com/50", name: "Sarah Connor", email: "sarah.connor@example.com", role: "Admin", status: "Active", "Created At": "24 Oct 2021",Action:"Edit" },  
    { avatar: "https://via.placeholder.com/50", name: "Tom Brown", email: "tom.brown@example.com",   role: "Customer", status: "Blocked", "Created At": "25 Oct 2021",Action:"Edit" }
  ];

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
              <td className="py-3">
                <img src={user.avatar} className="w-10 h-10 rounded-full" />
              </td>

              <td className="py-3">{user.name}</td>
              <td className="py-3">{user.email}</td>

              <td>{user.role}</td>

              <td>
                <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm">
                  {user.status}
                </span>
              </td>

              <td>21 Oct 2021</td>
              <td className="flex gap-3 px-3 py-5 items-center">
               <FiEdit 
                className="text-blue-500 text-sm cursor-pointer hover:text-blue-700"
                  size={20}
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
        <p >Showing 1 to 5 of 25 results</p>
         <div className="flex items-center gap-2">
            <button className="px-3 py-1 border rounded">1</button>
            <button className="px-3 py-1 bg-blue-600 text-white rounded"> 2
            </button>  
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