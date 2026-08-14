import React, { useEffect, useState } from "react";

import Header from "./Pages/Sos Center/Header";
import Sidebar from "./Elements/Sidebar";
import Map from "./Pages/Sos Center/Map";
import User_Status_Card from "./Pages/Sos Center/User_Status_Card";
import Trusted from "./Pages/Sos Center/Trusted";
import EvidenceUpload from "./Pages/Sos Center/EvidenceUpload";
import { useTrustedContacts } from "../Context/TrustedContactContext";
import axios from "axios";

const API_URL = "http://localhost:5000/api/sos";

function SOS_Centre() {
  const [sosHistory, setSosHistory] = useState([]);
  const [currentSos, setCurrentSos] = useState(null);
  const [loading, setLoading] = useState(true);
  const [triggeringSOS, setTriggeringSOS] = useState(false);
  const [sharingLocation, setSharingLocation] = useState(false);
  const [error, setError] = useState("");
  const {contacts} = useTrustedContacts();
  const [emergencyNumbers, setEmergencyNumbers] = useState([]);
  const [showEmergencyNumbers, setShowEmergencyNumbers] = useState(false);

  // AUTH CONFIG

  const getAuthConfig = () => {
    const token = localStorage.getItem("token");

    return {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };
  };

  useEffect(() => {
    fetchSosHistory();
  }, []);

  const fetchSosHistory = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await axios.get(
        `${API_URL}/history`,
        getAuthConfig()
      );

      const history = response.data || [];

      setSosHistory(history);

      const activeSOS = history.find(
        (sos) =>
          sos.status !== "CANCELLED" &&
          sos.status !== "RESOLVED"
      );

      setCurrentSos(activeSOS || null);
    } catch (err) {
      console.error("Failed to fetch SOS history:", err);

      setError(
        err.response?.data?.message ||
          "Unable to load SOS information"
      );
    } finally {
      setLoading(false);
    }
  };

  const handleTriggerSOS = () => {
    if (currentSos) {
      setError("An SOS is already active.");
      return;
    }

    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser.");
      return;
    }

    setTriggeringSOS(true);
    setError("");

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const { latitude, longitude } = position.coords;

          const sosData = {
            emergencyType: "GENERAL",
            latitude,
            longitude,
            address: "Current Location",
          };

          console.log("Sending SOS:", sosData);

          const response = await axios.post(
            `${API_URL}/trigger`,
            sosData,
            getAuthConfig()
          );

          console.log("SOS triggered successfully:", response.data);

          // Refresh data after triggering
          await fetchSosHistory();
        } catch (err) {
          console.error("Failed to trigger SOS:", err);

          setError(
            err.response?.data?.message ||
              "Failed to trigger SOS"
          );
        } finally {
          setTriggeringSOS(false);
        }
      },

      (locationError) => {
        console.error("Location error:", locationError);

        setError(
          "Unable to get your location. Please allow location access."
        );

        setTriggeringSOS(false);
      },

      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0,
      }
    );
  };

  const handleShareLocation = () => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported.");
      return;
    }

    setSharingLocation(true);
    setError("");

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const { latitude, longitude } = position.coords;

          console.log("Current location:", {
            latitude,
            longitude,
          });

          /*
            If you already have LocationContext,
            this logic should eventually be moved there.
          */

          if (currentSos) {
            await axios.put(
              `${API_URL}/${currentSos._id}/location`,
              {
                latitude,
                longitude,
              },
              getAuthConfig()
            );
          }

          alert("Location shared successfully.");
        } catch (err) {
          console.error("Failed to share location:", err);

          setError(
            err.response?.data?.message ||
              "Failed to share location"
          );
        } finally {
          setSharingLocation(false);
        }
      },

      (locationError) => {
        console.error(locationError);

        setError(
          "Please allow location access to share your location."
        );

        setSharingLocation(false);
      },

      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0,
      }
    );
  };

  const handleEmergencyCall = async() => {
    try{
      const token = localStorage.getItem("token");

      const response = await axios.get("http://localhost:5000/api/emergency-number",{
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      
      setEmergencyNumbers(response.data.data || [])
      setShowEmergencyNumbers(true)
    }catch(err){
      alert(
        err.response?.data?.message || "Unable to get emergency Number"
      )
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-700">
      <Sidebar />

      <main className="min-h-screen px-4 pt-20 pb-8 sm:px-6 md:ml-64 lg:px-8">
        <div className="mx-auto max-w-7xl">

       

          


          {/* Emergency Actions */}
          <div className="mb-6 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
            <div className="mb-3 flex items-center justify-between">
              <h2 className="text-base font-semibold text-gray-800">
                Emergency Actions
              </h2>

              <span className="text-xs text-gray-400">
                Quick access
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">

              {/* Trigger SOS */}
              <button
                className="flex h-12 items-center justify-center gap-2 rounded-xl bg-red-600 px-3 text-sm font-semibold text-white transition hover:bg-red-700"
              >
                <span>🚨</span>
                <span>Trigger SOS</span>
              </button>

              {/* Share Location */}
              <button
                className="flex h-12 items-center justify-center gap-2 rounded-xl border border-gray-200 bg-gray-50 px-3 text-sm font-medium text-gray-700 transition hover:bg-gray-100"
              >
                <span>📍</span>
                <span>Share Location</span>
              </button>

              {/* Emergency Call */}
              <button
                onClick={handleEmergencyCall}
                className="flex h-12 items-center justify-center gap-2 rounded-xl border border-gray-200 bg-gray-50 px-3 text-sm font-medium text-gray-700 transition hover:bg-gray-100"
              >
                <span>📞</span>
                <span>Emergency Call</span>
              </button>

              {/* Trusted Contacts */}
              <button
                className="flex h-12 items-center justify-center gap-2 rounded-xl border border-gray-200 bg-gray-50 px-3 text-sm font-medium text-gray-700 transition hover:bg-gray-100"
              >
                <span>👥</span>
                <span>Contacts</span>
              </button>

              {/* Evidence */}
              <button
                className="flex h-12 items-center justify-center gap-2 rounded-xl border border-gray-200 bg-gray-50 px-3 text-sm font-medium text-gray-700 transition hover:bg-gray-100"
              >
                <span>📷</span>
                <span>Evidence</span>
              </button>

            </div>
          </div>


          {/* Emergency Services */}
          {showEmergencyNumbers && (
            <div className="mb-6 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">

              <div className="mb-3 flex items-center justify-between">
                <h2 className="text-base font-semibold text-gray-800">
                  Emergency Services
                </h2>

                <button
                  onClick={() => setShowEmergencyNumbers(false)}
                  className="rounded-lg px-2 py-1 text-sm text-gray-400 hover:bg-gray-100 hover:text-gray-700"
                >
                  ✕
                </button>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">

                {emergencyNumbers.map((service) => (
                  <button
                    key={service.number}
                    onClick={() => {
                      window.location.href = `tel:${service.number}`;
                    }}
                    className="flex h-16 items-center justify-between rounded-xl border border-gray-200 bg-gray-50 px-4 text-left transition hover:border-red-200 hover:bg-red-50"
                  >
                    <div className="min-w-0">
                      <p className="truncate text-sm font-semibold text-gray-800">
                        {service.name}
                      </p>

                      <p className="mt-0.5 text-xs text-gray-500">
                        {service.number}
                      </p>
                    </div>

                    <span className="ml-2 text-lg">
                      📞
                    </span>
                  </button>
                ))}

              </div>
            </div>
          )}

          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">

            {/* MAP */}
            <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">

              <h2 className="mb-4 text-lg font-semibold text-gray-800">
                SOS Location
              </h2>

              <div className="h-[400px] overflow-hidden rounded-xl">
                <Map currentSos={currentSos} />
              </div>

            </div>

            {/* STATUS */}
            <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">

              <h2 className="mb-4 text-lg font-semibold text-gray-800">
                Current Status
              </h2>

              <User_Status_Card
                currentSos={currentSos}
                loading={loading}
              />

            </div>

            {/* TRUSTED CONTACTS */}
            <div
              id="trusted-contacts"
              className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"
            >

              <h2 className="mb-4 text-lg font-semibold text-gray-800">
                Trusted Contacts
              </h2>

              <Trusted contacts = {contacts} />

            </div>

            {/* EVIDENCE */}
            <div
              id="evidence"
              className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"
            >

              <h2 className="mb-4 text-lg font-semibold text-gray-800">
                Evidence
              </h2>

             <EvidenceUpload
                currentSos={currentSos}
             />

            </div>

          </div>

        </div>
      </main>
    </div>
  );
}

export default SOS_Centre;