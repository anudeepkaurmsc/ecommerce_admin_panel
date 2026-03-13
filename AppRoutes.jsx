import { BrowserRouter, Routes, Route } from "react-router-dom";
import UsersList from "../pages/users/UsersList";
import AddUser from "../pages/users/AddUser";
import EditUser from "../pages/users/EditUser";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/users" element={<UsersList />} />
        <Route path="/add-user" element={<AddUser />} />
        <Route path="/edit-user/:id" element={<EditUser />} />
      </Routes>
    </BrowserRouter>
  );
}