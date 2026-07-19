import React from "react";
import Sidebar from "./Elements/Sidebar";
import Navbar from "./Pages/Cab_Verification/Navbar";
import Verified_card from "./Pages/Cab_Verification/Verified_card";
import Driver from "./Pages/Cab_Verification/Driver";
import Safety_Protocol from "./Pages/Cab_Verification/Safety_Protocol";

import {
  CheckCircle2,
  ShieldCheck,
  ScanFace,
  MapPin,
  Wifi,
  Shield,
  Star,
  BadgeCheck,
  AlertTriangle,
  ArrowRight,
} from "lucide-react";

function Cab_Verification() {
  const Verification = [
    {
      logo: <ScanFace size={18} />,
      title: "Biometric Driver Verification",
      desc: "Live facial recognition matched with DMV database records from Dec 2023.",
      status: "SUCCESS",
      color: "green",
    },
    {
      logo: <ShieldCheck size={18} />,
      title: "Vehicle Documentation",
      desc: "Insurance and commercial permit #CP-887 are active and verified through enterprise portal.",
      status: "VALIDATED",
      color: "green",
    },
    {
      logo: <MapPin size={18} />,
      title: "Geographic Sync",
      desc: "Confirming vehicle proximity to your current location (Est. 12 metres).",
      status: "ACTIVE SYNCING...",
      color: "blue",
    },
  ];

  return (
    <div className="flex min-h-screen bg-slate-100">

      <Sidebar />

      <div className="flex-1 overflow-x-hidden">

        <Navbar />

        <hr className="border-gray-200"/>

        <Verified_card />

        <main className="p-6">

          {/* Top Grid */}

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-3 flex flex-col gap-6">

<div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">

<div className="flex flex-col items-center">

<img
src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300"
className="w-28 h-28 rounded-full border-4 border-slate-200 object-cover"
/>

<div className="mt-4 text-center">

<h2 className="text-2xl font-bold">
Marcus Aris
</h2>

<div className="flex items-center justify-center gap-1 mt-2 text-red-500">

<Star size={14} fill="currentColor"/>

<span className="text-sm">
4.98 (2,450+ rides)
</span>

</div>

</div>

</div>

<div className="mt-8 space-y-5">

<div className="flex justify-between">

<span className="text-gray-500">
Experience
</span>

<span className="font-semibold">
8 Years
</span>

</div>

<div className="flex justify-between">

<span className="text-gray-500">
Background Check
</span>

<span className="bg-green-100 text-green-700 rounded px-2 py-1 text-xs font-semibold">
PASSED
</span>

</div>

<div className="flex justify-between">

<span className="text-gray-500">
Identity Match
</span>

<span className="font-semibold text-green-700">
100% Match
</span>

</div>

</div>

</div>
<div className="grid grid-cols-1 lg:grid-cols-5 gap-6">

  {/* Car Image */}

  <div className="lg:col-span-3">

    <div className="relative overflow-hidden rounded-2xl">

      <img
        src="https://images.unsplash.com/photo-1553440569-bcc63803a83d?w=1200"
        alt="Tesla"
        className="h-64 w-full object-cover"
      />

      <div className="absolute top-4 right-4 rounded-lg bg-white px-3 py-2 shadow">

        <p className="text-xs font-semibold text-blue-700">
          Digital VIN Match
        </p>

      </div>

    </div>

  </div>

  {/* Vehicle Details */}

  <div className="lg:col-span-2">

    <p className="text-xs uppercase tracking-[0.25em] text-gray-500">
      Vehicle Model
    </p>

    <h2 className="mt-2 text-4xl font-bold leading-tight">

      Tesla Model 3

      <br />

      <span className="font-medium text-gray-700">
        Midnight Black
      </span>

    </h2>

    {/* Stats */}

    <div className="grid grid-cols-2 gap-4 mt-8">

      <div className="rounded-2xl bg-slate-100 p-5">

        <p className="text-xs uppercase text-gray-500">

          Plate Number

        </p>

        <h3 className="mt-3 text-3xl font-bold tracking-wider text-blue-700">

          SH-

          <br />

          2024-X

        </h3>

      </div>

      <div className="rounded-2xl bg-slate-100 p-5">

        <p className="text-xs uppercase text-gray-500">

          Security Rating

        </p>

        <div className="mt-4 flex items-center gap-2">

          <CheckCircle2
            className="text-green-600"
            size={18}
          />

          <span className="text-2xl font-bold">

            Grade A

          </span>

        </div>

      </div>

    </div>

    {/* GPS */}

    <div className="mt-6 rounded-xl border border-green-200 bg-green-50 p-4">

      <div className="flex items-center gap-3">

        <Wifi
          size={18}
          className="text-green-700"
        />

        <p className="text-sm font-medium text-green-700">

          Real-time GPS synchronization established.

        </p>

      </div>

    </div>

  </div>

</div>

</div>
<div className="grid grid-cols-1 lg:grid-cols-5 gap-6">

  {/* Car Image */}

  <div className="lg:col-span-3">

    <div className="relative overflow-hidden rounded-2xl">

      <img
        src="https://images.unsplash.com/photo-1553440569-bcc63803a83d?w=1200"
        alt="Tesla"
        className="h-64 w-full object-cover"
      />

      <div className="absolute top-4 right-4 rounded-lg bg-white px-3 py-2 shadow">

        <p className="text-xs font-semibold text-blue-700">
          Digital VIN Match
        </p>

      </div>

    </div>

  </div>

  {/* Vehicle Details */}

  <div className="lg:col-span-2">

    <p className="text-xs uppercase tracking-[0.25em] text-gray-500">
      Vehicle Model
    </p>

    <h2 className="mt-2 text-4xl font-bold leading-tight">

      Tesla Model 3

      <br />

      <span className="font-medium text-gray-700">
        Midnight Black
      </span>

    </h2>

    {/* Stats */}

    <div className="grid grid-cols-2 gap-4 mt-8">

      <div className="rounded-2xl bg-slate-100 p-5">

        <p className="text-xs uppercase text-gray-500">

          Plate Number

        </p>

        <h3 className="mt-3 text-3xl font-bold tracking-wider text-blue-700">

          SH-

          <br />

          2024-X

        </h3>

      </div>

      <div className="rounded-2xl bg-slate-100 p-5">

        <p className="text-xs uppercase text-gray-500">

          Security Rating

        </p>

        <div className="mt-4 flex items-center gap-2">

          <CheckCircle2
            className="text-green-600"
            size={18}
          />

          <span className="text-2xl font-bold">

            Grade A

          </span>

        </div>

      </div>

    </div>

    {/* GPS */}

    <div className="mt-6 rounded-xl border border-green-200 bg-green-50 p-4">

      <div className="flex items-center gap-3">

        <Wifi
          size={18}
          className="text-green-700"
        />

        <p className="text-sm font-medium text-green-700">

          Real-time GPS synchronization established.

        </p>

      </div>

    </div>

  </div>

</div>

</div>

{/* Safety Protocol Card */}

<div className="bg-slate-50 rounded-2xl border border-slate-200 shadow-sm p-6">

  <div className="flex items-center gap-3 mb-6">

    <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center">

      <Shield className="text-blue-700" size={18} />

    </div>

    <div>

      <h2 className="font-bold text-gray-900">
        Safety Protocol Tips
      </h2>

      <p className="text-sm text-gray-500">
        Before starting your ride
      </p>

    </div>

  </div>

  <div className="space-y-5">

    <div className="flex gap-3">

      <div className="mt-1">

        <CheckCircle2
          size={18}
          className="text-blue-600"
        />

      </div>

      <p className="text-gray-700 leading-7">

        Ask the driver to confirm your name before entering the vehicle.

      </p>

    </div>

    <div className="flex gap-3">

      <div className="mt-1">

        <CheckCircle2
          size={18}
          className="text-blue-600"
        />

      </div>

      <p className="text-gray-700 leading-7">

        Check if the child lock is disengaged from the rear interior.

      </p>

    </div>

    <div className="flex gap-3">

      <div className="mt-1">

        <CheckCircle2
          size={18}
          className="text-blue-600"
        />

      </div>

      <p className="text-gray-700 leading-7">

        Ensure the license plate matches the one shown in the app.

      </p>

    </div>

    <div className="flex gap-3">

      <div className="mt-1">

        <CheckCircle2
          size={18}
          className="text-blue-600"
        />

      </div>

      <p className="text-gray-700 leading-7">

        Share your trip with a trusted emergency contact before departure.

      </p>

    </div>

  </div>

</div>
{/* Live Verification Chain */}

<div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">

  {/* Header */}

  <div className="flex items-center justify-between mb-8">

    <div>

      <h2 className="text-xl font-bold text-gray-900">
        Live Verification Chain
      </h2>

      <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mt-1">
        ENCRYPTED END-TO-END
      </p>

    </div>

    <div className="bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">
      LIVE
    </div>

  </div>

  {/* Timeline */}

  <div className="relative">

    {/* Vertical Line */}

    <div className="absolute left-[22px] top-4 bottom-4 w-[2px] bg-gray-200"></div>

    <div className="space-y-8">

      {Verification.map((item, index) => (

        <div
          key={index}
          className="relative flex items-start gap-4"
        >

          {/* Circle */}

          <div
            className={`relative z-10 flex h-11 w-11 items-center justify-center rounded-full border-2
            ${
              index === 2
                ? "bg-blue-50 border-blue-500 text-blue-600"
                : "bg-green-600 border-green-600 text-white"
            }`}
          >

            {item.logo}

          </div>

          {/* Content */}

          <div className="flex-1">

            <div className="flex items-center justify-between gap-4">

              <h3 className="font-semibold text-gray-900">

                {item.title}

              </h3>

              <span
                className={`text-[11px] font-semibold rounded-full px-3 py-1 whitespace-nowrap
                ${
                  index === 2
                    ? "bg-blue-100 text-blue-700"
                    : "bg-green-100 text-green-700"
                }`}
              >

                {item.status}

              </span>

            </div>

            <p className="mt-2 text-sm leading-6 text-gray-500">

              {item.desc}

            </p>

          </div>

        </div>

      ))}

    </div>

  </div>

  {/* Bottom Status */}

  <div className="mt-8 rounded-xl bg-slate-50 border border-slate-200 p-5">

    <div className="flex justify-between items-center">

      <div>

        <p className="text-sm font-semibold text-gray-900">

          Verification Confidence

        </p>

        <p className="text-xs text-gray-500 mt-1">

          AI verification completed successfully

        </p>

      </div>

      <div className="text-right">

        <h2 className="text-3xl font-bold text-green-600">

          99.8%

        </h2>

      </div>

    </div>

    <div className="mt-4 w-full h-2 rounded-full bg-gray-200 overflow-hidden">

      <div className="w-[99.8%] h-full rounded-full bg-green-500"></div>

    </div>

  </div>

</div>
{/* Bottom Action Buttons */}

<div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">

  

</div>
{/* Bottom Action Buttons */}

<div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">

  {/* Confirm Journey */}

  <button className="group flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-5 text-white shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">

    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20">

      <CheckCircle2 size={24} />

    </div>

    <div className="text-left">

      <h2 className="text-lg font-bold">
        Confirm & Start Journey
      </h2>

      <p className="text-sm text-blue-100">
        Begin your verified ride safely
      </p>

    </div>

    <ArrowRight
      className="ml-auto transition-transform duration-300 group-hover:translate-x-1"
      size={22}
    />

  </button>

  {/* Report Button */}

  <button className="group flex items-center justify-center gap-3 rounded-2xl border border-red-200 bg-white px-8 py-5 shadow-sm transition-all duration-300 hover:border-red-500 hover:bg-red-50 hover:shadow-lg">

    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-100">

      <AlertTriangle
        size={24}
        className="text-red-600"
      />

    </div>

    <div className="text-left flex-1">

      <h2 className="text-lg font-bold text-red-600">
        Flag Inconsistency
      </h2>

      <p className="text-sm text-gray-500">
        Report suspicious driver or vehicle details
      </p>

    </div>

    <ArrowRight
      className="text-red-500 transition-transform duration-300 group-hover:translate-x-1"
      size={22}
    />

  </button>

</div>
        </main>

      </div>
      {/* End Content */}

    </div>
  );
}

export default Cab_Verification;
