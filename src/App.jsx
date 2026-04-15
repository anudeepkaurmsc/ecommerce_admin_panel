import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminLayout from "./layout/AdminLayout";

import Login from "./pages/Login";
import AddUser from "./pages/AddUser";
import UsersList from "./pages/UsersList";
import Protected from "./components/protected_route";
function App() {
  return (

    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<Protected />}>
          <Route path="/admin" element={<AdminLayout/>} >
            <Route path="users" element={ <UsersList />} />
            <Route path="add-user" element={<AddUser  />} />
          </Route>
        </Route>
      </Routes>

    </BrowserRouter>

  );
}

export default App;

// import { useForm } from "react-hook-form";
// import React from "react";

// function App() {
//   const {
//     register,
//     handleSubmit,
//   } = useForm();

//   function onSubmit(data) {
//     console.log("submitting the form", data);
//   }

//   return (
//     <div className="flex justify-center items-center">
      
//       <form
//         onSubmit={handleSubmit(onSubmit)}
//         className="bg-white p-8 rounded-2xl shadow-xl w-96 space-y-4"
//       >
//         <h2 className="text-2xl font-bold text-center text-gray-700">
//           Create Account
//         </h2>
//         <input
//           className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//           placeholder="First Name"
//           {...register("firstname")}
//         />
//         <input
//           className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//           placeholder="Last Name"
//           {...register("lastname")}
//         />
//         <input
//           type="password"
//           className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//           placeholder="Password"
//           {...register("password")}
//         />
//         <div className="flex justify-between text-gray-600">
//           <label className="flex items-center gap-2">
//             <input type="radio" value="Male" {...register("gender")} />
//             Male
//           </label>
//           <label className="flex items-center gap-2">
//             <input type="radio" value="Female" {...register("gender")} />
//             Female
//           </label>
//         </div>
//         <textarea
//           className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//           placeholder="Address"
//           {...register("address")}
//         />
//         <select
//           className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//           {...register("state")}
//         >
//           <option value="">Select State</option>
//           <option>Haryana</option>
//           <option>Punjab</option>
//           <option>Himachal Pradesh</option>
//         </select>
//         <button
//           type="submit"
//           className="w-full bg-blue-500  text-white p-3 rounded-lg font-semibold hover:opacity-90 transition"
//         >
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// }

// export default App;