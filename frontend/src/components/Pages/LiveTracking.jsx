import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { getTracking } from "../services/trackingService";

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

function LiveTracking() {
  const { token } = useParams();

  const [journey, setJourney] = useState(null);
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(true);

  const loadTracking = async () => {
    try {
      const res = await getTracking(token);

      if (res.success) {
        setJourney(res.journey);
        setLocation(res.location);
      }
    } catch (error) {
      console.log("Tracking Error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadTracking();

    const interval = setInterval(() => {
      loadTracking();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen text-xl">
        Loading Live Tracking...
      </div>
    );
  }

  if (!location) {
    return (
      <div className="flex justify-center items-center h-screen text-xl">
        Live location unavailable.
      </div>
    );
  }

  return (
    <div className="h-screen w-full relative">

      {/* Journey Details */}
      <div className="absolute top-5 left-5 z-[1000] bg-white shadow-lg rounded-lg p-5 w-80">

        <h2 className="text-2xl font-bold mb-4">
          Live Journey
        </h2>

        <div className="space-y-2">

          <p>
            <strong>Status:</strong>{" "}
            {journey?.status}
          </p>

          <p>
            <strong>Destination:</strong>{" "}
            {journey?.destination?.name}
          </p>

          <p>
            <strong>Distance:</strong>{" "}
            {journey?.distance} km
          </p>

          <p>
            <strong>Estimated Time:</strong>{" "}
            {journey?.estimatedTime} min
          </p>

          <p>
            <strong>Started:</strong>{" "}
            {new Date(journey?.startedAt).toLocaleString()}
          </p>

        </div>

      </div>

      <MapContainer
        center={[
          location.latitude,
          location.longitude,
        ]}
        zoom={15}
        scrollWheelZoom={true}
        className="h-full w-full"
      >
        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker
          position={[
            location.latitude,
            location.longitude,
          ]}
        >
          <Popup>
            User's Current Live Location 📍
          </Popup>
        </Marker>

      </MapContainer>

    </div>
  );
}

export default LiveTracking;