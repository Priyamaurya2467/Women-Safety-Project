import React from "react";
import {
  BadgeCheck,
  Car,
  User,
  ShieldCheck,
  FileCheck,
  Calendar,
  CheckCircle,
} from "lucide-react";

function CabVerificationCard() {
  return (
    <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">

      {/* Heading */}

      <div className="flex items-center justify-between">

        <div>

          <h2 className="text-xl font-bold text-gray-800">
            🚖 Cab Verification
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            AI has successfully verified the vehicle.
          </p>

        </div>

        <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
          Verified
        </span>

      </div>

      {/* Driver */}

      <div className="mt-8 flex items-center gap-5">

        <img
          src={vehicle.driverImage || "/pfp.jpg"}
          alt="Driver"
          className="h-24 w-24 rounded-full border border-gray-200 object-cover"
        />

        <div>

          <h3 className="text-lg font-semibold text-gray-800">
            {vehicle}
          </h3>

          <p className="text-sm text-gray-500">
            Professional Driver
          </p>

          <div className="mt-2 flex items-center gap-2 text-green-600">

            <BadgeCheck size={18} />

            Identity Verified

          </div>

        </div>

      </div>

      {/* Details */}

      <div className="mt-8 grid gap-4 md:grid-cols-2">

        <div className="rounded-2xl border border-gray-200 bg-gray-50 p-4">

          <div className="flex items-center gap-3">

            <Car className="text-indigo-600" />

            <h3 className="font-semibold">
              Vehicle
            </h3>

          </div>

          <div className="mt-4 space-y-2 text-sm text-gray-600">

            <p><strong>Number:</strong> UK07 AB 1234</p>

            <p><strong>Model:</strong> Hyundai i20</p>

            <p><strong>Color:</strong> White</p>

          </div>

        </div>

        <div className="rounded-2xl border border-gray-200 bg-gray-50 p-4">

          <div className="flex items-center gap-3">

            <User className="text-blue-600" />

            <h3 className="font-semibold">
              Driver
            </h3>

          </div>

          <div className="mt-4 space-y-2 text-sm text-gray-600">

            <p><strong>Name:</strong> Rahul Sharma</p>

            <p><strong>Experience:</strong> 8 Years</p>

            <p><strong>Rating:</strong> ⭐ 4.9</p>

          </div>

        </div>

      </div>

      {/* Verification */}

      <div className="mt-8 grid gap-4 md:grid-cols-3">

        <div className="rounded-2xl border border-green-200 bg-green-50 p-5">

          <ShieldCheck className="text-green-600" />

          <h3 className="mt-3 font-semibold">
            Insurance
          </h3>

          <p className="mt-2 text-sm text-gray-600">
            Active
          </p>

        </div>

        <div className="rounded-2xl border border-blue-200 bg-blue-50 p-5">

          <FileCheck className="text-blue-600" />

          <h3 className="mt-3 font-semibold">
            RC Status
          </h3>

          <p className="mt-2 text-sm text-gray-600">
            Valid
          </p>

        </div>

        <div className="rounded-2xl border border-purple-200 bg-purple-50 p-5">

          <Calendar className="text-purple-600" />

          <h3 className="mt-3 font-semibold">
            Fitness
          </h3>

          <p className="mt-2 text-sm text-gray-600">
            Up to Date
          </p>

        </div>

      </div>

      {/* Safety Tips */}

      <div className="mt-8 rounded-2xl border border-gray-200 bg-gray-50 p-5">

        <h3 className="text-lg font-semibold text-gray-800">
          Safety Checklist
        </h3>

        <div className="mt-4 space-y-3">

          <div className="flex items-center gap-3">
            <CheckCircle className="text-green-600" size={18} />
            <p className="text-sm text-gray-600">
              Verify the vehicle number before entering.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <CheckCircle className="text-green-600" size={18} />
            <p className="text-sm text-gray-600">
              Ask the driver to confirm your name.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <CheckCircle className="text-green-600" size={18} />
            <p className="text-sm text-gray-600">
              Check that the child lock is disabled.
            </p>
          </div>

        </div>

      </div>

      {/* Bottom */}

      <div className="mt-8 rounded-2xl border border-green-200 bg-green-50 p-5">

        <h2 className="text-lg font-bold text-green-700">
          ✅ Overall Status
        </h2>

        <p className="mt-2 text-gray-700">
          Your vehicle, driver identity, RC, and insurance have been
          successfully verified. The cab is considered safe for your
          journey.
        </p>

      </div>

    </div>
  );
}

export default CabVerificationCard;