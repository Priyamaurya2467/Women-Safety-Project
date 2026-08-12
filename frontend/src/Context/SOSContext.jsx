import React, {
  createContext,
  useContext,
  useState,
} from "react";
import axios from "axios";

const SOSContext = createContext();

export const SOSProvider = ({ children }) => {
  const [activeSOS, setActiveSOS] = useState(null);
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(false);

  // Always get the latest token
  const getHeaders = () => ({
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  });

  //------------------------------------------------
  // Trigger SOS
  //------------------------------------------------

  const triggerSOS = async (
    emergencyType,
    latitude,
    longitude,
    address
  ) => {
    try {
      setLoading(true);

      const res = await axios.post(
        "http://localhost:5000/api/sos",
        {
          emergencyType,
          latitude,
          longitude,
          address,
        },
        {
          headers: getHeaders(),
        }
      );

      setActiveSOS(res.data.data);
      await fetchHistory();

      return res.data.data;
    } catch (err) {
      console.error(err.response?.data?.message || err.message);
    } finally {
      setLoading(false);
    }
  };

  //------------------------------------------------
  // Get SOS History
  //------------------------------------------------

  const fetchHistory = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/sos",
        {
          headers: getHeaders(),
        }
      );

      setHistory(res.data.data);
    } catch (err) {
      console.error(err.response?.data?.message || err.message);
    }
  };

  //------------------------------------------------
  // Cancel SOS
  //------------------------------------------------

  const cancelSOS = async (id) => {
    try {
      const res = await axios.put(
        `http://localhost:5000/api/sos/${id}/cancel`,
        {},
        {
          headers: getHeaders(),
        }
      );

      setActiveSOS(null);
      await fetchHistory();

      return res.data;
    } catch (err) {
      console.error(err.response?.data?.message || err.message);
    }
  };

  //------------------------------------------------
  // Resolve SOS
  //------------------------------------------------

  const resolveSOS = async (id) => {
    try {
      const res = await axios.put(
        `http://localhost:5000/api/sos/${id}/resolve`,
        {},
        {
          headers: getHeaders(),
        }
      );

      setActiveSOS(null);
      await fetchHistory();

      return res.data;
    } catch (err) {
      console.error(err.response?.data?.message || err.message);
    }
  };

  return (
    <SOSContext.Provider
      value={{
        activeSOS,
        history,
        loading,
        triggerSOS,
        cancelSOS,
        resolveSOS,
        fetchHistory,
      }}
    >
      {children}
    </SOSContext.Provider>
  );
};

export const useSOS = () => useContext(SOSContext);