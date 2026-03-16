import UsersTable from "../components/UsersTable";
import { Navigate } from "react-router-dom";


export default function Users() {
    const token = localStorage.getItem("token");

    if (!token) {
        return <Navigate to="/" />;
    }
    
  return (
    <div>
      <div className="flex justify-between">
         <h1 className="text-2xl">Users Page</h1>
        <button 
          onClick = {() => Navigate("/add-user")}
          className="bg-blue-600 text-white px-4 py-2 rounded">
            Add User
        </button>
       </div>
          <UsersTable />
      </div> 
      
    
  );
}