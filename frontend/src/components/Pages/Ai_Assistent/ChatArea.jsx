import React from 'react'
import {
  Route,
  Camera,
  Users,
  Mic,
  Image,
  Send,
} from "lucide-react";


function ChatArea() {
  return (
    <>

    <div className="sticky top-0 z-10 flex items-center justify-between border-b border-gray-200 bg-white/80 p-6 backdrop-blur-md">
  {/* Left Section */}
  <div className="flex items-center space-x-4">

    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 shadow-sm">
      <span className="material-symbols-outlined animate-pulse text-blue-600">
        auto_awesome
      </span>
    </div>

    <div>
      <h2 className="text-xl font-bold text-gray-900">
        AI Safety Companion
      </h2>

      <div className="mt-1 flex items-center space-x-2">
        <span className="h-2 w-2 rounded-full bg-green-500"></span>

        <span className="text-xs text-gray-500">
          Live Monitoring Active
        </span>
      </div>
    </div>

  </div>

  {/* Right Section */}
  <div className="hidden lg:flex">
    <button className="flex items-center space-x-2 rounded-lg bg-gray-100 px-4 py-2 font-medium text-blue-600 transition hover:bg-gray-200">
      <span className="material-symbols-outlined text-[18px]">
        share
      </span>

      <span>Share Logs</span>
    </button>
  </div>
</div>
<div className="flex-1 space-y-6 overflow-y-auto bg-gray-50 p-6">

  {/* System Message */}
  <div className="flex justify-center py-4">
    <span className="rounded-full bg-gray-100 px-4 py-1 text-xs font-medium text-gray-500">
      Session started 8:12 PM
    </span>
  </div>

  {/* AI Message */}
  <div className="flex max-w-2xl items-start space-x-3">

    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-600">
      <span className="material-symbols-outlined text-[16px] text-white">
        psychology
      </span>
    </div>

    <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
      <p className="text-sm leading-6 text-gray-800">
        Good evening, Maya. I've analyzed your upcoming trip to Brooklyn.
        The route is <strong>99% verified safe</strong> based on current
        street lighting data and live social transit density.
      </p>

      <div className="mt-4 grid grid-cols-2 gap-3">

        <div className="rounded-xl bg-gray-100 p-3">
          <p className="text-[10px] font-bold uppercase tracking-wider text-gray-500">
            Estimated Risk
          </p>
          <p className="font-bold text-blue-600">
            Extremely Low
          </p>
        </div>

        <div className="rounded-xl bg-gray-100 p-3">
          <p className="text-[10px] font-bold uppercase tracking-wider text-gray-500">
            Confidence
          </p>
          <p className="font-bold text-green-600">
            98.4%
          </p>
        </div>

      </div>
    </div>

  </div>

  {/* User Message */}
  <div className="flex items-start justify-end space-x-3">

    <div className="max-w-md rounded-2xl bg-blue-600 p-4 text-white shadow-md">
      <p className="text-sm leading-6">
        Thanks. Can you scan the area around Bedford Ave station right now?
      </p>
    </div>

    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-200">
      <span className="material-symbols-outlined text-[16px] text-gray-600">
        person
      </span>
    </div>

  </div>

  {/* AI Typing Indicator */}
  <div className="flex items-start space-x-3">

    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-600">
      <span className="material-symbols-outlined text-[16px] text-white">
        psychology
      </span>
    </div>

    <div className="flex items-center space-x-2 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">

      <span
        className="h-2 w-2 animate-bounce rounded-full bg-blue-600"
        style={{ animationDelay: "0s" }}
      />

      <span
        className="h-2 w-2 animate-bounce rounded-full bg-blue-600"
        style={{ animationDelay: "0.2s" }}
      />

      <span
        className="h-2 w-2 animate-bounce rounded-full bg-blue-600"
        style={{ animationDelay: "0.4s" }}
      />

    </div>

  </div>

</div>
<div className="border-t border-gray-200 bg-gray-50/70 p-6">
      <div className="mx-auto max-w-4xl space-y-4">
        {/* Quick Action Pills */}
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          <button className="flex shrink-0 items-center gap-2 rounded-full border border-gray-300 bg-white px-4 py-2 text-sm font-medium transition-all hover:bg-indigo-600 hover:text-white active:scale-95">
            <Route size={18} />
            <span>Analyze My Route</span>
          </button>

          <button className="flex shrink-0 items-center gap-2 rounded-full border border-gray-300 bg-white px-4 py-2 text-sm font-medium transition-all hover:bg-indigo-600 hover:text-white active:scale-95">
            <Camera size={18} />
            <span>Scan Surroundings</span>
          </button>
           <button className="flex shrink-0 items-center gap-2 rounded-full border border-gray-300 bg-white px-4 py-2 text-sm font-medium transition-all hover:bg-indigo-600 hover:text-white active:scale-95">
            <Users size={18} />
            <span>Check-in with Family</span>
          </button>
        </div>

        {/* Input */}
        <div className="group relative">
          <input
            type="text"
            placeholder="Ask about safety, routes, or local risk..."
            className="w-full rounded-2xl border border-gray-300 bg-white py-4 pl-4 pr-36 shadow-sm transition-all focus:border-indigo-600 focus:ring-4 focus:ring-indigo-100 outline-none"
          />

          <div className="absolute inset-y-2 right-2 flex items-center gap-1">
            <button className="rounded-lg p-2 text-gray-500 transition-colors hover:text-indigo-600">
              <Mic size={20} />
            </button>

            <button className="rounded-lg p-2 text-gray-500 transition-colors hover:text-indigo-600">
              <Image size={20} />
            </button>

            <button className="ml-1 rounded-xl bg-indigo-600 p-3 text-white transition-all hover:bg-indigo-700 active:scale-90">
              <Send size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  

    
    
    </>
  )
}

export default ChatArea