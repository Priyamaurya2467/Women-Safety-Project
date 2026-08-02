import React from "react";

function Verified_card({ vehicle }) {
  if (!vehicle) return null;

  const isVerified = vehicle.verified;

  return (
    <div
      className={`rounded-2xl border shadow-sm p-6 ${
        isVerified
          ? "border-green-200 bg-green-50"
          : "border-red-200 bg-red-50"
      }`}
    >
      <div className="flex items-center justify-between">

        {/* Left */}
        <div className="flex items-center gap-4">

          <div
            className={`h-14 w-14 rounded-full flex items-center justify-center ${
              isVerified ? "bg-green-100" : "bg-red-100"
            }`}
          >
            <span
              className={`material-symbols-outlined text-3xl ${
                isVerified ? "text-green-600" : "text-red-600"
              }`}
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              verified_user
            </span>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              {isVerified
                ? "Vehicle Successfully Verified"
                : "Vehicle Verification Failed"}
            </h2>

            <p className="text-gray-500 mt-1">
              Plate Number: <span className="font-semibold">{vehicle.plateNumber}</span>
            </p>

            <p className="text-gray-500">
              Company: <span className="font-semibold">{vehicle.cabCompany}</span>
            </p>
          </div>
        </div>

        {/* Right Badge */}
        <div
          className={`px-5 py-3 rounded-xl font-bold ${
            isVerified
              ? "bg-green-600 text-white"
              : "bg-red-600 text-white"
          }`}
        >
          {isVerified ? "VERIFIED" : "NOT VERIFIED"}
        </div>

      </div>

      {/* Summary */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">

        <div className="bg-white rounded-xl p-4 shadow-sm">
          <p className="text-xs text-gray-500">RC Status</p>
          <p className="font-semibold">
            {vehicle.rcVerified ? "✅ Verified" : "❌ Invalid"}
          </p>
        </div>

        <div className="bg-white rounded-xl p-4 shadow-sm">
          <p className="text-xs text-gray-500">Insurance</p>
          <p className="font-semibold">
            {vehicle.insuranceValid ? "✅ Active" : "❌ Expired"}
          </p>
        </div>

        <div className="bg-white rounded-xl p-4 shadow-sm">
          <p className="text-xs text-gray-500">Emergency Reports</p>
          <p className="font-semibold">
            {vehicle.emergencyReported ? "⚠️ Yes" : "No Reports"}
          </p>
        </div>

        <div className="bg-white rounded-xl p-4 shadow-sm">
          <p className="text-xs text-gray-500">Vehicle Type</p>
          <p className="font-semibold">{vehicle.vehicleType}</p>
        </div>

      </div>
    </div>
  );
  
}

export default Verified_card;