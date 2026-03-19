

import UsersTable from "./UsersTable";
import { Navigate } from "react-router-dom";

export default function Dashboard() {
    const token = localStorage.getItem("token");

    if (!token) {
        return <Navigate to="/" />;
    }
    
  return (
    <div>
      <h1 className="text-2xl">Dashboard Page</h1>
      <UsersTable />
    </div>  
  );
}