import React from "react";
import {
  Bot,
  User,
  ShieldCheck,
  Car,
  MapPinned,
  TriangleAlert,
} from "lucide-react";

function ChatMessages() {
  return (
    <div className="space-y-8">

      {/* ---------------- AI Welcome Message ---------------- */}

      <div className="flex items-start gap-4">

        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-indigo-600 text-white">
          <Bot size={22} />
        </div>

        <div className="max-w-4xl rounded-3xl rounded-tl-md border border-gray-200 bg-white p-6 shadow-sm">

          <h3 className="text-lg font-semibold text-gray-800">
            Hello Priya 👋
          </h3>

          <p className="mt-3 leading-7 text-gray-600">
            I'm your AI Safety Assistant.
            I can verify your cab, analyze your journey,
            monitor safety, share live location,
            trigger SOS and guide you during emergencies.
          </p>

        </div>

      </div>

      {/* ---------------- User Message ---------------- */}

      <div className="flex justify-end">

        <div className="max-w-xl rounded-3xl rounded-tr-md bg-indigo-600 px-6 py-4 text-white shadow">

          Is my cab safe?

        </div>

      </div>

      {/* ---------------- AI Response ---------------- */}

      <div className="flex items-start gap-4">

        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-indigo-600 text-white">
          <Bot size={22} />
        </div>

        <div className="max-w-5xl rounded-3xl rounded-tl-md border border-gray-200 bg-white p-6 shadow-sm">

          <p className="text-gray-700 leading-7">
            I analyzed your cab information.
            Everything appears to be safe.
          </p>

          {/* Cards */}

          <div className="mt-6 grid gap-5 md:grid-cols-2">

            {/* Card */}

            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5">

              <div className="flex items-center gap-3">

                <Car className="text-indigo-600" />

                <h3 className="font-semibold">
                  Cab Verification
                </h3>

              </div>

              <div className="mt-4 space-y-2 text-sm text-gray-600">

                <p>Vehicle Number : UK07AB1234</p>

                <p>Driver : Verified</p>

                <p>Insurance : Active</p>

                <p>RC : Valid</p>

              </div>

            </div>

            {/* Card */}

            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5">

              <div className="flex items-center gap-3">

                <ShieldCheck className="text-green-600" />

                <h3 className="font-semibold">

                  Safety Score

                </h3>

              </div>

              <div className="mt-5">

                <p className="text-5xl font-bold text-green-600">

                  96%

                </p>

                <p className="mt-2 text-sm text-gray-500">

                  Safe to continue your journey.

                </p>

              </div>

            </div>

            {/* Card */}

            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5">

              <div className="flex items-center gap-3">

                <MapPinned className="text-blue-600" />

                <h3 className="font-semibold">

                  Live Tracking

                </h3>

              </div>

              <div className="mt-4 space-y-2 text-sm text-gray-600">

                <p>Status : Active</p>

                <p>ETA : 15 mins</p>

                <p>Distance : 7.8 km</p>

              </div>

            </div>

            {/* Card */}

            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5">

              <div className="flex items-center gap-3">

                <TriangleAlert className="text-yellow-600" />

                <h3 className="font-semibold">

                  AI Analysis

                </h3>

              </div>

              <div className="mt-4 space-y-2 text-sm text-gray-600">

                <p>Risk : Low</p>

                <p>Road Lighting : Good</p>

                <p>Traffic : Normal</p>

                <p>Crowd Density : Medium</p>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* ---------------- Typing Indicator ---------------- */}

      <div className="flex items-start gap-4">

        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-indigo-600 text-white">
          <Bot size={22} />
        </div>

        <div className="rounded-3xl border border-gray-200 bg-white px-6 py-5 shadow-sm">

          <div className="flex gap-2">

            <span
              className="h-2 w-2 animate-bounce rounded-full bg-indigo-600"
            ></span>

            <span
              className="h-2 w-2 animate-bounce rounded-full bg-indigo-600"
              style={{ animationDelay: "0.2s" }}
            ></span>

            <span
              className="h-2 w-2 animate-bounce rounded-full bg-indigo-600"
              style={{ animationDelay: "0.4s" }}
            ></span>

          </div>

        </div>

      </div>

    </div>
  );
}

export default ChatMessages;