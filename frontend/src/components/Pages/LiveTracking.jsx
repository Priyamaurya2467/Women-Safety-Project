import React from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L, { point } from "leaflet";

// Fix Leaflet marker icon issue
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

function LiveTracking({currentLocation,destination,route}) {
  if (!currentLocation||currentLocation.latitude==null || currentLocation.longitude==null) {
    return (
      <div className="flex items-center justify-center h-[500px] bg-gray-100 rounded-xl">
        <p className="text-gray-600 text-lg">
          Waiting for live location...
        </p>

      </div>
    );
  }

  console.log("Destination:", destination)

  return (
    <div className="h-[600px] w-full rounded-xl overflow-hidden shadow-lg">
      <MapContainer
        center={[currentLocation?.latitude, currentLocation?.longitude]}
        zoom={16}
        scrollWheelZoom={true}
        className="h-full w-full"
      >

        
          
            {route?.length >0 && (
                <Polyline
                  positions={route.map(point => [
                    point.latitude,
                    point.longitude
                  ])}
                />
              )
            }
          
         


        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {
          currentLocation.latitude!=null && 
          currentLocation.longitude!=null && (

          <Marker 
             position={[
                    currentLocation.latitude,
                    currentLocation.longitude
             ]}>
          <Popup>
            Your Current Location 📍
            <br />
            Latitude: {currentLocation?.latitude.toFixed(6)}
            <br />
            Longitude: {currentLocation?.longitude.toFixed(6)}
          </Popup>
          </Marker>
          )
        }

       
         {
          destination?.latitude != null &&
          destination?.longitude != null && (
            <Marker
              position={[
                destination.latitude,
                destination.longitude
              ]}
              >

                <Popup>
                  Destination 📍
                </Popup>

            </Marker>
          )
        }
          
      </MapContainer>
    </div>
  );
}

export default LiveTracking;