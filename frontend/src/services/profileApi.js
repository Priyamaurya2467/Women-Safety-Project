import axios from "axios";

const api = "https://safeher-backend-0hzz.onrender.com/api/user/profile";

export const getProfile = async() =>{
    const token = localStorage.getItem("token");

    return axios.get(api,{
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}