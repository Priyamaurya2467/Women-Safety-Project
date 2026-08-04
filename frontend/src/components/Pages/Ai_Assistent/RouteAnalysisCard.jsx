import React from "react";
import {
  Route,
  ShieldCheck,
  Clock,
  MapPin,
  Navigation,
  AlertTriangle,
} from "lucide-react";

import { useJourneyContext } from "../../../Context/JourneyContext";
import { useLocation } from "../../../Context/LocationContext";

function RouteAnalysisCard() {
  const { journey } = useJourneyContext();
  const { monitoring } = useLocation();

  if (!journey) return null;

  return (
    <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">

      {/* Header */}
      <div className="flex items-center justify-between">

        <div className="flex items-center gap-3">
          <div className="rounded-xl bg-blue-100 p-3">
            <Route className="text-blue-600" size={24} />
          </div>

          <div>
            <h2 className="text-xl font-bold text-gray-800">
              Route Analysis
            </h2>

            <p className="text-sm text-gray-500">
              AI-powered route safety report
            </p>
          </div>
        </div>

        <span
          className={`rounded-full px-4 py-2 text-sm font-semibold
          ${
            monitoring?.safe
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {monitoring?.safe ? "Safe Route" : "Risk Detected"}
        </span>

      </div>

      {/* Stats */}
      <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">

        <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
          <Clock className="text-indigo-600" size={22} />

          <p className="mt-3 text-xs uppercase tracking-wide text-gray-500">
            Estimated Time
          </p>

          <h3 className="mt-2 text-xl font-bold text-gray-800">
            {journey.estimatedTime || "--"} mins
          </h3>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
          <MapPin className="text-green-600" size={22} />

          <p className="mt-3 text-xs uppercase tracking-wide text-gray-500">
            Distance
          </p>

          <h3 className="mt-2 text-xl font-bold text-gray-800">
            {journey.distance || "--"} km
          </h3>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
          <Navigation className="text-blue-600" size={22} />

          <p className="mt-3 text-xs uppercase tracking-wide text-gray-500">
            Destination
          </p>

          <h3 className="mt-2 text-lg font-semibold text-gray-800">
            {journey.destination?.name || "Unknown"}
          </h3>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5">
          <ShieldCheck className="text-green-600" size={22} />

          <p className="mt-3 text-xs uppercase tracking-wide text-gray-500">
            AI Safety Score
          </p>

          <h3 className="mt-2 text-xl font-bold text-green-600">
            {monitoring?.score || 100}%
          </h3>
        </div>

      </div>

      {/* AI Analysis */}
      <div
        className={`mt-8 rounded-2xl border p-5
        ${
          monitoring?.safe
            ? "border-green-200 bg-green-50"
            : "border-red-200 bg-red-50"
        }`}
      >
        <div className="flex items-center gap-3">

          {monitoring?.safe ? (
            <ShieldCheck className="text-green-600" size={22} />
          ) : (
            <AlertTriangle className="text-red-600" size={22} />
          )}

          <h3
            className={`text-lg font-semibold
            ${
              monitoring?.safe
                ? "text-green-700"
                : "text-red-700"
            }`}
          >
            {monitoring?.safe
              ? "Route is Safe"
              : "Potential Risk Detected"}
          </h3>

        </div>

        <p className="mt-4 text-gray-600">
          {monitoring?.safe
            ? "AI analyzed traffic conditions, lighting, road safety, and nearby activity. Your selected route is currently considered safe."
            : monitoring?.alert ||
              "The AI detected potential risks on this route. Consider choosing an alternate path or sharing your live location with trusted contacts."}
        </p>

      </div>

    </div>
  );
}

export default RouteAnalysisCard;