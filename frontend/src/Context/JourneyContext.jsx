import { createContext, useContext, useState } from "react";


const JourneyContext = createContext();

export const JourneyProvider = ({ children }) => {
  const [journey, setJourney] = useState({
    destination: {
        name: "",
        latitude: null,
        longitude: null
    },
    startLocation: {
        latitude: null,
        longitude: null
    },
    route:[],
    distance: 0,
    estimatedTime:0,
    remainingDistance: 0,
    remainingTime:0,
    status: "Not Started",

    trackingToken:""  
  });

    const startJourneyState = (data) => {
    setJourney({
      ...data,
      remainingDistance: data.distance,
      remainingTime:data.estimatedTime,
      status: "Journey Active",
    });
    }
    const updateJourneyProgress = ({route,distance,estimatedTime,}) => {
      setJourney((prev)=>({
        ...prev,route,remainingDistance:distance,remainingTime:estimatedTime
      }))
    }

    const completeJourney =()=>{
      setJourney((prev)=>({
        ...prev,
        remainingDistance:0,
        remainingTime:0,
        status:"Completed",
      }))
    }
  

  return (
    <JourneyContext.Provider
      value={{
        journey,
        setJourney,
        startJourneyState,
        updateJourneyProgress,
        completeJourney
      }}
    >
      {children}
    </JourneyContext.Provider>
  );
}

// Custom Hook
export const useJourneyContext = () => {
  const context = useContext(JourneyContext);

  if (!context) {
    throw new Error(
      "useJourneyContext must be used inside JourneyProvider"
    );
  }

  return context
};