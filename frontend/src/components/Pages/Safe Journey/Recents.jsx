import React from "react";
import {
  Play,
  Brain,
  CheckCircle2,
  MapPin,
  Clock,
  ChevronRight,
} from "lucide-react";

function Recents({ journey }) {
  if (!journey) return null;

  // =====================================
  // FORMAT TIME
  // =====================================

  const formatTime = (date) => {
    if (!date) return "--:--";

    return new Date(date).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  // =====================================
  // START LOCATION
  // =====================================

  const startLocation =
    journey.startLocation?.address ||
    journey.startLocation ||
    "Starting location";

  // =====================================
  // DYNAMIC EVENTS
  // =====================================

  const events = [];

  // Journey started

  if (journey.startedAt) {
    events.push({
      time: formatTime(journey.startedAt),
      title: "Journey Started",
      description: `Journey started from ${startLocation}.`,
      icon: Play,
      iconStyle: "bg-green-100 text-green-600",
    });
  }

  // AI insight, only if backend provides one

  if (journey.aiInsight) {
    events.push({
      time: formatTime(journey.updatedAt || new Date()),
      title: "AI Safety Scan",
      description: journey.aiInsight,
      icon: Brain,
      iconStyle: "bg-blue-100 text-blue-600",
    });
  }

  // Custom events from backend

  if (Array.isArray(journey.events)) {
    journey.events.forEach((event) => {
      events.push({
        time: formatTime(event.timestamp),
        title: event.title || "Journey Update",
        description: event.description || "",
        icon: CheckCircle2,
        iconStyle: "bg-gray-100 text-gray-600",
      });
    });
  }

  // Journey completed

  if (journey.status === "completed" && journey.endedAt) {
    events.push({
      time: formatTime(journey.endedAt),
      title: "Journey Completed",
      description: "Your Safe Journey has been completed.",
      icon: CheckCircle2,
      iconStyle: "bg-green-100 text-green-600",
    });
  }

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">

      {/* =====================================
          HEADER
      ===================================== */}

      <div className="mb-6 flex items-center justify-between">

        <div>
          <h3 className="text-xl font-bold text-gray-900">
            Journey Log
          </h3>

          <p className="mt-1 text-xs text-gray-500">
            Recent activity during your journey
          </p>
        </div>

        <Clock
          size={19}
          className="text-gray-400"
        />

      </div>


      {/* =====================================
          EMPTY STATE
      ===================================== */}

      {events.length === 0 ? (
        <div className="rounded-xl bg-gray-50 px-5 py-8 text-center">

          <MapPin
            size={26}
            className="mx-auto mb-3 text-gray-400"
          />

          <p className="text-sm font-semibold text-gray-700">
            No journey activity yet
          </p>

          <p className="mt-1 text-xs text-gray-500">
            New journey events will appear here.
          </p>

        </div>
      ) : (

        /* =====================================
           TIMELINE
        ===================================== */

        <div className="relative">

          {/* Timeline line */}

          <div className="absolute left-[23px] top-5 bottom-5 w-px bg-gray-200" />

          <div className="space-y-6">

            {events.map((event, index) => {

              const Icon = event.icon;

              return (
                <div
                  key={index}
                  className="relative flex gap-4"
                >

                  {/* ICON */}

                  <div
                    className={`relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${event.iconStyle}`}
                  >
                    <Icon size={17} />
                  </div>


                  {/* CONTENT */}

                  <div className="min-w-0 flex-1 pt-1">

                    <div className="flex items-start justify-between gap-3">

                      <p className="text-sm font-semibold text-gray-900">
                        {event.title}
                      </p>

                      <span className="shrink-0 text-[11px] font-medium text-gray-400">
                        {event.time}
                      </span>

                    </div>

                    <p className="mt-1 text-xs leading-5 text-gray-500">
                      {event.description}
                    </p>

                  </div>

                </div>
              );
            })}

          </div>

        </div>
      )}


      {/* =====================================
          DETAILED TIMELINE
      ===================================== */}

      <button
        onClick={() => {
          console.log("View detailed timeline:", journey._id);
        }}
        className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl border border-blue-100 bg-blue-50 py-3 text-sm font-semibold text-blue-600 transition hover:bg-blue-100"
      >
        View Detailed Timeline
        <ChevronRight size={16} />
      </button>

    </div>
  );
}

export default Recents;