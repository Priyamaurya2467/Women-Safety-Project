import React from "react";

function JourneyProgress({
  destination,
  currentArea,
  distance,
}) {
  return (

    <div className="bg-white rounded-2xl shadow-md p-6">

      <h2 className="text-xl font-bold mb-5">
        Journey Progress
      </h2>

      <div className="space-y-4">

        <div>

          <p className="text-gray-500">
            Destination
          </p>

          <h3 className="font-semibold">
            {destination?.name || "No destination selected"}
          </h3>

        </div>

        <div>

          <p className="text-gray-500">
            Current Area
          </p>

          <h3 className="font-semibold">
            {currentArea}
          </h3>

        </div>

        <div>

          <p className="text-gray-500">
            Remaining Distance
          </p>

          <h3 className="font-semibold">
            {distance} km
          </h3>

        </div>

      </div>

    </div>

  );
}

export default JourneyProgress;