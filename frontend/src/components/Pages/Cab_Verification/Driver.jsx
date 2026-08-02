import React from "react";
import { Phone, UserCheck, ShieldCheck, Building2 } from "lucide-react";

function Driver({ vehicle }) {
  if (!vehicle) return null;

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">

      {/* Driver Image */}
      <div className="flex flex-col items-center">

        <div className="relative">
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt={vehicle.driverName}
            className="h-32 w-32 rounded-full object-cover border-4 border-gray-100"
          />

          <div
            className={`absolute bottom-1 right-1 rounded-full p-1 ${
              vehicle.verified ? "bg-green-500" : "bg-red-500"
            }`}
          >
            <UserCheck className="text-white" size={18} />
          </div>
        </div>

        <h2 className="mt-4 text-2xl font-bold text-gray-900">
          {vehicle.driverName}
        </h2>

        <p className="text-sm text-gray-500">
          Professional Driver
        </p>
      </div>

      {/* Driver Details */}
      <div className="mt-8 space-y-4">

        <div className="flex items-center justify-between border-b pb-3">
          <span className="flex items-center gap-2 text-gray-500">
            <Phone size={16} />
            Phone
          </span>

          <span className="font-semibold">
            {vehicle.driverPhone}
          </span>
        </div>

        <div className="flex items-center justify-between border-b pb-3">
          <span className="flex items-center gap-2 text-gray-500">
            <Building2 size={16} />
            Cab Company
          </span>

          <span className="font-semibold">
            {vehicle.cabCompany}
          </span>
        </div>

        <div className="flex items-center justify-between border-b pb-3">
          <span className="flex items-center gap-2 text-gray-500">
            <ShieldCheck size={16} />
            Driver Verification
          </span>

          <span
            className={`rounded-lg px-3 py-1 text-xs font-bold ${
              vehicle.verified
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {vehicle.verified ? "Verified" : "Not Verified"}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-gray-500">
            Emergency History
          </span>

          <span
            className={`font-semibold ${
              vehicle.emergencyReported
                ? "text-red-600"
                : "text-green-600"
            }`}
          >
            {vehicle.emergencyReported
              ? "Reported"
              : "No Reports"}
          </span>
        </div>

      </div>
    </div>
  );
}

export default Driver;