import React from "react";
import {
  Users,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

function Information({ journey }) {
  if (!journey) return null;

  // Trusted contacts
  const trustedContacts = journey.trustedContactsCount ?? 0;
  const contactsNotified =
    journey.contactsNotified ?? false;

  // Safe havens
  const safeHavens = Array.isArray(journey.safeHavens)
    ? journey.safeHavens
    : [];

  const safeHavenAvailable =
    journey.safeHavenAvailable ?? safeHavens.length > 0;

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

      {/* =========================
          TRUSTED CONTACTS
      ========================= */}

      <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md">

        <div className="flex items-start gap-5">

          {/* Icon */}

          <div
            className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${
              contactsNotified
                ? "bg-green-100 text-green-600"
                : "bg-gray-100 text-gray-500"
            }`}
          >
            <Users size={23} />
          </div>

          {/* Content */}

          <div className="min-w-0 flex-1">

            <div className="flex items-center gap-2">

              <h3 className="text-lg font-semibold text-gray-900">
                Trusted Contacts
              </h3>

              {contactsNotified && (
                <CheckCircle2
                  size={17}
                  className="shrink-0 text-green-500"
                />
              )}

            </div>

            <p className="mt-1 text-sm leading-5 text-gray-500">

              {contactsNotified
                ? `${trustedContacts} trusted ${
                    trustedContacts === 1
                      ? "contact is"
                      : "contacts are"
                  } receiving your journey updates.`
                : "Trusted contacts are not currently receiving journey updates."}

            </p>

            <div className="mt-4">

              <span
                className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${
                  contactsNotified
                    ? "bg-green-50 text-green-700"
                    : "bg-gray-100 text-gray-600"
                }`}
              >
                {contactsNotified
                  ? `${trustedContacts} Connected`
                  : "Not Connected"}
              </span>

            </div>

          </div>

        </div>

      </div>


      {/* =========================
          SAFE HAVEN
      ========================= */}

      <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md">

        <div className="flex items-start gap-5">

          {/* Icon */}

          <div
            className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${
              safeHavenAvailable
                ? "bg-blue-100 text-blue-600"
                : "bg-gray-100 text-gray-500"
            }`}
          >
            <ShieldCheck size={23} />
          </div>

          {/* Content */}

          <div className="min-w-0 flex-1">

            <div className="flex items-center gap-2">

              <h3 className="text-lg font-semibold text-gray-900">
                Safe Haven
              </h3>

              {safeHavenAvailable ? (
                <CheckCircle2
                  size={17}
                  className="shrink-0 text-blue-500"
                />
              ) : (
                <AlertCircle
                  size={17}
                  className="shrink-0 text-gray-400"
                />
              )}

            </div>

            <p className="mt-1 text-sm leading-5 text-gray-500">

              {safeHavenAvailable
                ? `${safeHavens.length} verified safe ${
                    safeHavens.length === 1
                      ? "zone"
                      : "zones"
                  } found along your route.`
                : "No verified safe zones have been identified nearby."}

            </p>

            <div className="mt-4">

              <span
                className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${
                  safeHavenAvailable
                    ? "bg-blue-50 text-blue-700"
                    : "bg-gray-100 text-gray-600"
                }`}
              >
                {safeHavenAvailable
                  ? `${safeHavens.length} Available`
                  : "None Nearby"}
              </span>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Information;