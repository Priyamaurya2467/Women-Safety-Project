import React from "react";
import {
  ShieldCheck,
  Car,
  MapPinned,
  Siren,
  Users,
  Route,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

import { useJourneyContext } from "../../../Context/JourneyContext";
import { useLocation } from "../../../Context/LocationContext";
import { useTrustedContacts } from "../../../Context/TrustedContactContext";

function WelcomeCard() {
  const { journey } = useJourneyContext();
  const { isSharing, monitoring } = useLocation();
  const { contacts } = useTrustedContacts();

  const features = [
    {
      icon: <Car className="text-indigo-600" />,
      title: "Cab Verification",
      description: journey?.vehicleVerified
        ? "Vehicle successfully verified."
        : "Verify your cab before starting.",
      color: "hover:border-indigo-300 hover:bg-indigo-50",
    },
    {
      icon: <MapPinned className="text-green-600" />,
      title: "Live Tracking",
      description: isSharing
        ? "Live GPS is currently active."
        : "Location sharing is currently disabled.",
      color: "hover:border-green-300 hover:bg-green-50",
    },
    {
      icon: <Siren className="text-red-600" />,
      title: "Emergency SOS",
      description: "Emergency assistance is always ready.",
      color: "hover:border-red-300 hover:bg-red-50",
    },
    {
      icon: <Users className="text-purple-600" />,
      title: "Trusted Contacts",
      description: `${contacts.length} trusted contact${
        contacts.length !== 1 ? "s" : ""
      } available.`,
      color: "hover:border-purple-300 hover:bg-purple-50",
    },
    {
      icon: <Route className="text-cyan-600" />,
      title: "Route Analysis",
      description:
        journey?.destination?.name ||
        "Analyze your safest route before travelling.",
      color: "hover:border-cyan-300 hover:bg-cyan-50",
    },
    {
      icon: <ShieldCheck className="text-yellow-600" />,
      title: "AI Monitoring",
      description: monitoring?.safe
        ? "Your area is currently safe."
        : monitoring?.alert || "Monitoring your journey.",
      color: "hover:border-yellow-300 hover:bg-yellow-50",
    },
  ];

  return (
    <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">

      {/* Header */}

      <div className="flex items-center gap-4">

        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-indigo-100">
          <ShieldCheck size={28} className="text-indigo-600" />
        </div>

        <div>

          <h2 className="text-2xl font-bold text-gray-800">
            {journey?.status === "active"
              ? "Journey in Progress"
              : "Welcome to SafeHer AI"}
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            {journey?.status === "active"
              ? `Heading towards ${
                  journey.destination?.name || "your destination"
                }`
              : "Your intelligent AI companion for safer travel."}
          </p>

        </div>

      </div>

      {/* Current Status */}

      <div className="mt-6 flex flex-wrap gap-3">

        <span className="rounded-full border border-green-200 bg-green-50 px-4 py-2 text-sm text-green-700">
          {monitoring?.safe ? "✅ Area Safe" : "⚠ Threat Detected"}
        </span>

        <span className="rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm text-blue-700">
          {isSharing ? "📍 Live GPS Active" : "📍 GPS Off"}
        </span>

        <span className="rounded-full border border-purple-200 bg-purple-50 px-4 py-2 text-sm text-purple-700">
          👥 {contacts.length} Trusted Contacts
        </span>

      </div>

      {/* Features */}

      <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">

        {features.map((feature) => (
          <div
            key={feature.title}
            className={`rounded-2xl border border-gray-200 bg-gray-50 p-5 transition ${feature.color}`}
          >
            {feature.icon}

            <h3 className="mt-4 font-semibold text-gray-800">
              {feature.title}
            </h3>

            <p className="mt-2 text-sm text-gray-500">
              {feature.description}
            </p>
          </div>
        ))}

      </div>

      {/* Journey Summary */}

      {journey?.status === "active" && (
        <div className="mt-8 rounded-2xl border border-green-200 bg-green-50 p-5">

          <div className="flex items-center gap-3">

            <CheckCircle className="text-green-600" />

            <h3 className="font-semibold text-green-700">
              Active Journey
            </h3>

          </div>

          <div className="mt-4 grid gap-4 md:grid-cols-3">

            <div>
              <p className="text-xs text-gray-500">Destination</p>
              <p className="font-semibold">
                {journey.destination?.name || "--"}
              </p>
            </div>

            <div>
              <p className="text-xs text-gray-500">ETA</p>
              <p className="font-semibold">
                {journey.estimatedTime || "--"} mins
              </p>
            </div>

            <div>
              <p className="text-xs text-gray-500">Distance</p>
              <p className="font-semibold">
                {journey.distance || "--"} km
              </p>
            </div>

          </div>

        </div>
      )}

      {/* Buttons */}

      <div className="mt-8 flex flex-wrap gap-4">

        <button className="flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white transition hover:bg-indigo-700">

          {journey?.status === "active"
            ? "Continue Journey"
            : "Start Chat"}

          <ArrowRight size={18} />

        </button>

        <button className="rounded-xl border border-gray-200 bg-white px-6 py-3 font-semibold text-gray-700 transition hover:bg-gray-100">
          Learn More
        </button>

      </div>

    </div>
  );
}

export default WelcomeCard;