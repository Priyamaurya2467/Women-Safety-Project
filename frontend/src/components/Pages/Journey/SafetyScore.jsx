import React from "react";

function SafetyScore({ score }) {

  return (

    <div className="bg-white rounded-2xl shadow-md p-6">

      <h2 className="text-xl font-bold mb-5">
        Safety Score
      </h2>

      <div className="w-full bg-gray-200 h-4 rounded-full">

        <div
          className="bg-green-600 h-4 rounded-full transition-all duration-700"
          style={{
            width: `${score}%`,
          }}
        />

      </div>

      <div className="mt-4 text-center">

        <span className="text-4xl font-bold text-green-600">
          {score}%
        </span>

      </div>

    </div>

  );
}

export default SafetyScore;