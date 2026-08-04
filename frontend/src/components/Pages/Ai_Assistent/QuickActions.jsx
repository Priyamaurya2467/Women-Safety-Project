import React from "react";
import {
  ShieldCheck,
  MapPinned,
  Route,
  Siren,
  Car,
  ShieldAlert,
} from "lucide-react";

function QuickActions({
  onVerifyCab,
  onJourney,
  onRoute,
  onEmergency,
  onShareLocation,
  onSafetyTips,
}) {
  const actions = [
    {
      title: "Verify Cab",
      icon: <Car size={18} />,
      color: "hover:bg-indigo-600",
      onClick: onVerifyCab,
    },
    {
      title: "Share Location",
      icon: <MapPinned size={18} />,
      color: "hover:bg-blue-600",
      onClick: onShareLocation,
    },
    {
      title: "Safe Route",
      icon: <Route size={18} />,
      color: "hover:bg-green-600",
      onClick: onRoute,
    },
    {
      title: "Journey",
      icon: <ShieldCheck size={18} />,
      color: "hover:bg-purple-600",
      onClick: onJourney,
    },
    {
      title: "Emergency",
      icon: <Siren size={18} />,
      color: "hover:bg-red-600",
      onClick: onEmergency,
    },
    {
      title: "Safety Tips",
      icon: <ShieldAlert size={18} />,
      color: "hover:bg-yellow-500",
      onClick: onSafetyTips,
    },
  ];

  return (
    <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">

      <h2 className="text-xl font-bold text-gray-800">
        Quick Actions
      </h2>

      <p className="mt-1 text-sm text-gray-500">
        Perform common safety actions instantly.
      </p>

      <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">

        {actions.map((action) => (
          <button
            key={action.title}
            onClick={action.onClick}
            className={`flex flex-col items-center justify-center gap-3 rounded-2xl border border-gray-200 bg-gray-50 p-5 transition-all hover:text-white hover:shadow-lg ${action.color}`}
          >
            {action.icon}

            <span className="text-sm font-semibold">
              {action.title}
            </span>
          </button>
        ))}

      </div>

    </div>
  );
}

export default QuickActions;