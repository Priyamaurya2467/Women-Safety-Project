import React, {useEffect,useState,useRef} from "react";

import {MapContainer,TileLayer,Marker,Popup,Polyline} from "react-leaflet";

import { getRoute } from "../../../services/routeService";

import L, { point } from "leaflet";
import axios from "axios";


// Fix leaflet icon issue

delete L.Icon.Default.prototype._getIconUrl;

  L.Icon.Default.mergeOptions({
    iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",

    iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",

    shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
  });



  const LiveMap =()=>{
      const mapRef = useRef();
      const [currentLocation,setCurrentLocation]=useState(null);
      const [destination,setDestination]=useState("");
      const [destinationLocation,setDestinationLocation]=useState(null)
      const [route , setRoute] = useState([])
      const [routeCoordinates,setRouteCoordinates]=useState([]);
      const [routeInfo , setRouteInfo] = useState(null)
      const [journeyId,setJourneyId] = useState(null)




      // Get current location

      useEffect(()=>{

        if(destination){
          searchDestination(destination)
        }


        navigator.geolocation.getCurrentPosition(
          (position)=>{


            setCurrentLocation({

              lat:position.coords.latitude,

              lng:position.coords.longitude

            });
          },

          (error)=>{
              console.log(error);
          }

        );


      },[destination]);


      // Search destination

      const searchDestination = async(searchText)=>{
          try{
              const res = await axios.get("https://nominatim.openstreetmap.org/search",{
                params: {
                  q: searchText,
                  format: "json",
                  limit:1
                }
              }
            );


        if(res.data.length){
          const place=res.data[0];
          const location={
            lat:Number(place.lat),
            lng:Number(place.lon)

          };



        setDestinationLocation(location);



        mapRef.current.setView([location.lat,location.lng],14)

      
        // Generate Route

        const route = await getRoute(currentLocation,location);
        
        setRouteInfo({

          distance: (route.distance/1000).toFixed(2),

          time: Math.round(route.duration/60)

        });




        const coordinates = route.geometry.coordinates.map((point)=>[point[1],point[0]])
        
        setRouteCoordinates(coordinates);


    }


  }catch(err){

  console.log(err);

  }


  };





  if(!currentLocation)

  return <h2>Getting Location...</h2>;




  return (

  <div className="h-screen w-full">


  <div className="
  absolute
  top-5
  left-1/2
  transform
  -translate-x-1/2
  z-[1000]
  flex
  gap-2
  ">


  <input

  className="
  px-4
  py-2
  rounded
  shadow
  "

  placeholder="Search destination"

  value={destination}

  onChange={
  (e)=>setDestination(e.target.value)
  }


  />


  <button

  onClick={searchDestination}

  className="
  bg-blue-600
  text-white
  px-4
  rounded
  "

  >

  Search

  </button>

  <div className="absolute top-20 left-5 z-[1000] flex gap-2">

<button
onClick={handleStartJourney}
className="bg-green-600 text-white px-4 py-2 rounded"
>

Start Journey

</button>

<button
onClick={handleEndJourney}
className="bg-red-600 text-white px-4 py-2 rounded"
>

End Journey

</button>

</div>


  </div>


  {
  routeInfo &&

  <div className="
  absolute
  bottom-5
  left-5
  z-[1000]
  bg-white
  p-4
  rounded
  shadow
  ">

  <p>
  Distance:
  {routeInfo.distance} km
  </p>

  <p>
  Time:
  {routeInfo.time} min
  </p>

  </div>

  }






  <MapContainer

  center={[
    currentLocation.lat,
    currentLocation.lng
  ]}

  zoom={15}

  className="h-full"

  ref={mapRef}

  >


  <TileLayer

  url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"

  />



  <Marker

  position={[
    currentLocation.lat,
    currentLocation.lng
  ]}

  >

  <Popup>

  You are here 📍

  </Popup>


  </Marker>





  {
  destinationLocation &&

  <Marker

  position={[
    destinationLocation.lat,
    destinationLocation.lng
  ]}

  >

  <Popup>

  Destination 🏠

  </Popup>


  </Marker>

  }




  {
  routeCoordinates.length > 0 &&

  <Polyline

  positions={routeCoordinates}

  />

  }



  </MapContainer>


  </div>

  )

  }

  const handleStartJourney=async()=>{

if(!destinationLocation) return;

const result=await startJourney({

startLocation:{

latitude:currentLocation.lat,

longitude:currentLocation.lng

},

destination:{

name:destination,

latitude:destinationLocation.lat,

longitude:destinationLocation.lng

},

distance:Number(routeInfo.distance),

estimatedTime:routeInfo.time

});

setJourneyId(result.data._id);

alert("Journey Started");

  };

  const handleEndJourney=async()=>{

if(!journeyId) return;

await endJourney(journeyId);

alert("Journey Completed");

setJourneyId(null);

  };



export default LiveMap;