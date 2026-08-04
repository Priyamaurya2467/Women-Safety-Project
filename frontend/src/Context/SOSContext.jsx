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

  const token = localStorage.getItem("token");

  const headers = {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  };

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
          ,
        }
      );

      setActiveSOS(res.data.data);

      return res.data.data;

    } catch (err) {

      console.log(err);

    } finally {

      setLoading(false);

    }
  };

  //------------------------------------------------
  // Get History
  //------------------------------------------------

  const fetchHistory = async () => {

    try {

      const res = await axios.get(
        "http://localhost:5000/api/sos",
        {
          headers,
        }
      );

      setHistory(res.data.data);

    } catch (err) {

      console.log(err);

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
          headers,
        }
      );

      setActiveSOS(null);

      fetchHistory();

      return res.data;

    } catch (err) {

      console.log(err);

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
          headers,
        }
      );

      setActiveSOS(null);

      fetchHistory();

      return res.data;

    } catch (err) {

      console.log(err);

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