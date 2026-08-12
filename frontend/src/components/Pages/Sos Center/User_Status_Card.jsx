import React from "react";

function User_Status_Card({ currentSOS, loading }) {
  if (loading) {
    return (
      <div className="rounded-2xl bg-white p-5 shadow-sm">
        <p className="text-sm text-gray-500">
          Loading SOS status...
        </p>
      </div>
    );
  }

  const isActive =
    currentSOS &&
    currentSOS.status !== "CANCELLED" &&
    currentSOS.status !== "RESOLVED";

  return (
    <div className="rounded-2xl bg-white p-5 shadow-sm">

      <div className="flex items-center justify-between">
        <h2 className="font-semibold text-gray-800">
          SOS Status
        </h2>

        <span
          className={`rounded-full px-3 py-1 text-xs font-medium ${
            isActive
              ? "bg-red-100 text-red-600"
              : "bg-green-100 text-green-600"
          }`}
        >
          {isActive ? "ACTIVE" : "SAFE"}
        </span>
      </div>

      {isActive ? (
        <div className="mt-4 space-y-3">

          <div>
            <p className="text-xs text-gray-500">
              Emergency Type
            </p>

            <p className="font-medium text-gray-800">
              {currentSOS.emergencyType || "Emergency"}
            </p>
          </div>

          <div>
            <p className="text-xs text-gray-500">
              Location
            </p>

            <p className="text-sm text-gray-700">
              {currentSOS.address ||
                `${currentSOS.latitude}, ${currentSOS.longitude}`}
            </p>
          </div>

          <div>
            <p className="text-xs text-gray-500">
              Triggered
            </p>

            <p className="text-sm text-gray-700">
              {new Date(
                currentSOS.createdAt
              ).toLocaleString()}
            </p>
          </div>

        </div>
      ) : (
        <p className="mt-4 text-sm text-gray-500">
          No active SOS. You are currently safe.
        </p>
      )}
    </div>
  );
}

export default User_Status_Card;