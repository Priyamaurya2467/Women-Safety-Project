import { createContext, useContext, useState } from "react";

const AIContext = createContext();

export const AIProvider = ({ children }) => {

    const [messages, setMessages] = useState([]);

    const addMessage = (message) => {
        setMessages((prev) => [...prev, message]);
    };

    return (
        <AIContext.Provider
            value={{
                messages,
                addMessage,
            }}
        >
            {children}
        </AIContext.Provider>
    );
};

export const useAI = () => useContext(AIContext);