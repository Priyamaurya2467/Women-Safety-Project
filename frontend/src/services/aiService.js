import axios from "axios";

const API = axios.create({
    baseURL: "https://safeher-backend-0hzz.onrender.com/api/ai"
});

export const askAI = async (message) => {

    const token = localStorage.getItem("token");

    const res = await API.post(
        "/chat",
        {
            message,
        },
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    );

    return res.data;
};