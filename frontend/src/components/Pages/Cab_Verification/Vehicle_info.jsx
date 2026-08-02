import React from "react";

function Vehicle_info({ vehicle }) {
  if (!vehicle) return null;

  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">

      <div className="flex flex-col gap-6 lg:flex-row">

        {/* Vehicle Image */}
        <div className="lg:w-1/2">
          <div className="relative h-64 overflow-hidden rounded-xl bg-gray-100">

            <img
              src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1000"
              alt={vehicle.model}
              className="h-full w-full object-cover"
            />

            <div className="absolute top-4 right-4 rounded-lg bg-white/90 px-3 py-2 shadow">
              <span className="text-sm font-semibold text-blue-600">
                {vehicle.cabCompany}
              </span>
            </div>

          </div>
        </div>

        {/* Vehicle Details */}
        <div className="lg:w-1/2 space-y-5">

          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              {vehicle.model}
            </h2>

            <p className="text-gray-500">
              {vehicle.vehicleType}
            </p>
          </div>

          {/* Information Grid */}
          <div className="grid grid-cols-2 gap-4">

            <div className="rounded-xl bg-gray-50 p-4">
              <p className="text-xs text-gray-500">Plate Number</p>
              <p className="font-bold text-blue-600">
                {vehicle.plateNumber}
              </p>
            </div>

            <div className="rounded-xl bg-gray-50 p-4">
              <p className="text-xs text-gray-500">Color</p>
              <p className="font-semibold">
                {vehicle.color}
              </p>
            </div>

            <div className="rounded-xl bg-gray-50 p-4">
              <p className="text-xs text-gray-500">Registration State</p>
              <p className="font-semibold">
                {vehicle.registrationState}
              </p>
            </div>

            <div className="rounded-xl bg-gray-50 p-4">
              <p className="text-xs text-gray-500">Cab Company</p>
              <p className="font-semibold">
                {vehicle.cabCompany}
              </p>
            </div>

          </div>

          {/* Verification Status */}
          <div className="grid grid-cols-2 gap-4">

            <div
              className={`rounded-xl p-4 ${
                vehicle.rcVerified
                  ? "bg-green-50 border border-green-200"
                  : "bg-red-50 border border-red-200"
              }`}
            >
              <p className="text-xs text-gray-500">RC Status</p>
              <p className="font-semibold">
                {vehicle.rcVerified ? "✅ Verified" : "❌ Not Verified"}
              </p>
            </div>

            <div
              className={`rounded-xl p-4 ${
                vehicle.insuranceValid
                  ? "bg-green-50 border border-green-200"
                  : "bg-red-50 border border-red-200"
              }`}
            >
              <p className="text-xs text-gray-500">Insurance</p>
              <p className="font-semibold">
                {vehicle.insuranceValid ? "✅ Active" : "❌ Expired"}
              </p>
            </div>

          </div>

          {/* Emergency Report */}
          <div
            className={`rounded-xl p-4 ${
              vehicle.emergencyReported
                ? "bg-red-50 border border-red-200"
                : "bg-green-50 border border-green-200"
            }`}
          >
            <p className="text-xs text-gray-500">Emergency Reports</p>

            <p className="font-semibold">
              {vehicle.emergencyReported
                ? "⚠ Previous incident reported"
                : "✅ No incidents reported"}
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Vehicle_info;