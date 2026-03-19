import axios from "axios";
export const getUsers = () =>{
    const token =localStorage.getItem("token");
    return axios.get("http://localhost:3000/api/v1/admin/users",{
        headers:{
            Authorization :`Bearer ${token}`

        }
    })
};

 export const registerUser = (data) =>{
    const token = localStorage.getItem("token");
    return axios.post("http://localhost:3000/api/v1/register",data,{
        headers:{
          "Content-Type": "application/json", 
          Authorization: `Bearer ${token}` 
        }
    })
 }