import React from "react";
import { Bot, Share2 } from "lucide-react";

import { useLocation } from "../../../Context/LocationContext";
import { useJourneyContext } from "../../../Context/JourneyContext";
import { useTrustedContacts } from "../../../Context/TrustedContactContext";

function ChatHeader() {
  const { journey } = useJourneyContext();
  const { monitoring, isSharing } = useLocation();
  const { contacts } = useTrustedContacts();

  // Replace with your SOS Context later
  const sosActive = false;

  const handleShare = () => {
    if (journey?.status === "active") {
      console.log("Share Live Journey");
    } else {
      console.log("Share Current Location");
    }
  };

  const statusChips = [
    {
      label: monitoring?.safe ? "🟢 Area Safe" : "🔴 Threat Detected",
      className: monitoring?.safe
        ? "border-green-200 bg-green-50 text-green-700"
        : "border-red-200 bg-red-50 text-red-700",
    },
    {
      label: isSharing ? "📍 Live GPS" : "📍 GPS Off",
      className: isSharing
        ? "border-blue-200 bg-blue-50 text-blue-700"
        : "border-gray-200 bg-gray-100 text-gray-600",
    },
    {
      label: sosActive ? "🚨 SOS Active" : "🚨 SOS Ready",
      className: sosActive
        ? "border-red-300 bg-red-100 text-red-700"
        : "border-red-200 bg-red-50 text-red-700",
    },
    {
      label: `👥 ${contacts?.length || 0} Trusted Contacts`,
      className:
        "border-purple-200 bg-purple-50 text-purple-700",
    },
    {
      label: journey?.vehicleVerified
        ? "🚖 Cab Verified"
        : "🚖 Verification Pending",
      className: journey?.vehicleVerified
        ? "border-indigo-200 bg-indigo-50 text-indigo-700"
        : "border-yellow-200 bg-yellow-50 text-yellow-700",
    },
  ];

  return (
    <header className="sticky top-0 z-20 border-b border-gray-200 bg-white px-8 py-4 shadow-sm">

      <div className="flex items-center justify-between">

        {/* Left */}
        <div className="flex items-center gap-4">

          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100">
            <Bot size={26} className="text-indigo-600" />
          </div>

          <div>
            <h1 className="text-2xl font-bold text-gray-800">
              SafeHer AI Assistant
            </h1>

            <p className="mt-1 text-sm text-gray-500">
              {journey?.status === "active"
                ? `Journey to ${
                    journey.destination?.name || "Destination"
                  }`
                : "Your personal AI safety companion"}
            </p>
          </div>

        </div>

        {/* Right */}
        <button
          onClick={handleShare}
          className="flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-5 py-3 text-sm font-medium text-gray-700 transition hover:border-indigo-500 hover:bg-indigo-50 hover:text-indigo-600"
        >
          <Share2 size={18} />

          {journey?.status === "active"
            ? "Share Live Journey"
            : "Share Location"}
        </button>

      </div>

      {/* Status Chips */}

      <div className="mt-5 flex flex-wrap gap-3">

        {statusChips.map((chip, index) => (
          <span
            key={index}
            className={`rounded-full border px-4 py-2 text-xs font-semibold ${chip.className}`}
          >
            {chip.label}
          </span>
        ))}

      </div>

    </header>
  );
}

export default ChatHeader;