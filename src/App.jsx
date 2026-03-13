import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminLayout from "./layout/AdminLayout";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import AddUser from "./pages/AddUser";
import Users from "./pages/User";

function App() {
  return (

    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin" element={<AdminLayout />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="users" element={<Users />} />
        <Route path="add-user" element={<AddUser />} />
        </Route>

      </Routes>

    </BrowserRouter>

  );
}

export default App;