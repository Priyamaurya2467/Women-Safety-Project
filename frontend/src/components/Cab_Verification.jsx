import React from "react";
import Sidebar from "./Elements/Sidebar";
import Navbar from "./Pages/Cab_Verification/Navbar";
import Verified_card from "./Pages/Cab_Verification/Verified_card";
import Driver from "./Pages/Cab_Verification/Driver";
import Safety_Protocol from "./Pages/Cab_Verification/Safety_Protocol";
import Vehicle_info from "./Pages/Cab_Verification/Vehicle_info";
import Verification from "./Pages/Cab_Verification/Verification";
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
  

  return (
    <>

    <div className="bg-white text-gray-700">

      <Navbar/>
      <Sidebar/>
   

      <main className="min-h-screen bg-gray-50 pt-20 md:ml-64 px-8 lg:px-10"> 
        <div className="mx-auto max-w-7xl space-y-6">
          <Verified_card/>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">

  {/* Left Side */}
  <div className="lg:col-span-4">
    <Driver />
  </div>

  {/* Right Side */}
  <div className="space-y-6 lg:col-span-8">

    <Vehicle_info />

    <Safety_Protocol />

    <Verification />

    <div className="flex flex-col gap-4 pt-6 mb-5 sm:flex-row">

      <button
        className="flex h-14 flex-1 items-center justify-center gap-4 rounded-lg bg-blue-600 font-bold text-white shadow-lg transition-all duration-200 hover:brightness-110 active:scale-95"
      >
        Confirm &amp; Start Journey
      </button>

      <button
        className="flex h-14 flex-1 items-center justify-center gap-4 rounded-lg border border-red-400 bg-white font-bold text-red-600 transition-all duration-200 hover:bg-red-50 active:scale-95 hover:shadow shadow-red-300"
      >
        Flag Inconsistency
      </button>

    </div>

  </div>

</div>
        </div>
      </main>


    </div>
    
    </>
    
    
  );
}

export default Cab_Verification;
