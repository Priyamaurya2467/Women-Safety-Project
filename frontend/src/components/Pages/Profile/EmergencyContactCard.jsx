import React from "react";
import { Phone, Users } from "lucide-react";

function EmergencyContactCard() {
  return (
    <div className="col-span-12 md:col-span-5 bg-blue-600 text-white p-6 rounded-xl shadow-sm">

      {/* Heading */}
      <div className="flex items-center gap-2 mb-5">
        <Users size={22} />
        <h4 className="text-lg font-semibold">
          Primary Contact
        </h4>
      </div>

      {/* Contact */}
      <div className="flex items-center gap-4">

        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAuM64IWegOC5fDSjj_a2pB_m0vTxK5BrO7P-_rMUUIRCWj5zZDUaZU5A1nuhriEd8BF-ZeQ26WyODIXgT_4yNCuBenjEg6vWzzNW7LvCBf36iI3n7fEWtctVeGW7JgKzTR0yG7Irh0_Snreqh3b-lDnDw2_tJ432lEdKKsacY762LQxA2oOEu7IvH-fMMWpjg6ikBBa3YFFFCsEjD8R-rkx8PlJyikkix_JvEXBHWh9PPwLAA7KtmwVFnhs09wImsAy-lr7KBgxtjm"
          alt="Emergency Contact"
          className="w-14 h-14 rounded-full border-2 border-white object-cover"
        />

        <div>
          <h5 className="font-semibold text-lg">
            Robert Williams
          </h5>

          <div className="flex items-center gap-2 text-blue-100 mt-1">
            <Phone size={15} />
            <span>Husband • +1 (555) 998-1234</span>
          </div>
        </div>

      </div>

      {/* Button */}
      <button className="mt-8 w-full border border-white/30 bg-white/10 hover:bg-white/20 transition rounded-lg py-3 font-medium">
        Manage Contacts
      </button>

    </div>
  );
}

export default EmergencyContactCard;