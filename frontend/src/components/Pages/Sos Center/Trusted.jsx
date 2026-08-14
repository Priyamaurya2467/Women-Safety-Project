import React from "react";

function Trusted({ contacts = [] }) {
  return (
    <section className="flex flex-col gap-4 rounded-2xl border border-gray-200 bg-white p-6 shadow-md">

      {/* Header */}
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-bold uppercase tracking-wide text-gray-900">
          Trusted Circle
        </h3>

        <span className="rounded-full bg-blue-100 px-2 py-1 text-[10px] font-bold uppercase text-blue-600">
          {contacts.length} Active
        </span>
      </div>

      {/* Members */}
      <div className="space-y-3">

        {contacts.length === 0 ? (
          <div className="rounded-xl bg-gray-50 p-4 text-center">
            <p className="text-sm text-gray-500">
              No trusted contacts added yet.
            </p>
          </div>
        ) : (
          contacts.map((contact) => (
            <div
              key={contact._id}
              className="flex items-center justify-between rounded-xl border border-gray-100 bg-gray-50 p-4"
            >

              {/* Contact Information */}
              <div className="flex items-center gap-3">

                {/* Avatar */}
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-600">
                  {contact.name?.charAt(0)?.toUpperCase() || "?"}
                </div>

                <div>
                  <p className="font-semibold text-gray-800">
                    {contact.name}
                  </p>

                  <p className="text-sm text-gray-500">
                    {contact.phone}
                  </p>

                  {contact.relationship && (
                    <p className="text-xs text-gray-400">
                      {contact.relationship}
                    </p>
                  )}
                </div>

              </div>

              {/* Call Button */}
              <a
                href={`tel:${contact.phone}`}
                className="rounded-lg bg-green-50 px-3 py-2 text-xs font-semibold text-green-700 transition hover:bg-green-100"
              >
                Call
              </a>

            </div>
          ))
        )}

      </div>

    </section>
  );
}

export default Trusted;