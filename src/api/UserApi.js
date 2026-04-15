import axios from "axios";

export const getUsers = () =>{
    const token = localStorage.getItem("token");

    return axios.get("http://localhost:3000/api/v1/admin/users", {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
};

export const registerUser = (data) =>{
    const token = localStorage.getItem("token");

    return axios.post("http://localhost:3000/api/v1/register", data, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
};

export const deleteUser = (id,token) =>{
    return axios.delete(`http://localhost:3000/api/v1/admin/user/${id}`, {
        headers:{
            Authorization: `Bearer ${token}`,
        },
    });
};