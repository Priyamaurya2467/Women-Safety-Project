import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
} from "react-leaflet";


import { useLocation } from "../../../Context/LocationContext";
import { useEffect } from "react";

function ChangeMapView({ center }) {
  

  const map = useMap();

  useEffect(() => {
    map.setView(center, map.getZoom());
  }, [center, map]);

  return null;
}

function LiveMap() {

  const {
    location,
    isSharing,
    startSharing,
    stopSharing
  } = useLocation();

  useEffect(() => {
    startSharing();

    return () => {
        stopSharing();
    };
}, []);

  if (location.loading) {
    return (
      <div className="h-96 flex items-center justify-center">
        Getting Location...
      </div>
    );
  }

  if (location.error) {
    return (
      <div className="h-96 flex items-center justify-center text-red-500">
        {location.error}
      </div>
    );
  }

  if (
  location.latitude === null ||
  location.longitude === null
) {
  return (
    <div className="h-96 flex items-center justify-center">
      Waiting for GPS...
    </div>
  );
}

const position = [location.latitude, location.longitude];

  return (

    <div className="col-span-12 lg:col-span-8 h-96 rounded-2xl overflow-hidden shadow">

      <MapContainer
        center={position}
        zoom={16}
        style={{
          width: "100%",
          height: "100%",
        }}
      >

        <ChangeMapView center={position} />

        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={position}>

          <Popup>

            <div>

              <h2 className="font-bold">
                Your Location
              </h2>

              <p>
                Latitude :
                {location.latitude}
              </p>

              <p>
                Longitude :
                {location.longitude}
              </p>

              <p>
                Accuracy :
                {Math.round(location.accuracy)} meters
              </p>

              <p>
                Status :
                {isSharing
                  ? " Live"
                  : " Offline"}
              </p>

            </div>

          </Popup>

        </Marker>

      </MapContainer>

    </div>

  );
}

export default LiveMap;