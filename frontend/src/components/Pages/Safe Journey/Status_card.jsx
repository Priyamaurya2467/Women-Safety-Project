import React from "react";
import {
  Radio,
  Route,
  Battery,
  Signal,
  Share2,
  MapPin,
  Maximize,
  LocateFixed,
  ShieldCheck,
  AlertTriangle,
  RefreshCw,
} from "lucide-react";

function Status_card({ journey, onRefresh }) {
  if (!journey) return null;

  // -----------------------------
  // JOURNEY DATA
  // -----------------------------

  const status =
  typeof journey.status === "string"
    ? journey.status
    : "active";

  const destination =
  journey.destination?.address ||
  journey.destination?.name ||
  (typeof journey.destination === "string"
    ? journey.destination
    : "Destination unavailable");

const startLocation =
  journey.startLocation?.address ||
  journey.startLocation?.name ||
  (typeof journey.startLocation === "string"
    ? journey.startLocation
    : "Starting location unavailable");

  const distance = typeof journey.distance === "number" ? journey.distance
   : "--";

  const estimatedTime =
  typeof journey.estimatedTime === "number"
    ? journey.estimatedTime
    : "--";

  const riskLevel = 
    typeof journey.riskLevel === "string"
      ? journey.riskLevel
      : "Unknown"

  const currentLocation =
  journey.currentLocation?.address ||
  journey.currentLocation?.name ||
  (typeof journey.currentLocation === "string"
    ? journey.currentLocation
    : "Location unavailable");

  const battery =
  typeof journey.battery === "number"
    ? journey.battery
    : null;

  const network =
    typeof journey.network === "string"
      ? journey.network
      : "Unknown";

  const routeStatus =
    typeof journey.routeStatus === "string"
      ? journey.routeStatus
      : "Monitoring";
   


  const getRiskStyle = () => {
    switch (riskLevel.toLowerCase()) {
      case "high":
      case "safe":
        return "bg-green-100 text-green-700";

      case "medium":
        return "bg-yellow-100 text-yellow-700";

      case "low":
        return "bg-blue-100 text-blue-700";

      case "danger":
      case "critical":
        return "bg-red-100 text-red-700";

      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  // -----------------------------
  // JOURNEY STATUS
  // -----------------------------

  const isActive = status === "active";

  // -----------------------------
  // FORMAT TIME
  // -----------------------------

  const getETA = () => {
    if (!estimatedTime || estimatedTime === "--") {
      return "ETA unavailable";
    }

    return `${estimatedTime} mins remaining`;
  };

  // -----------------------------
  // SHARE LIVE JOURNEY
  // -----------------------------

  const handleShare = async () => {
    const trackingToken = journey.trackingToken;

    if (!trackingToken) {
      alert("Tracking link is not available.");
      return;
    }

    const trackingLink = `${window.location.origin}/live/${trackingToken}`;

    try {
      if (navigator.share) {
        await navigator.share({
          title: "SafeHer Live Journey",
          text: "Track my journey in real time.",
          url: trackingLink,
        });
      } else {
        await navigator.clipboard.writeText(trackingLink);

        alert("Live tracking link copied!");
      }
    } catch (error) {
      console.log("Share cancelled");
    }
  };

  // -----------------------------
  // REQUEST CHECK-IN
  // -----------------------------

  const handleCheckIn = () => {
    // Connect this later to your notification/check-in API
    console.log("Check-in requested for journey:", journey._id);
  };

  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">

      <div className="flex flex-col md:flex-row">

        {/* =====================================
            LEFT CONTENT
        ===================================== */}

        <div className="flex flex-1 flex-col justify-between p-6">

          <div>

            {/* STATUS BADGES */}

            <div className="mb-6 flex flex-wrap items-center gap-3">

              {/* Monitoring */}

              <span
                className={`flex items-center gap-2 rounded-lg px-3 py-1.5 text-xs font-semibold ${
                  isActive
                    ? "bg-blue-100 text-blue-600"
                    : "bg-gray-100 text-gray-600"
                }`}
              >

                <Radio
                  size={14}
                  className={isActive ? "animate-pulse" : ""}
                />

                {isActive
                  ? "Active Monitoring"
                  : "Monitoring Paused"}

              </span>


              {/* Safety */}

              <span
                className={`flex items-center gap-2 rounded-lg px-3 py-1.5 text-xs font-semibold ${getRiskStyle()}`}
              >

                {riskLevel.toLowerCase() === "critical" ||
                riskLevel.toLowerCase() === "danger" ? (
                  <AlertTriangle size={14} />
                ) : (
                  <ShieldCheck size={14} />
                )}

                Safety Level: {riskLevel}

              </span>

            </div>


            {/* DESTINATION */}

            <p className="mb-2 text-xs font-medium uppercase tracking-wide text-gray-400">
              Destination
            </p>

            <h2 className="mb-2 text-2xl font-bold text-gray-900">
              {destination}
            </h2>

            <p className="mb-8 text-sm text-gray-500">
              ETA: {getETA()}
            </p>


            {/* INFORMATION */}

            <div className="space-y-6">

              {/* ROUTE */}

              <div className="flex items-center gap-4">

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                  <Route size={19} />
                </div>

                <div>

                  <p className="text-sm text-gray-500">
                    Route Status
                  </p>

                  <p className="text-sm font-semibold text-gray-900">

                    {routeStatus}

                    <span className="ml-2 font-normal text-gray-500">
                      (AI monitored)
                    </span>

                  </p>

                </div>

              </div>


              {/* BATTERY */}

              <div className="flex items-center gap-4">

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                  <Battery size={19} />
                </div>

                <div>

                  <p className="text-sm text-gray-500">
                    Device Health
                  </p>

                  <div className="flex items-center gap-3">

                    <p className="text-sm font-semibold text-gray-900">
                      {battery !== null
                        ? `${battery}% Battery`
                        : "Battery unavailable"}
                    </p>

                    <span className="flex items-center gap-1 text-xs text-gray-500">
                      <Signal size={14} />
                      {network}
                    </span>

                  </div>

                </div>

              </div>


              {/* DISTANCE */}

              <div className="flex items-center gap-4">

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                  <MapPin size={19} />
                </div>

                <div>

                  <p className="text-sm text-gray-500">
                    Distance
                  </p>

                  <p className="text-sm font-semibold text-gray-900">
                    {distance} km
                  </p>

                </div>

              </div>

            </div>

          </div>


          <div className="mt-8 flex flex-wrap gap-3">

            {/* SHARE */}

            <button
              onClick={handleShare}
              className="flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-xs font-semibold text-white shadow-sm transition hover:bg-blue-700 active:scale-95"
            >
              <Share2 size={15} />
              Share Live
            </button>


            {/* CHECK IN */}

            <button
              onClick={handleCheckIn}
              className="flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-5 py-3 text-xs font-semibold text-gray-700 transition hover:bg-gray-100 active:scale-95"
            >
              Request Check-in
            </button>


            {/* SOS */}

            <button
              onClick={() => {
                window.location.href = "/sos-center";
              }}
              className="flex items-center gap-2 rounded-lg bg-red-600 px-5 py-3 text-xs font-semibold text-white shadow-sm transition hover:bg-red-700 active:scale-95"
            >
              <AlertTriangle size={15} />
              SOS
            </button>


            {/* REFRESH */}

            {onRefresh && (
              <button
                onClick={onRefresh}
                className="flex items-center justify-center rounded-lg border border-gray-300 px-3 py-3 text-gray-600 transition hover:bg-gray-100"
                title="Refresh journey"
              >
                <RefreshCw size={15} />
              </button>
            )}

          </div>

        </div>


        {/* =====================================
            MAP SECTION
        ===================================== */}

        <div className="relative h-72 w-full overflow-hidden bg-gray-100 md:h-auto md:min-h-[480px] md:w-96">

          {/* Map */}

          <div className="absolute inset-0">

            {journey.mapUrl ? (
              <iframe
                title="Journey Map"
                src={journey.mapUrl}
                className="h-full w-full border-0"
                loading="lazy"
              />
            ) : (
              <div className="flex h-full w-full flex-col items-center justify-center bg-gray-100">

                <MapPin
                  size={35}
                  className="mb-3 text-gray-400"
                />

                <p className="text-sm font-medium text-gray-500">
                  Live map unavailable
                </p>

                <p className="mt-1 text-xs text-gray-400">
                  Location: {currentLocation}
                </p>

              </div>
            )}

          </div>


          {/* MAP CONTROLS */}

          <div className="absolute right-4 top-4 flex flex-col gap-2">

            <button
              className="flex h-10 w-10 items-center justify-center rounded-lg bg-white shadow-md transition hover:text-blue-600"
              title="Fullscreen"
            >
              <Maximize size={18} />
            </button>

            <button
              className="flex h-10 w-10 items-center justify-center rounded-lg bg-white shadow-md transition hover:text-blue-600"
              title="Current location"
            >
              <LocateFixed size={18} />
            </button>

          </div>


          {/* CURRENT LOCATION */}

          <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-white/50 bg-white/90 p-3 shadow-md backdrop-blur">

            <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-500">
              Current Location
            </p>

            <p className="mt-1 truncate text-sm font-semibold text-gray-900">
              {currentLocation}
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Status_card;