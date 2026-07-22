import React from 'react'

function Quick_Resource() {
  return (
    <>

    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
  <h3 className="mb-6 text-xl font-bold text-gray-900">
    Quick Resources
  </h3>

  <ul className="space-y-3">

    {/* Resource 1 */}
    <li>
      <a
        href="#"
        className="group flex items-center justify-between rounded-xl p-4 transition-all duration-200 hover:bg-blue-50"
      >
        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined text-gray-500 transition-colors group-hover:text-blue-600">
            policy
          </span>

          <span className="font-medium text-gray-800">
            Local Police Directory
          </span>
        </div>

        <span className="material-symbols-outlined text-gray-400">
          open_in_new
        </span>
      </a>
    </li>

    {/* Resource 2 */}
    <li>
      <a
        href="#"
        className="group flex items-center justify-between rounded-xl p-4 transition-all duration-200 hover:bg-blue-50"
      >
        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined text-gray-500 transition-colors group-hover:text-blue-600">
            medical_services
          </span>

          <span className="font-medium text-gray-800">
            Nearest Safe Shelters
          </span>
        </div>

        <span className="material-symbols-outlined text-gray-400">
          open_in_new
        </span>
      </a>
    </li>

    {/* Resource 3 */}
    <li>
      <a
        href="#"
        className="group flex items-center justify-between rounded-xl p-4 transition-all duration-200 hover:bg-blue-50"
      >
        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined text-gray-500 transition-colors group-hover:text-blue-600">
            psychology
          </span>

          <span className="font-medium text-gray-800">
            24/7 Crisis Support
          </span>
        </div>

        <span className="material-symbols-outlined text-gray-400">
          open_in_new
        </span>
      </a>
    </li>

    {/* Resource 4 */}
    <li>
      <a
        href="#"
        className="group flex items-center justify-between rounded-xl p-4 transition-all duration-200 hover:bg-blue-50"
      >
        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined text-gray-500 transition-colors group-hover:text-blue-600">
            map
          </span>

          <span className="font-medium text-gray-800">
            Transit Safety Escorts
          </span>
        </div>

        <span className="material-symbols-outlined text-gray-400">
          open_in_new
        </span>
      </a>
    </li>

  </ul>
</div>
    </>
  )
}

export default Quick_Resource