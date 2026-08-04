import React from "react";
import {
  ShieldAlert,
  Phone,
  MapPinned,
  Bell,
  CheckCircle,
} from "lucide-react";

function EmergencyCard({
  sosActive = false,
  onTriggerSOS,
  contacts = [],
  currentLocation,
}) {
  return (
    <div
      className={`rounded-3xl border p-6 shadow-sm transition-all ${
        sosActive
          ? "border-red-300 bg-red-50"
          : "border-gray-200 bg-white"
      }`}
    >
      {/* Header */}
      <div className="flex items-center justify-between">

        <div className="flex items-center gap-3">

          <div
            className={`rounded-full p-3 ${
              sosActive
                ? "bg-red-100"
                : "bg-red-50"
            }`}
          >
            <ShieldAlert
              className={
                sosActive
                  ? "text-red-600"
                  : "text-red-500"
              }
              size={24}
            />
          </div>

          <div>

            <h2 className="text-xl font-bold text-gray-800">
              Emergency Assistance
            </h2>

            <p className="text-sm text-gray-500">
              Emergency response and SOS monitoring
            </p>

          </div>

        </div>

        {sosActive ? (
          <span className="rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-red-700">
            🚨 SOS ACTIVE
          </span>
        ) : (
          <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
            Ready
          </span>
        )}
      </div>

      {/* Status */}

      <div className="mt-8 grid gap-4 md:grid-cols-3">

        <div className="rounded-2xl border border-gray-200 bg-gray-50 p-4">

          <Bell className="text-indigo-600" />

          <h3 className="mt-3 font-semibold">
            Emergency Status
          </h3>

          <p className="mt-2 text-sm text-gray-600">
            {sosActive
              ? "Emergency alert has been activated."
              : "No emergency detected."}
          </p>

        </div>

        <div className="rounded-2xl border border-gray-200 bg-gray-50 p-4">

          <Phone className="text-green-600" />

          <h3 className="mt-3 font-semibold">
            Trusted Contacts
          </h3>

          <p className="mt-2 text-sm text-gray-600">
            {contacts.length} Contact(s)
          </p>

        </div>

        <div className="rounded-2xl border border-gray-200 bg-gray-50 p-4">

          <MapPinned className="text-blue-600" />

          <h3 className="mt-3 font-semibold">
            Current Location
          </h3>

          <p className="mt-2 text-sm text-gray-600">
            {currentLocation
              ? "Live GPS Available"
              : "Location Unavailable"}
          </p>

        </div>

      </div>

      {/* Checklist */}

      <div className="mt-8 rounded-2xl border border-gray-200 bg-gray-50 p-5">

        <h3 className="font-semibold text-gray-800">
          Emergency Checklist
        </h3>

        <div className="mt-4 space-y-3">

          <div className="flex items-center gap-3">
            <CheckCircle
              size={18}
              className="text-green-600"
            />
            <p className="text-sm text-gray-600">
              Share live location with trusted contacts.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <CheckCircle
              size={18}
              className="text-green-600"
            />
            <p className="text-sm text-gray-600">
              Keep your phone unlocked and reachable.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <CheckCircle
              size={18}
              className="text-green-600"
            />
            <p className="text-sm text-gray-600">
              Call emergency services if necessary.
            </p>
          </div>

        </div>

      </div>

      {/* SOS Button */}

      <button
        onClick={onTriggerSOS}
        className={`mt-8 w-full rounded-2xl py-4 text-lg font-semibold text-white transition ${
          sosActive
            ? "bg-gray-700 hover:bg-gray-800"
            : "bg-red-600 hover:bg-red-700"
        }`}
      >
        {sosActive
          ? "Stop Emergency Mode"
          : "🚨 Trigger SOS"}
      </button>
    </div>
  );
}

export default EmergencyCard;