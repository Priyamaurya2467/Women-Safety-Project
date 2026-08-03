import React from "react";
import {
  ShieldCheck,
  Car,
  MapPinned,
  Siren,
  Users,
  Route,
  ArrowRight,
} from "lucide-react";

function WelcomeCard() {
  return (
    <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">

      {/* Heading */}
      <div className="flex items-center gap-4">

        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-indigo-100">
          <ShieldCheck size={28} className="text-indigo-600" />
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-800">
            Welcome to SafeHer AI
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Your intelligent AI companion for safer travel.
          </p>
        </div>

      </div>

      {/* Description */}
      <p className="mt-6 text-gray-600 leading-7">
        Ask anything related to your journey, verify your cab,
        monitor live location, trigger SOS, analyze routes,
        or get instant emergency assistance.
      </p>

      {/* Feature Grid */}
      <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">

        <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5 transition hover:border-indigo-300 hover:bg-indigo-50">
          <Car className="mb-3 text-indigo-600" />
          <h3 className="font-semibold text-gray-800">
            Verify Cab
          </h3>
          <p className="mt-2 text-sm text-gray-500">
            Verify vehicle number, driver details and insurance.
          </p>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5 transition hover:border-green-300 hover:bg-green-50">
          <MapPinned className="mb-3 text-green-600" />
          <h3 className="font-semibold text-gray-800">
            Live Tracking
          </h3>
          <p className="mt-2 text-sm text-gray-500">
            Share your real-time location with trusted contacts.
          </p>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5 transition hover:border-red-300 hover:bg-red-50">
          <Siren className="mb-3 text-red-600" />
          <h3 className="font-semibold text-gray-800">
            Emergency SOS
          </h3>
          <p className="mt-2 text-sm text-gray-500">
            Instantly alert your emergency contacts.
          </p>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5 transition hover:border-purple-300 hover:bg-purple-50">
          <Users className="mb-3 text-purple-600" />
          <h3 className="font-semibold text-gray-800">
            Trusted Contacts
          </h3>
          <p className="mt-2 text-sm text-gray-500">
            Keep your family updated throughout your journey.
          </p>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5 transition hover:border-cyan-300 hover:bg-cyan-50">
          <Route className="mb-3 text-cyan-600" />
          <h3 className="font-semibold text-gray-800">
            Route Analysis
          </h3>
          <p className="mt-2 text-sm text-gray-500">
            AI checks road safety, lighting and crowd density.
          </p>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5 transition hover:border-yellow-300 hover:bg-yellow-50">
          <ShieldCheck className="mb-3 text-yellow-600" />
          <h3 className="font-semibold text-gray-800">
            Safety Tips
          </h3>
          <p className="mt-2 text-sm text-gray-500">
            Get personalized travel and emergency guidance.
          </p>
        </div>

      </div>

      {/* CTA */}
      <div className="mt-8 flex flex-wrap gap-4">

        <button className="flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white transition hover:bg-indigo-700">
          Start Chat
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