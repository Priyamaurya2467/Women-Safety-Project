import React from "react";
import {
  Car,
  MapPin,
  Clock,
  Route,
  ShieldCheck,
  Navigation,
} from "lucide-react";

import { useJourneyContext } from "../../../Context/JourneyContext";
import { useLocation } from "../../../Context/LocationContext";

function JourneyCard() {
  const { journey } = useJourneyContext();
  const { monitoring } = useLocation();

  if (!journey) return null;

  return (
    <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">

      {/* Header */}

      <div className="flex items-center justify-between">

        <div className="flex items-center gap-3">

          <div className="rounded-xl bg-indigo-100 p-3">
            <Car className="text-indigo-600" size={24} />
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-800">
              Current Journey
            </h2>

            <p className="text-sm text-gray-500">
              Live journey monitoring
            </p>
          </div>

        </div>

        <span
          className={`rounded-full px-4 py-2 text-sm font-semibold
          ${
            journey.status === "active"
              ? "bg-green-100 text-green-700"
              : "bg-gray-100 text-gray-700"
          }`}
        >
          {journey.status || "Inactive"}
        </span>

      </div>

      {/* Journey Info */}

      <div className="mt-8 grid gap-5 md:grid-cols-2">

        <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5">

          <div className="flex items-center gap-2">
            <MapPin className="text-blue-600" size={20} />
            <h3 className="font-semibold">Destination</h3>
          </div>

          <p className="mt-4 text-lg font-semibold text-gray-800">
            {journey.destination?.name || "Not Selected"}
          </p>

        </div>

        <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5">

          <div className="flex items-center gap-2">
            <Clock className="text-green-600" size={20} />
            <h3 className="font-semibold">ETA</h3>
          </div>

          <p className="mt-4 text-lg font-semibold text-gray-800">
            {journey.remainingTime ||
              journey.estimatedTime ||
              "--"}{" "}
            mins
          </p>

        </div>

        <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5">

          <div className="flex items-center gap-2">
            <Route className="text-purple-600" size={20} />
            <h3 className="font-semibold">Distance</h3>
          </div>

          <p className="mt-4 text-lg font-semibold text-gray-800">
            {journey.remainingDistance ||
              journey.distance ||
              "--"}{" "}
            km
          </p>

        </div>

        <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5">

          <div className="flex items-center gap-2">
            <Navigation className="text-indigo-600" size={20} />
            <h3 className="font-semibold">Tracking</h3>
          </div>

          <p className="mt-4 text-lg font-semibold text-gray-800">
            {journey.trackingToken
              ? "Enabled"
              : "Disabled"}
          </p>

        </div>

      </div>

      {/* Safety */}

      <div
        className={`mt-8 rounded-2xl border p-5
        ${
          monitoring?.safe
            ? "border-green-200 bg-green-50"
            : "border-red-200 bg-red-50"
        }`}
      >
        <div className="flex items-center gap-3">

          <ShieldCheck
            className={
              monitoring?.safe
                ? "text-green-600"
                : "text-red-600"
            }
            size={22}
          />

          <h3
            className={`text-lg font-semibold
            ${
              monitoring?.safe
                ? "text-green-700"
                : "text-red-700"
            }`}
          >
            {monitoring?.safe
              ? "Journey is Safe"
              : "Potential Risk Detected"}
          </h3>

        </div>

        <p className="mt-3 text-sm text-gray-600">
          {monitoring?.safe
            ? "AI monitoring indicates your journey is currently safe."
            : monitoring?.alert ||
              "Stay alert and consider sharing your live location."}
        </p>

      </div>

    </div>
  );
}

export default JourneyCard;