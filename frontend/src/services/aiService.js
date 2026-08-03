import axios from "axios";

const API = axios.create({
    baseURL: "http://localhost:5000/api/ai"
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