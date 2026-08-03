import React from "react";
import {
  Bell,
  ShieldCheck,
  Sparkles,
  Settings,
} from "lucide-react";

function Navbar() {
  return (
    <header className="sticky top-0 z-50 flex h-16 items-center justify-between border-b border-gray-200 bg-white px-8">

      {/* Left */}
      <div className="flex items-center gap-3">

        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-md">
          <ShieldCheck size={22} />
        </div>

        <div>
          <h1 className="text-lg font-bold text-gray-800">
            SafeHer AI
          </h1>

          <p className="text-xs text-gray-500">
            Intelligent Women's Safety Assistant
          </p>
        </div>

      </div>

      {/* Center */}
      <div className="hidden lg:flex items-center gap-3">

        <div className="flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-700">

          <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>

          AI Monitoring Active

        </div>

        <div className="flex items-center gap-2 rounded-full bg-indigo-100 px-4 py-2 text-sm font-medium text-indigo-700">

          <Sparkles size={16} />

          SafeHer Intelligence

        </div>

      </div>

      {/* Right */}
      <div className="flex items-center gap-3">

        <button className="rounded-xl border border-gray-200 bg-white p-3 transition hover:bg-gray-100">
          <Bell size={20} className="text-gray-600" />
        </button>

        <button className="rounded-xl border border-gray-200 bg-white p-3 transition hover:bg-gray-100">
          <Settings size={20} className="text-gray-600" />
        </button>

        <img
          src="https://i.pravatar.cc/150?img=5"
          alt="profile"
          className="h-11 w-11 rounded-full border-2 border-indigo-100 object-cover"
        />

      </div>

    </header>
  );
}

export default Navbar;