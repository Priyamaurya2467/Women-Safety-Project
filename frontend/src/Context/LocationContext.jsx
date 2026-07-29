import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import axios from "axios";

const LocationContext = createContext();

export const LocationProvider = ({ children }) => {
  const [location, setLocation] = useState({
    latitude: null,
    longitude: null,
    accuracy: null,
    loading: true,
    error: null,
  });

  const [isSharing, setIsSharing] = useState(false);

  const watchId = useRef(null);

 const startSharing = async () => {
  console.log("StartSharing called");

  if (!navigator.geolocation) {
    setLocation((prev) => ({
      ...prev,
      loading: false,
      error: "Geolocation is not supported.",
    }));
    return;
  }


  navigator.geolocation.getCurrentPosition(
    async (position) => {

      const data = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        accuracy: position.coords.accuracy,
      };


      console.log("Initial Location:", data);


      try {

        // Start sharing API
        await axios.post(
          "http://localhost:5000/api/location/start",
          {
            latitude: data.latitude,
            longitude: data.longitude,
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );


        setIsSharing(true);


        // Start watching live movement
        watchId.current = navigator.geolocation.watchPosition(

          async (position) => {

            const locationData = {
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
              accuracy: position.coords.accuracy,
            };


            console.log("Live Location:", locationData);


            setLocation({
              ...locationData,
              loading:false,
              error:null,
            });


            try {

              await axios.post(
                "http://localhost:5000/api/location/update",
                locationData,
                {
                  headers:{
                    Authorization:`Bearer ${localStorage.getItem("token")}`,
                  },
                }
              );

            } catch(err){
              console.log("Update Error:",err);
            }

          },


          (err)=>{
            console.log("GPS Error:",err);

            setLocation(prev=>({
              ...prev,
              loading:false,
              error:err.message,
            }));
          },


          {
            enableHighAccuracy:true,
            timeout:10000,
            maximumAge:0,
          }

        );


      } catch(err){
        console.log("Start Sharing Error:",err);
      }

    },


    (err)=>{
      console.log("Initial GPS Error:",err);

      setLocation(prev=>({
        ...prev,
        loading:false,
        error:err.message,
      }));
    },


    {
      enableHighAccuracy:true,
      timeout:10000,
      maximumAge:0,
    }

  );
};
  const stopSharing = async () => {
    if (watchId.current !== null) {
      navigator.geolocation.clearWatch(watchId.current);
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
      console.log("Status", err.reponse?.status)
      console.log("Response:",err.reponse?.data)

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