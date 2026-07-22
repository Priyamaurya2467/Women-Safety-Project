import {
  MapPin,
  TriangleAlert,
  ArrowRight,
  Lock,
  ShieldAlert,
} from "lucide-react";

export default function Analytics() {
  return (
    <aside className="hidden w-80 flex-col space-y-6 border-l border-gray-200 bg-white p-6 xl:flex">
      {/* Safety Score */}
      <div>
        <h3 className="mb-4 text-lg font-semibold">Safety Score</h3>

        <div className="relative flex h-40 items-center justify-center">
          {/* SVG Progress Circle */}
          <svg
            className="absolute inset-0 h-full w-full -rotate-90"
            viewBox="0 0 160 160"
          >
            {/* Background */}
            <circle
              cx="80"
              cy="80"
              r="60"
              fill="none"
              stroke="#EEF2FF"
              strokeWidth="12"
            />

            {/* Progress */}
            <circle
              cx="80"
              cy="80"
              r="60"
              fill="none"
              stroke="#4F46E5"
              strokeWidth="12"
              strokeLinecap="round"
              strokeDasharray="377"
              strokeDashoffset="22"
            />
          </svg>

          <div className="z-10 text-center">
            <p className="text-5xl font-bold text-indigo-600">94</p>
            <p className="text-sm text-gray-500">Optimal Safety</p>
          </div>
        </div>
      </div>

      {/* AI Threat Analysis */}
      <div className="space-y-4">
        <h3 className="text-xs font-semibold uppercase tracking-widest text-gray-500">
          AI Threat Analysis
        </h3>

        {/* Card 1 */}
        <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
          <div className="mb-2 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <MapPin className="text-indigo-600" size={18} />
              <span className="font-medium">Williamsburg Area</span>
            </div>

            <span className="rounded bg-green-100 px-2 py-1 text-[10px] font-bold text-green-700">
              SECURE
            </span>
          </div>

          <p className="text-xs leading-relaxed text-gray-500">
            Recent activity: 48 reports in last 24h. Confidence: 99%.
          </p>
        </div>

        {/* Card 2 */}
        <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
          <div className="mb-2 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <TriangleAlert className="text-amber-500" size={18} />
              <span className="font-medium">Route Anomaly</span>
            </div>

            <span className="rounded bg-yellow-100 px-2 py-1 text-[10px] font-bold text-yellow-700">
              LOW RISK
            </span>
          </div>

          <p className="text-xs leading-relaxed text-gray-500">
            Minor construction detour on 4th Ave might slightly reduce
            lighting. Stay on the main road.
          </p>
        </div>
      </div>

      {/* Quick Commands */}
      <div className="space-y-4 border-t border-gray-200 pt-4">
        <h3 className="text-xs font-semibold uppercase tracking-widest text-gray-500">
          Quick Commands
        </h3>

        <button className="group w-full rounded-xl border border-gray-200 p-3 text-left transition-all hover:border-indigo-600 hover:bg-indigo-50">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Verify Safe Zone</span>

            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </div>
        </button>

        <button className="group w-full rounded-xl border border-gray-200 p-3 text-left transition-all hover:border-indigo-600 hover:bg-indigo-50">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Lock Digital Vault</span>

            <Lock
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </div>
        </button>

        <button className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-red-600 p-4 font-semibold text-white transition-all hover:bg-red-700 active:scale-95">
          <ShieldAlert size={20} />
          <span>Emergency Protocols</span>
        </button>
      </div>
    </aside>
  );
}