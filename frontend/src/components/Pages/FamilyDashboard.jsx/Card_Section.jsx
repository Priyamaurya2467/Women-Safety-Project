import React from 'react'

function Card_Section() {
    const cards = [
        {
            "img":"https://lh3.googleusercontent.com/aida-public/AB6AXuBqdwH6kSWwpX3CQyE692dvQFimgTSrGEgpYb7EEIvgGJoaTGo892RpzTV00B62MJAWQkCS116bOVnnj0BU4PKIcxJaFYi5mnErc5viQXSrB8aRy9hBNpjybk9LW0gUiVsoQBT31MIV3_s7mYjm9AYmEZikBSVNuOl9S3A0Ju53DlPDgI8hoOWg2aVzhv8_oJ7jwC0N6Y3E9L_nqKtC1kjJYTCczfKxQ8AxeE3g55we5fSSDXNcghVXUgTQn_F7TP65Y4Av3zNsfKXe",
            "name":"Maya",
            "status":"Safe at Home",
            
        },
        {
            "img":"https://lh3.googleusercontent.com/aida-public/AB6AXuCat0lEcWtzZb1i9ZvF3fFSWBmSzbALpJbBaPXRQnBsYVYxxUajOd_t9G2lNnnHPQ83ezAv92ImNqandLN3_7MQVL0JlNLPI0-MQMHK6MZ-DVkffaqGJnL2PAwZeMbi_f798GwdJlzD0b4wq5IF0pKVgJmgokZaBWgMZWVlysAtNu_GHHEa1U12Yet3S6W0KTHza2XUAiifyev525wPldXZHtV0VAnVKTlwREOklqehokOBRjnMtQdGf0100ufh9Yd84KEl1P33wPvR",
            "name":"Sarah",
            "status":"In Transit (8 min)",
            
        },
        {
            "img":"https://lh3.googleusercontent.com/aida-public/AB6AXuDtfaeh1_g6jzA0unzqgLSkjXHyL2MXFjsfcCAdNYtnZWb6FTvoj9fl8xwQD24aPAkPF6LKrqgEVD9aMa7SL4GuXxy5bDeZnnrBzuJFUMMBgn81ujAi60oe66PuD5uhRd6Y2hl4LtmxYwoeG4TrnpMnEUR0L0gXqvZAMPkMddAnU1DCA_6UDDa9zRmw6NVD7y6vZVwDgYN3mb6LUzaJH-RVGsFqeD6cio71-S_IURgDA9cs2UAvt616ulXKzF5HU56-8Cw0ATzgTOfp",

        }
    ]
  return (
    <>


    <div className="group flex flex-col gap-6 rounded-xl border border-gray-200 bg-white p-6 transition-shadow hover:shadow-md">
        <div className="flex items-start justify-between">
            <div className="flex items-center gap-4">
                {cards.map((card, index) => (
        <div key={index} className="flex items-center gap-4">
            <div className="h-12 w-12 overflow-hidden rounded-full border border-gray-200 bg-gray-100">
            <img
                src={card.image}
                alt={card.name}
                className="h-full w-full object-cover"
            />
            </div>

            <div>
            <h3 className="text-lg font-semibold text-gray-900">
                {card.name}
            </h3>

            <div className="mt-1 flex items-center gap-1">
                <span className="h-2 w-2 rounded-full bg-green-500"></span>
                <span className="text-xs font-medium text-green-600">
                {card.status}
                </span>
            </div>
            </div>
        </div>
        ))}
            
            </div>

            <span className="material-symbols-outlined cursor-pointer text-gray-400 transition-colors group-hover:text-blue-600">
            more_vert
            </span>
        </div>

        <div className="flex gap-4">
            <button className="flex-1 rounded-lg bg-blue-600 py-2 text-sm font-medium text-white transition-all active:scale-95 hover:bg-blue-700">
            Locate
            </button>

            <button className="rounded-lg bg-gray-100 px-4 text-gray-700 transition-all hover:bg-gray-200">
            <span className="material-symbols-outlined">
                chat
            </span>
            </button>
        </div>

        <div class="border-2 border-dashed border-outline-variant p-lg rounded-xl flex flex-col items-center justify-center gap-sm text-on-surface-variant hover:bg-surface-container-low transition-all cursor-pointer">
            <span class="material-symbols-outlined text-3xl" data-icon="add_circle">add_circle</span>
            <span class="font-label-md">Add Family Member</span>
        </div>
    </div>



    </>
  )
}

export default Card_Section