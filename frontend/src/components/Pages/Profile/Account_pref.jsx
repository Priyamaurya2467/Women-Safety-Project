import React, { useState } from "react";
import { BellRing, MapPinned } from "lucide-react";

function AccountPreferences() {
  const [pushNotification, setPushNotification] = useState(true);
  const [locationSharing, setLocationSharing] = useState(true);

  return (
    <section className="mt-10">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">
        Account Preferences
      </h3>

      <div className="space-y-4">

        {/* Push Notifications */}

        <div className="flex items-center justify-between p-5 bg-white rounded-xl border border-gray-200 shadow-sm">

          <div className="flex items-center gap-5">

            <BellRing size={30} className="text-blue-600" />

            <div>
              <p className="font-semibold text-gray-900">
                Push Notifications
              </p>

              <p className="text-sm text-gray-500">
                Alerts for unusual route activity or safety check-ins.
              </p>
            </div>

          </div>

          <label className="relative inline-flex items-center cursor-pointer">

            <input
              type="checkbox"
              checked={pushNotification}
              onChange={() =>
                setPushNotification(!pushNotification)
              }
              className="sr-only peer"
            />

            <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-blue-600 after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:w-5 after:h-5 after:bg-white after:border after:border-gray-300 after:rounded-full after:transition-all peer-checked:after:translate-x-full">
            </div>

          </label>

        </div>

        {/* Location Sharing */}

        <div className="flex items-center justify-between p-5 bg-white rounded-xl border border-gray-200 shadow-sm">

          <div className="flex items-center gap-5">

            <MapPinned size={30} className="text-blue-600" />

            <div>
              <p className="font-semibold text-gray-900">
                Precise Location Sharing
              </p>

              <p className="text-sm text-gray-500">
                Increases GPS accuracy during active journeys.
              </p>
            </div>

          </div>

          <label className="relative inline-flex items-center cursor-pointer">

            <input
              type="checkbox"
              checked={locationSharing}
              onChange={() =>
                setLocationSharing(!locationSharing)
              }
              className="sr-only peer"
            />

            <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-blue-600 after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:w-5 after:h-5 after:bg-white after:border after:border-gray-300 after:rounded-full after:transition-all peer-checked:after:translate-x-full">
            </div>

          </label>

        </div>

      </div>
    </section>
  );
}

export default AccountPreferences;