import axios from "axios";

const API_URL = "https://safeher-backend-0hzz.onrender.com/api/sos";

const getAuthConfig = () => {
  const token = localStorage.getItem("token");

  return {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  };
};

export const triggerSOS = async (sosData) => {
  const response = await axios.post(
    `${API_URL}/trigger`,
    sosData,
    getAuthConfig(),
  );
  return response.data;
};

export const getSOSHistory = async () => {
  const response = await axios.get(`${API_URL}`, getAuthConfig());
  return response.data;
};

export const cancelSOS = async (id) => {
  const response = await axios.patch(
    `${API_URL}/cancel/${id}`,
    {},
    getAuthConfig(),
  );
  return response.data;
};

export const resolveSOS = async (id) => {
  const response = await axios.patch(
    `${API_URL}/resolve/${id}`,
    {},
    getAuthConfig(),
  );

  return response.data;
};
