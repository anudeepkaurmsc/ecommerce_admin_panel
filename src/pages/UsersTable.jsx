import React from 'react'
import{FiEdit,FiTrash2} from "react-icons/fi";
function UsersTable() {
    const users = [
    { id: 1, name: "John Doe", email: "johndoe@example.com", role: "Admin", status: "Active", created: "21 Oct 2021", avatar: "JD" },   
    { id: 2, name: "Jane Smith", email: "janesmith@example.com", role: "Customer", status: "Active", created: "21 Oct 2021", avatar: "JS" },
    { id: 3, name: "Michael Lee", email: "michaellee@example.com", role: "Customer", status: "Active", created: "21 Oct 2021", avatar: "ML" },
    { id: 4, name: "Sarah Connor", email: "sarahconnor@example.com", role: "Customer", status: "Active", created: "21 Oct 2021", avatar: "SC" },
    { id: 5, name: "Tom Brown", email: "tombrown@example.com", role: "Customer", status: "Blocked", created: "21 Oct 2021", avatar: "TB" },
  ];
  const avatarColors = [
    "bg-amber-500", "bg-rose-500", "bg-sky-500", "bg-emerald-500", "bg-violet-500",
  ];
  return (
        <div>
         <div className='flex justify-between mb-4'>
             <h1 className="text-2xl">Users Table</h1>
              <button 
                onClick = {() => Navigate("/add-user")}
                 className="bg-blue-600 text-white px-4 py-2 rounded">
                Add User
              </button>          
         </div> 
         <div className='w-full  bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100'>
           <table className="w-full text-left">
            <thead>
              <tr className="bg-gray-200 border-b border-slate-100">
                  <th className="text-left px-6 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Avatar</th>
                  <th className="text-left px-6 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Name</th>
                  <th className="text-left px-6 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Email</th>
                  <th className="text-left px-6 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Role</th>
                  <th className="text-left px-6 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Status</th>
                  <th className="text-left px-6 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Created At</th>
                  <th className="text-left px-6 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">Action</th>
              </tr>
            </thead >
              <tbody className="divide-y divide-gray-200">
                {users.map((user, idx) => (
                 <tr key={user.id} className="hover:bg-slate-50 transition-colors duration-100 group">
                    <td className="px-6 py-4">
                      <div className={`w-9 h-9 rounded-full ${avatarColors[idx]} flex items-center justify-center text-white text-xs font-bold shadow-sm`}>{user.avatar}</div>
                    </td>
                    <td className="px-6 py-4">
                          <span className="font-medium text-slate-800">{user.name}</span> 
                    </td>
                    <td className="px-6 py-4">
                          <span className="font-medium text-slate-800">{user.email}</span> 
                    </td>
                    <td className="px-6 py-4">                    
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium ${
                            user.role === "Admin"
                              ? "bg-indigo-50 text-indigo-700"
                              : "bg-slate-100 text-slate-600"
                          }`}>
                            {user.role}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold ${
                          user.status === "Active"
                            ? "bg-emerald-50 text-emerald-700"
                            : "bg-red-50 text-red-600"
                        }`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${
                            user.status === "Active" ? "bg-emerald-500" : "bg-red-500"
                          }`} />
                          {user.status}
                        </span>
                    </td>
                    <td className="px-6 py-4 text-slate-500">{user.created}</td>
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
          </div>        
        </div>
       
        )
      }

      export default UsersTable
// import { useState } from "react";


// export default function UserTable() {
//   const [currentPage, setCurrentPage] = useState(1);
//   const totalPages = 3;

//   return (

//         {/* Footer / Pagination */}
//         <div className="px-6 py-4 border-t border-slate-100 flex items-center justify-between">
//           <p className="text-sm text-slate-400">
//             Showing <span className="font-medium text-slate-600">1 to 5</span> of <span className="font-medium text-slate-600">25</span> users
//           </p>

//           <div className="flex items-center gap-1.5">
//             <button
//               onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
//               className="px-3 py-1.5 text-sm text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-lg transition-colors duration-150 font-medium"
//             >
//               Previous
//             </button>

//             {[1, 2, 3].map((page) => (
//               <button
//                 key={page}
//                 onClick={() => setCurrentPage(page)}
//                 className={`w-8 h-8 text-sm rounded-lg font-medium transition-colors duration-150 ${
//                   currentPage === page
//                     ? "bg-indigo-600 text-white shadow-sm"
//                     : "text-slate-500 hover:bg-slate-100 hover:text-slate-800"
//                 }`}
//               >
//                 {page}
//               </button>
//             ))}

//             <button
//               onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
//               className="px-3 py-1.5 text-sm text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-lg transition-colors duration-150 font-medium"
//             >
//               Next
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
