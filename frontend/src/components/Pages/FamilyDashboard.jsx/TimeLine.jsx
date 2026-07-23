import React from "react";

function TimeLine() {
  const cards = [
    {
      title: "Sarah left Work",
      duration: "10m ago",
      desc: "Estimated arrival: 5:15 PM",
    },
    {
      title: "Leo arrived at School",
      duration: "2h ago",
      desc: "Safe zone entry confirmed by AI",
    },
    {
      title: "Maya checked in",
      duration: "4h ago",
      desc: "Manual status update: 'Home and Safe'",
    },
    {
      title: "Weekly Safety Report",
      duration: "Yesterday",
      desc: "0 incidents flagged in the last 7 days.",
    },
  ];

  return (
    <div className="relative ml-2 border-l border-gray-200 pl-6">
      {cards.map((card, index) => (
        <div key={index} className="relative mb-6">
          {/* Timeline Dot */}
          <div className="absolute -left-[30px] top-1 h-3 w-3 rounded-full border-4 border-white bg-sky-400 shadow" />

          <div className="flex flex-col gap-1">
            <div className="flex items-start justify-between">
              <span className="font-semibold text-gray-900">
                {card.title}
              </span>

              <span className="text-xs text-gray-500">
                {card.duration}
              </span>
            </div>

            <p className="text-sm text-gray-600">
              {card.desc}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TimeLine;