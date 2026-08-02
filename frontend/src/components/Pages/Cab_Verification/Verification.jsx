import React from "react";

function Verification({ vehicle }) {
  if (!vehicle) return null;

  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">

      {/* Header */}
      <div className="flex items-center justify-between border-b border-gray-200 p-6">
        <h3 className="text-xl font-bold text-gray-900">
          Verification Timeline
        </h3>

        <span className="font-mono text-xs text-gray-500">
          SAFEHER SECURITY
        </span>
      </div>

      {/* Timeline */}
      <div className="space-y-8 p-6">

        {/* Vehicle Verification */}
        <div className="relative flex items-start gap-4">

          <div className="absolute left-4 top-8 bottom-[-32px] w-px bg-gray-300"></div>

          <div
            className={`flex h-8 w-8 items-center justify-center rounded-full ${
              vehicle.verified ? "bg-green-600" : "bg-red-600"
            }`}
          >
            <span className="material-symbols-outlined text-white text-[18px]">
              directions_car
            </span>
          </div>

          <div className="flex-1">
            <div className="flex justify-between">
              <h4 className="font-semibold text-gray-900">
                Vehicle Verification
              </h4>

              <span
                className={`text-xs font-bold ${
                  vehicle.verified ? "text-green-600" : "text-red-600"
                }`}
              >
                {vehicle.verified ? "VERIFIED" : "FAILED"}
              </span>
            </div>

            <p className="mt-1 text-sm text-gray-600">
              Vehicle number <b>{vehicle.plateNumber}</b> found in the SafeHer
              verification database.
            </p>
          </div>
        </div>

        {/* RC Verification */}
        <div className="relative flex items-start gap-4">

          <div className="absolute left-4 top-8 bottom-[-32px] w-px bg-gray-300"></div>

          <div
            className={`flex h-8 w-8 items-center justify-center rounded-full ${
              vehicle.rcVerified ? "bg-green-600" : "bg-red-600"
            }`}
          >
            <span className="material-symbols-outlined text-white text-[18px]">
              badge
            </span>
          </div>

          <div className="flex-1">
            <div className="flex justify-between">
              <h4 className="font-semibold text-gray-900">
                Registration Certificate
              </h4>

              <span
                className={`text-xs font-bold ${
                  vehicle.rcVerified ? "text-green-600" : "text-red-600"
                }`}
              >
                {vehicle.rcVerified ? "VALID" : "INVALID"}
              </span>
            </div>

            <p className="mt-1 text-sm text-gray-600">
              RC document verification completed successfully.
            </p>
          </div>
        </div>

        {/* Insurance */}
        <div className="relative flex items-start gap-4">

          <div className="absolute left-4 top-8 bottom-[-32px] w-px bg-gray-300"></div>

          <div
            className={`flex h-8 w-8 items-center justify-center rounded-full ${
              vehicle.insuranceValid ? "bg-green-600" : "bg-red-600"
            }`}
          >
            <span className="material-symbols-outlined text-white text-[18px]">
              shield
            </span>
          </div>

          <div className="flex-1">
            <div className="flex justify-between">
              <h4 className="font-semibold text-gray-900">
                Insurance Verification
              </h4>

              <span
                className={`text-xs font-bold ${
                  vehicle.insuranceValid ? "text-green-600" : "text-red-600"
                }`}
              >
                {vehicle.insuranceValid ? "ACTIVE" : "EXPIRED"}
              </span>
            </div>

            <p className="mt-1 text-sm text-gray-600">
              Insurance status has been verified for this vehicle.
            </p>
          </div>
        </div>

        {/* Safety History */}
        <div className="flex items-start gap-4">

          <div
            className={`flex h-8 w-8 items-center justify-center rounded-full ${
              vehicle.emergencyReported ? "bg-red-600" : "bg-green-600"
            }`}
          >
            <span className="material-symbols-outlined text-white text-[18px]">
              warning
            </span>
          </div>

          <div className="flex-1">
            <div className="flex justify-between">
              <h4 className="font-semibold text-gray-900">
                Safety History
              </h4>

              <span
                className={`text-xs font-bold ${
                  vehicle.emergencyReported
                    ? "text-red-600"
                    : "text-green-600"
                }`}
              >
                {vehicle.emergencyReported
                  ? "INCIDENT FOUND"
                  : "NO INCIDENTS"}
              </span>
            </div>

            <p className="mt-1 text-sm text-gray-600">
              {vehicle.emergencyReported
                ? vehicle.remarks
                : "No previous emergency reports associated with this vehicle."}
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Verification;