import axios from "axios";

const api = "http://localhost:5000/api/user/profile";

export const getProfile = async() =>{
    const token = localStorage.getItem("token");

    return axios.get(api,{
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}