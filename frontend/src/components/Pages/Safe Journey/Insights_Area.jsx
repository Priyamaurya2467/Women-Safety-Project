import React from "react";
import {
  Brain,
  ShieldCheck,
  AlertTriangle,
  Activity,
} from "lucide-react";

function Insights_Area({ journey }) {
  if (!journey) return null;

  const destination =
    journey.destination?.address ||
    journey.destination ||
    "your destination";

  const riskLevel = journey.riskLevel || "Monitoring";

  const threatProbability =
    journey.threatProbability ?? null;

  const aiInsight =
    journey.aiInsight ||
    `SafeHer AI is monitoring your journey toward ${destination}. No AI safety assessment is available yet.`;

  const getRiskIcon = () => {
    const risk = riskLevel.toLowerCase();

    if (risk === "high" || risk === "critical" || risk === "danger") {
      return (
        <AlertTriangle
          size={17}
          className="text-red-400"
        />
      );
    }

    if (risk === "low" || risk === "safe") {
      return (
        <ShieldCheck
          size={17}
          className="text-emerald-400"
        />
      );
    }

    return (
      <Activity
        size={17}
        className="text-emerald-400"
      />
    );
  };

  const getRiskColor = () => {
    const risk = riskLevel.toLowerCase();

    if (risk === "high" || risk === "critical" || risk === "danger") {
      return "text-red-400";
    }

    if (risk === "medium") {
      return "text-yellow-400";
    }

    return "text-emerald-400";
  };

  return (
    <div className="relative overflow-hidden rounded-2xl bg-gray-900 p-6 text-white shadow-xl">

      {/* Background Glow */}

      <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-blue-600/20 blur-3xl" />

      <div className="relative z-10">

        {/* Header */}

        <div className="mb-5 flex items-center justify-between">

          <div className="flex items-center gap-2">

            <Brain
              size={19}
              className="animate-pulse text-emerald-400"
            />

            <span className="text-sm font-semibold uppercase tracking-wider text-emerald-400">
              AI Insight
            </span>

          </div>

          <span className="rounded-full bg-white/10 px-2.5 py-1 text-[10px] font-medium text-gray-300">
            LIVE
          </span>

        </div>


        {/* Title */}

        <h3 className="mb-3 text-xl font-bold">
          Environmental Scan
        </h3>


        {/* Dynamic Insight */}

        <p className="text-xs leading-7 text-gray-300">
          {aiInsight}
        </p>


        {/* Divider */}

        <hr className="my-6 border-gray-700" />


        {/* Risk Information */}

        <div className="flex items-center justify-between">

          <div className="flex items-center gap-2">

            {getRiskIcon()}

            <span className="text-xs font-medium uppercase tracking-wider text-gray-400">
              Safety Level
            </span>

          </div>

          <span
            className={`text-sm font-bold ${getRiskColor()}`}
          >
            {riskLevel}
          </span>

        </div>


        {/* Threat Probability */}

        <div className="mt-4 flex items-center justify-between">

          <span className="text-xs font-medium uppercase tracking-wider text-gray-400">
            Threat Probability
          </span>

          <span className="text-lg font-bold text-emerald-400">
            {threatProbability !== null
              ? `${threatProbability}%`
              : "Analyzing..."}
          </span>

        </div>

      </div>

    </div>
  );
}

export default Insights_Area;