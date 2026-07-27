import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const TrustedContactContext = createContext();

export const TrustedContactProvider = ({ children }) => {
  const [contacts, setContacts] = useState([]);

  const fetchContacts = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/contacts", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      if (res.data.success) {
        setContacts(res.data.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  return (
    <TrustedContactContext.Provider
      value={{ contacts, fetchContacts }}
    >
      {children}
    </TrustedContactContext.Provider>
  );
};

export const useTrustedContacts = () => useContext(TrustedContactContext);