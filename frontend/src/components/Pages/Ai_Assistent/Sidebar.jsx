import React from "react";
import {
  LayoutDashboard,
  ShieldCheck,
  Car,
  MapPinned,
  Bot,
  Users,
  FileText,
  Bell,
  Settings,
  LogOut,
} from "lucide-react";

function Sidebar() {
  const menu = [
    {
      icon: LayoutDashboard,
      title: "Dashboard",
    },
    {
      icon: Car,
      title: "Cab Verification",
    },
    {
      icon: MapPinned,
      title: "Live Tracking",
    },
    {
      icon: ShieldCheck,
      title: "SOS Center",
    },
    {
      icon: Bot,
      title: "AI Assistant",
      active: true,
    },
    {
      icon: Users,
      title: "Trusted Contacts",
    },
    {
      icon: FileText,
      title: "Journey History",
    },
    {
      icon: Bell,
      title: "Notifications",
    },
  ];

  return (
    <aside className="fixed left-0 top-0 hidden h-screen w-72 border-r border-gray-200 bg-white xl:flex xl:flex-col">

      {/* Logo */}
      <div className="flex h-20 items-center gap-4 border-b border-gray-200 px-6">

        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-600 text-white">
          <ShieldCheck size={24} />
        </div>

        <div>
          <h2 className="text-xl font-bold text-gray-800">
            SafeHer
          </h2>

          <p className="text-xs text-gray-500">
            Women Safety Platform
          </p>
        </div>

      </div>

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto px-4 py-6">

        <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-gray-400">
          Main Menu
        </p>

        <div className="space-y-2">

          {menu.map((item, index) => {
            const Icon = item.icon;

            return (
              <button
                key={index}
                className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left transition-all
                ${
                  item.active
                    ? "bg-indigo-600 text-white shadow-md"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                <Icon size={20} />

                <span className="font-medium">
                  {item.title}
                </span>
              </button>
            );
          })}
        </div>

        {/* AI Card */}
        <div className="mt-10 rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-600 p-5 text-white shadow-lg">

          <p className="text-lg font-bold">
            SafeHer AI
          </p>

          <p className="mt-2 text-sm text-indigo-100 leading-6">
            AI continuously monitors your journey,
            detects anomalies, verifies vehicles,
            and helps during emergencies.
          </p>

          <button className="mt-5 w-full rounded-xl bg-white py-3 font-semibold text-indigo-700 transition hover:bg-gray-100">
            Learn More
          </button>

        </div>

      </div>

      {/* Bottom */}
      <div className="space-y-2 border-t border-gray-200 p-4">

        <button className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-gray-600 transition hover:bg-gray-100">
          <Settings size={20} />
          Settings
        </button>

        <button className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-red-600 transition hover:bg-red-50">
          <LogOut size={20} />
          Logout
        </button>

      </div>

    </aside>
  );
}

export default Sidebar;