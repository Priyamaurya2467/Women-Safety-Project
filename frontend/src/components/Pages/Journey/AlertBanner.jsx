import React from "react";
import {
  TriangleAlert,
  ShieldCheck,
  ShieldAlert,
} from "lucide-react";

function AlertBanner({ level, message }) {

  const styles = {
    safe: {
      bg: "bg-green-100",
      text: "text-green-700",
      icon: <ShieldCheck size={22} />,
    },

    warning: {
      bg: "bg-yellow-100",
      text: "text-yellow-700",
      icon: <TriangleAlert size={22} />,
    },

    danger: {
      bg: "bg-red-100",
      text: "text-red-700",
      icon: <ShieldAlert size={22} />,
    },
  };

  const current = styles[level] || styles.safe;

  return (
    <div
      className={`${current.bg} ${current.text} rounded-xl p-4 flex items-center gap-3`}
    >
      {current.icon}

      <p className="font-medium">
        {message}
      </p>
    </div>
  );
}

export default AlertBanner;