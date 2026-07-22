import React from 'react'

function Trusted() {
  return (
    <>

    {/* Trusted Circle Card */}
    <section className="flex flex-col gap-4 rounded-2xl border border-gray-200 bg-white p-6 shadow-md">

    {/* Header */}
    <div className="flex items-center justify-between">
        <h3 className="text-sm font-bold uppercase tracking-wide text-gray-900">
        Trusted Circle
        </h3>

        <span className="rounded-full bg-blue-100 px-2 py-1 text-[10px] font-bold uppercase text-blue-600">
        3 Active
        </span>
    </div>

    {/* Members */}
    <div className="space-y-3">

        {/* Member 1 */}
        <div className="group flex cursor-default items-center justify-between rounded-xl p-3 transition hover:bg-gray-50">

        <div className="flex items-center gap-4">
            <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuACALX5KsKtnL4pmrk1SkOMz5etwow80coMUtC8QWxWBW6LmBCFx7Lh1Co7dum2YbYjLZ-EakMjdzsseWouWkDjf9zv0M6Gi5qKQwGHePmOYxpSRZlyEDZ0PG9L4ITUhfldCpNtXAC96ItKA3vpMJGlbd7RVDKUoFVZpV0en52hY0az6P8QoznLQI7vpjysVt4y1T22q50cU9s_h498oCDykKZtHCzTnGNHwpzpXbiNPTxWnQs08F1TEfZeSq0-mitOI3fOGNEeZbfP"
            alt="Michael Chen"
            className="h-10 w-10 rounded-full object-cover"
            />

            <div>
            <p className="text-sm font-bold text-gray-900">
                Michael Chen
            </p>

            <p className="flex items-center gap-1 text-[10px] font-bold text-red-600">
                <span className="material-symbols-outlined text-[12px]">
                near_me
                </span>
                Responding
            </p>
            </div>
        </div>

        <span className="text-[10px] font-medium text-gray-500">
            2m ago
        </span>
        </div>

        {/* Member 2 */}
        <div className="group flex cursor-default items-center justify-between rounded-xl p-3 transition hover:bg-gray-50">

        <div className="flex items-center gap-4">
            <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCpR6zhEletoSiXesFCLy8JvlwJcvdfrymmT11LMsQkI-Toya6x49sAKc-r1PfCNUxxHSw-z_ZDC5QzhZg5jxG5uxIfydRaxxWOyMQ28TP_R8wiNDvJ_N3l0uKVsduHUdy1ff1k9rg41__Vnh91Pi4kdE6ejQw4jJ7WatZj6GMFAtqvgmOB_vnYheFA72yT_v619WRBkaKmW-RLTkXbYlklJNDJXOIsbAdRE9bA5-19xjmoS8xlfnDp5E8oZ8nC7EWoEgdmJVHxyCjz"
            alt="Sarah Jenkins"
            className="h-10 w-10 rounded-full object-cover"
            />

            <div>
            <p className="text-sm font-bold text-gray-900">
                Sarah Jenkins
            </p>

            <p className="flex items-center gap-1 text-[10px] font-bold text-green-600">
                <span className="material-symbols-outlined text-[12px]">
                check_circle
                </span>
                Notified
            </p>
            </div>
        </div>

        <span className="text-[10px] font-medium text-gray-500">
            4m ago
        </span>
        </div>

    </div>

    </section>
    
    </>
  )
}

export default Trusted