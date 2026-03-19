import axios from "axios";
export const loginUser = (data) =>{
    return axios.post("http://localhost:3000/api/v1/login", {
        email: data.email,
        password: data.password
    }); 

}