import React from "react";
import { Bot, Share2 } from "lucide-react";

function ChatHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-gray-200 bg-white px-8 py-5 shadow-sm">

      <div className="flex items-center justify-between">

        {/* Left Side */}
        <div className="flex items-center gap-4">

          {/* AI Icon */}
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100">
            <Bot size={26} className="text-indigo-600" />
          </div>

          {/* Title */}
          <div>

            <h1 className="text-2xl font-bold text-gray-800">
              SafeHer AI Assistant
            </h1>

            <p className="mt-1 text-sm text-gray-500">
              Your personal AI safety companion
            </p>

          </div>

        </div>

        {/* Right Side */}
        <button
          className="flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-5 py-3 text-sm font-medium text-gray-700 transition hover:border-indigo-500 hover:bg-indigo-50 hover:text-indigo-600"
        >
          <Share2 size={18} />
          Share Journey
        </button>

      </div>

      {/* Status Chips */}
      <div className="mt-5 flex flex-wrap gap-3">

        <span className="rounded-full border border-green-200 bg-green-50 px-4 py-2 text-xs font-semibold text-green-700">
          🟢 AI Monitoring
        </span>

        <span className="rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-semibold text-blue-700">
          📍 Live GPS
        </span>

        <span className="rounded-full border border-red-200 bg-red-50 px-4 py-2 text-xs font-semibold text-red-700">
          🚨 SOS Ready
        </span>

        <span className="rounded-full border border-purple-200 bg-purple-50 px-4 py-2 text-xs font-semibold text-purple-700">
          👥 Trusted Contacts
        </span>

        <span className="rounded-full border border-indigo-200 bg-indigo-50 px-4 py-2 text-xs font-semibold text-indigo-700">
          🚖 Cab Verified
        </span>

      </div>

    </header>
  );
}

export default ChatHeader;