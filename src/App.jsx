import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminLayout from "./layout/AdminLayout";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import AddUser from "./pages/AddUser";
import Users from "./pages/UsersTable";
import Protected from "./components/protected_route";
import Logout from "./pages/Logout"; 
function App() {
  return (

    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<Protected />}>
          <Route path="/admin" element={<AdminLayout/>} >
            <Route path="dashboard" element={ <Dashboard />} />
            <Route path="users" element={ <UsersTable />} />
            <Route path="add-user" element={<AddUser  />} />
             <Route path="admin/logout" element={<Logout />} />
          </Route>
        </Route>
      </Routes>

    </BrowserRouter>

  );
}

export default App;