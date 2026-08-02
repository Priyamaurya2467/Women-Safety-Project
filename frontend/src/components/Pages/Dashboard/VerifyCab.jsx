import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function VerifyCab() {
  const [vehicleNumber, setVehicleNumber] = useState("");
  const [vehicle, setVehicle] = useState(null);
  const [verified, setVerified] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleVerify = async () => {
    if (!vehicleNumber.trim()) {
      alert("Please enter a vehicle number.");
      return;
    }

    try {
      setLoading(true);

      const res = await axios.post(
        "http://localhost:5000/api/vehicle/verify",
        {
          plateNumber: vehicleNumber.trim().toUpperCase(),
        }
      );

      navigate("/cab_verification",{
        state: {
          vehicle: res.data.vehicle,
        }
      })
    } catch (err) {
      setVehicle(null);
      console.log(err);
      setVerified(false);

      

      if (err.response) {
        alert(err.response.data.message);
      } else {
        alert("Server not responding.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="col-span-12 lg:col-span-4 bg-white p-8 rounded-2xl border border-gray-200 shadow-sm space-y-6">
      {/* Header */}
      <div className="flex items-center space-x-4">
        <div className="w-10 h-10 bg-gray-100 text-indigo-600 rounded-full flex items-center justify-center">
          <span className="material-symbols-outlined">
            taxi_alert
          </span>
        </div>

        <h3 className="text-lg font-bold text-gray-900">
          Verify Cab
        </h3>
      </div>

      <p className="text-sm text-gray-500">
        Instant driver record and license plate verification.
      </p>

      <div className="space-y-4">
        <input
          type="text"
          value={vehicleNumber}
          onChange={(e) =>
            setVehicleNumber(e.target.value.toUpperCase())
          }
          placeholder="Enter license plate (e.g. UP32AB1234)"
          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-600 outline-none"
        />

        <button
          onClick={handleVerify}
          disabled={loading}
          className="w-full py-3 border-2 border-indigo-600 text-indigo-600 rounded-xl font-bold hover:bg-indigo-600 hover:text-white transition-all disabled:opacity-60"
        >
          {loading ? "Verifying..." : "Verify Details"}
        </button>

        {verified !== null && (
          <div
            className={`p-4 rounded-xl text-center font-semibold ${
              verified
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {verified ? (
              <>
                <p>✅ Vehicle Verified</p>
                <p className="text-sm mt-2">
                  {vehicle?.plateNumber}
                </p>
              </>
            ) : (
              <>
                <p>❌ Vehicle Not Verified</p>
                <p className="text-sm mt-2">
                  Vehicle not found in our database.
                </p>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default VerifyCab;