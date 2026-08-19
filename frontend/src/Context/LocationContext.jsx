import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import axios from "axios";

const LocationContext = createContext();

import { monitorJourney } from "../services/monitoringService";

export const LocationProvider = ({ children }) => {
  const [location, setLocation] = useState({
    latitude: null,
    longitude: null,
    accuracy: null,
    loading: true,
    error: null,
  });

  const [monitoring,setMonitoring] = useState({
    safe: true,
    score:100,
    zone: "",
    alert: null,
  })

  const [isSharing, setIsSharing] = useState(false);

  const watchId = useRef(null);

 const startSharing = async () => {

return new Promise((resolve,reject)=>{

navigator.geolocation.getCurrentPosition(

async (position)=>{

const initialLocation = {
    latitude: position.coords.latitude,
    longitude: position.coords.longitude,
    accuracy: position.coords.accuracy,
};


try {

await axios.post(
"https://safeher-backend-0hzz.onrender.com/api/location/start",
{
 latitude:initialLocation.latitude,
 longitude:initialLocation.longitude
},
{
 headers:{
 Authorization:`Bearer ${localStorage.getItem("token")}`
 }
}
);


setIsSharing(true);

watchId.current = navigator.geolocation.watchPosition(
  async(position)=>{
    const updatedLocation = {
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
      accuracy: position.coords.accuracy
    };
    setLocation({
      ...updatedLocation,
      loading:false,
      error: null
    })

    const rest = await monitorJourney({
      latitude: updatedLocation.latitude,
      longitude: updatedLocation.longitude
    })

    setMonitoring(rest.data)

    await axios.post("http://localhost:5000/api/location/update",updatedLocation,{
      headers: {Authorization: `Bearer ${localStorage.getItem("token")}`}
    })
  },
  (error)=>{
    console.log(error)
  },
  {
    enableHighAccuracy: true
  }
)


setLocation({
 ...initialLocation,
 loading:false,
 error:null
});


// IMPORTANT
resolve(initialLocation);



} catch(err){

console.log(err);
reject(err);

}


},

(error)=>{

console.log("GPS Error:",error);
reject(error);

},

{
 enableHighAccuracy:true,
 timeout:60000,
 maximumAge:10000
}

);

});

};


  const stopSharing = async () => {
  if (watchId.current !== null) {
    navigator.geolocation.clearWatch(watchId.current);
    watchId.current = null;
  }

  setIsSharing(false);

  try {
    await axios.post(
      "http://localhost:5000/api/location/stop",
      {},
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
  } catch (err) {
    console.log(err);
  }
};

  const fetchLocation = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/location",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      if(res.data.success){

    if(res.data.data){

        setLocation({
            latitude:res.data.data.latitude,
            longitude:res.data.data.longitude,
            accuracy:res.data.data.accuracy,
            loading:false,
            error:null
        });

        setIsSharing(res.data.data.isSharing);

    }else{

        setLocation(prev=>({
            ...prev,
            loading:false
        }));

    }

}
      
    } catch (err) {
      console.log("Status", err.response?.status)
      console.log("Response:",err.response?.data)

      setLocation((prev) => ({
        ...prev,
        loading: false,
      }));
    }
  };

  useEffect(() => {
    fetchLocation();

    return () => {
      if (watchId.current !== null) {
        navigator.geolocation.clearWatch(watchId.current);
      }
    };
  }, []);

  return (
    <LocationContext.Provider
      value={{
        location,
        monitoring,
        isSharing,
        startSharing,
        stopSharing,
        
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};

export const useLocation = () => useContext(LocationContext);