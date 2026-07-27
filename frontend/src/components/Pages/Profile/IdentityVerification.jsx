import React from "react";
import { BadgeCheck } from "lucide-react";

function IdentityVerification() {
  return (
    <div className="col-span-12 md:col-span-7 bg-white p-6 rounded-xl border border-gray-200 shadow-sm">

      <div className="flex justify-between items-center mb-4">

        <div className="flex items-center gap-4">

          <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
            <BadgeCheck className="text-green-600" size={28} />
          </div>

          <div>
            <h4 className="text-lg font-semibold text-gray-900">
              Identity Verified
            </h4>

            <p className="text-sm text-gray-500">
              Government ID verified on Sep 12, 2023
            </p>
          </div>

        </div>

        <span className="bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-semibold">
          ACTIVE
        </span>

      </div>

      <p className="text-gray-600 leading-7">
        Your account has been fully verified, enabling advanced features
        like <strong>Priority Emergency Response</strong> and{" "}
        <strong>Trusted Escort Verification</strong>.
      </p>

    </div>
  );
}

export default IdentityVerification;