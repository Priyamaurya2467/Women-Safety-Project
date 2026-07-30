import React from "react";
import { ShieldCheck, MapPinned, Clock3, Route } from "lucide-react";

function SafetyStatus({
  safetyScore,
  status,
  distanceLeft,
  eta,
}) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6">

      <h2 className="text-2xl font-bold mb-6">
        Journey Status
      </h2>

      <div className="space-y-5">

        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <ShieldCheck className="text-green-600" />
            <span>Safety Score</span>
          </div>

          <span className="font-bold text-green-600">
            {safetyScore}%
          </span>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Route className="text-indigo-600" />
            <span>Status</span>
          </div>

          <span>{status}</span>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <MapPinned className="text-red-500" />
            <span>Distance Left</span>
          </div>

          <span>{distanceLeft} km</span>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Clock3 className="text-orange-500" />
            <span>ETA</span>
          </div>

          <span>{eta} min</span>
        </div>

      </div>

    </div>
  );
}

export default SafetyStatus;