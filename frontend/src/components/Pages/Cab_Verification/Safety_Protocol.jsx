import { CheckCircle, Shield, AlertTriangle } from "lucide-react";
import React from "react";

function Safety_Protocol({ vehicle }) {
  if (!vehicle) return null;

  const protocols = [
    "Ask the driver to confirm your name before entering the vehicle.",
    "Ensure the license plate matches the one displayed in the app.",
    "Share your live location with a trusted contact before starting the journey.",
    "Avoid boarding if the driver or vehicle details do not match the verified information."
  ];

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">

      {/* Header */}
      <div className="flex items-center gap-2 mb-5">
        <Shield className="text-blue-600" size={22} />
        <h3 className="text-lg font-bold text-gray-900">
          Safety Protocol Tips
        </h3>
      </div>

      {/* Default Tips */}
      <div className="space-y-3">
        {protocols.map((protocol, index) => (
          <div key={index} className="flex items-start gap-3">
            <CheckCircle
              className="text-green-600 mt-1 flex-shrink-0"
              size={18}
            />
            <p className="text-gray-700">{protocol}</p>
          </div>
        ))}
      </div>

      {/* Dynamic Warnings */}
      <div className="mt-6 space-y-3">

        {!vehicle.rcVerified && (
          <div className="flex items-start gap-3 rounded-lg bg-red-50 p-3 border border-red-200">
            <AlertTriangle className="text-red-600 mt-1" size={18} />
            <p className="text-red-700">
              Vehicle RC could not be verified. Avoid starting the journey until verified.
            </p>
          </div>
        )}

        {!vehicle.insuranceValid && (
          <div className="flex items-start gap-3 rounded-lg bg-yellow-50 p-3 border border-yellow-200">
            <AlertTriangle className="text-yellow-600 mt-1" size={18} />
            <p className="text-yellow-700">
              Vehicle insurance appears to be expired or unavailable.
            </p>
          </div>
        )}

        {vehicle.emergencyReported && (
          <div className="flex items-start gap-3 rounded-lg bg-red-50 p-3 border border-red-200">
            <AlertTriangle className="text-red-600 mt-1" size={18} />
            <p className="text-red-700">
              Previous safety incidents have been reported for this vehicle.
              Exercise caution before proceeding.
            </p>
          </div>
        )}

      </div>
    </div>
  );
}

export default Safety_Protocol;