import React from "react";

function SafetyStatus({
  safetyScore,
  status,
  distanceLeft,
  eta,
}) {
  return (
    <div className="bg-white rounded-xl shadow p-6 space-y-4">

      <h2 className="text-2xl font-bold">
        Journey Status
      </h2>

      <div className="flex justify-between">
        <span>Safety Score</span>
        <span className="font-bold text-green-600">
          {safetyScore}%
        </span>
      </div>

      <div className="flex justify-between">
        <span>Status</span>
        <span>{status}</span>
      </div>

      <div className="flex justify-between">
        <span>Distance Left</span>
        <span>{distanceLeft} km</span>
      </div>

      <div className="flex justify-between">
        <span>ETA</span>
        <span>{eta} min</span>
      </div>

    </div>
  );
}

export default SafetyStatus;