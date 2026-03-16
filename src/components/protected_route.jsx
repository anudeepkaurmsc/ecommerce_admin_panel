import { Navigate, Outlet } from "react-router-dom";

function Protected() {

  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
}

export default Protected;