import React from "react";
import { useLocation as useRouterLocation } from "react-router-dom";
import { useLocation as useLocationContext } from "../../Context/LocationContext";
import AlertBanner from '../../components/Pages/Journey/AlertBanner';
import SafetyStatus from "../../components/Pages/Journey/SafetyStatus";
import SafetyScore from "../../components/Pages/Journey/SafetyScore";
import JourneyProgress from "../../components/Pages/Journey/JourneyProgress";
import LiveTracking from "../../components/Pages/LiveTracking";
import { useJourneyContext } from "../../Context/JourneyContext";
function JourneyPage() {
    const { monitoring,location} = useLocationContext();
    const {journey} = useJourneyContext();

    console.log("Journey =", journey);
    console.log("Location =", location);

  return (
    <div className="grid grid-cols-12 gap-6 p-6">
      {/* Left Panel */}
      <div className="col-span-12 lg:col-span-4 space-y-6">
        <AlertBanner
          level={monitoring?.safe ? "safe" : "danger"}
          message={
            monitoring?.alert ||
            "You are currently travelling through a safe area."
          }
        />

        <SafetyScore
          score={monitoring?.score || 100}
        />

        <SafetyStatus
          safetyScore={monitoring?.score || 100}
          status={monitoring?.safe ? journey.status: "Unsafe Area"}
          distanceLeft={journey.remainingDistance}
          eta={journey.remainingTime}
        />

        <JourneyProgress
          destination={journey.destination}
          currentArea={monitoring?.zone || "Unknown"}
          distance={journey.distance}
        />
      </div>

      {/* Right Panel */}
      <div className="col-span-12 lg:col-span-8">
        <LiveTracking
          currentLocation = {location}
          destination={journey.destination}
          route= {journey.route}
        />
      </div>
      
    </div>
  );
}

export default JourneyPage;