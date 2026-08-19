import React, { useEffect, useState } from "react";
import {
  ShieldCheck,
  Radio,
  Bell,
  MapPin,
  Loader2,
  AlertCircle,
} from "lucide-react";
import axios from "axios";

import Sidebar from "./Elements/Sidebar";
import Status_card from "./Pages/Safe Journey/Status_card";
import Information from "./Pages/Safe Journey/Information";
import Insights_Area from "./Pages/Safe Journey/Insights_Area";
import Recents from "./Pages/Safe Journey/Recents";
import { useNavigate } from "react-router-dom";
const API_URL = "https://safeher-backend-0hzz.onrender.com/api";

function Safe_Journey() {
  const [journey, setJourney] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const authConfig = {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  };

  const fetchJourney = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await axios.get(
        `${API_URL}/journey/active`,
        authConfig
      );

      setJourney(response.data?.journey || response.data);
    } catch (err) {
      console.error("Journey fetch error:", err);

      if (err.response?.status === 404) {
        setJourney(null);
      } else {
        setError(
          err.response?.data?.message ||
            "Unable to load journey information."
        );
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJourney();
  }, []);

  useEffect(() => {
    if (!journey) return;

    const interval = setInterval(() => {
      fetchJourney();
    }, 10000);

    return () => clearInterval(interval);
  }, [journey]);

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50">
        <Sidebar />

        <main className="min-h-screen pt-20 md:ml-64 flex items-center justify-center">
          <div className="flex flex-col items-center gap-3">
            <Loader2
              size={32}
              className="animate-spin text-emerald-600"
            />

            <p className="text-sm text-gray-500">
              Loading your journey...
            </p>
          </div>
        </main>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-slate-50">
        <Sidebar />

        <main className="min-h-screen pt-20 md:ml-64 px-6 flex items-center justify-center">
          <div className="bg-white border border-red-100 rounded-2xl p-8 text-center max-w-md shadow-sm">
            <AlertCircle
              size={40}
              className="mx-auto text-red-500 mb-4"
            />

            <h2 className="text-lg font-semibold text-gray-800">
              Unable to load journey
            </h2>

            <p className="text-sm text-gray-500 mt-2">
              {error}
            </p>

            <button
              onClick={fetchJourney}
              className="mt-5 px-5 py-2.5 rounded-lg bg-gray-900 text-white text-sm hover:bg-gray-800 transition"
            >
              Try Again
            </button>
          </div>
        </main>
      </div>
    );
  }

  if (!journey) {
    return (
      <div className="min-h-screen bg-slate-50">
        <Sidebar />

        <main className="min-h-screen pt-20 md:ml-64 px-4 sm:px-6 lg:px-8 pb-10">
          <div className="max-w-7xl mx-auto">

            <div className="mb-8">
              <div className="flex items-center gap-2 mb-2">
                <ShieldCheck
                  size={22}
                  className="text-emerald-600"
                />

                <span className="text-sm font-medium text-emerald-600">
                  SafeHer Protection
                </span>
              </div>

              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                Safe Journey
              </h1>

              <p className="text-gray-500 mt-1">
                Monitor your trip and stay connected with your
                trusted contacts.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-10 text-center shadow-sm">

              <div className="w-16 h-16 mx-auto rounded-2xl bg-gray-100 flex items-center justify-center mb-5">
                <MapPin
                  size={28}
                  className="text-gray-400"
                />
              </div>

              <h2 className="text-xl font-semibold text-gray-800">
                No Active Journey
              </h2>

              <p className="text-sm text-gray-500 mt-2 max-w-md mx-auto">
                You don't have an active journey right now.
                Start a Safe Journey to enable real-time
                monitoring and AI-powered safety analysis.
              </p>

              <button
                onClick={() => navigate("/start")}
                className="mt-6 px-6 py-3 bg-emerald-600 text-white rounded-xl text-sm font-medium hover:bg-emerald-700 transition"
              >
                Start Safe Journey
              </button>

            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 text-gray-800">

      <Sidebar />

      <main className="min-h-screen pt-20 md:ml-64 px-4 sm:px-6 lg:px-8 pb-10">

        <div className="mx-auto max-w-7xl">

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-7">

            <div>

              <div className="flex items-center gap-2 mb-2">
                <ShieldCheck
                  size={22}
                  className="text-emerald-600"
                />

                <span className="text-sm font-medium text-emerald-600">
                  SafeHer Protection
                </span>
              </div>

              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                Safe Journey
              </h1>

              <p className="text-sm md:text-base text-gray-500 mt-1">
                Real-time monitoring powered by SafeHer AI
              </p>

            </div>

            {/* DYNAMIC MONITORING STATUS */}

            <div className="flex items-center gap-3 bg-white border border-gray-200 rounded-xl px-4 py-3 shadow-sm">

              <div className="relative">

                <span
                  className={`block w-3 h-3 rounded-full ${
                    journey.status === "active"
                      ? "bg-emerald-500"
                      : "bg-gray-400"
                  }`}
                />

                {journey.status === "active" && (
                  <span className="absolute inset-0 w-3 h-3 rounded-full bg-emerald-400 animate-ping opacity-50" />
                )}

              </div>

              <div>

                <p className="text-sm font-semibold text-gray-800">
                  {journey.status === "active"
                    ? "Monitoring Active"
                    : "Monitoring Paused"}
                </p>

                <p className="text-xs text-gray-500">
                  {journey.status === "active"
                    ? "Live protection enabled"
                    : "Monitoring unavailable"}
                </p>

              </div>

              <Radio
                size={18}
                className={
                  journey.status === "active"
                    ? "text-emerald-500 ml-2"
                    : "text-gray-400 ml-2"
                }
              />

            </div>

          </div>


          {/* JOURNEY BANNER */}

          <div className="bg-white border border-gray-200 rounded-2xl p-5 mb-7 shadow-sm">

            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">

              <div className="flex items-start gap-4">

                <div className="w-11 h-11 rounded-xl bg-emerald-50 flex items-center justify-center">

                  <MapPin
                    size={22}
                    className="text-emerald-600"
                  />

                </div>

                <div>

                  <p className="text-xs font-medium text-gray-400 uppercase tracking-wide">
                    Current Journey
                  </p>

                  <h2 className="text-lg font-semibold text-gray-900 mt-1">
                    {journey.startLocation?.address ||
                      journey.startLocation?.name ||
                      "Current location"}
                  </h2>

                  <p className="text-sm text-gray-500 mt-1">
                    →{" "}
                    {journey.destination?.address ||
                      journey.destination?.name ||
                      "Destination unavailable"}
                  </p>

                </div>

              </div>


              {/* TRUSTED CONTACT STATUS */}

              <div className="flex items-center gap-3">

                <div className="text-right hidden sm:block">

                  <p className="text-xs text-gray-400">
                    Trusted contacts
                  </p>

                  <p className="text-sm font-semibold text-gray-800">
                    {journey.trustedContactsCount ?? 0} connected
                  </p>

                </div>

                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center">

                  <Bell
                    size={19}
                    className="text-blue-600"
                  />

                </div>

              </div>

            </div>

          </div>


          {/* CONTENT */}

          <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">

            <section className="xl:col-span-8 space-y-6">

              <Status_card
                journey={journey}
                onRefresh={fetchJourney}
              />

              <Information
                journey={journey}
              />

            </section>


            <aside className="xl:col-span-4 space-y-6">

              <Insights_Area
                journey={journey}
              />

              <Recents
                journey={journey}
              />

            </aside>

          </div>

        </div>

      </main>
    </div>
  );
}

export default Safe_Journey;