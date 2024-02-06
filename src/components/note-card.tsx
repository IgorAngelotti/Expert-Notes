export function NoteCard() {
    return (
        <button className="rounded-md text-left bg-slate-800 p-5 space-y-3 overflow-hidden relative outline-none hover:ring-1 hover:ring-slate-600 focus-visible:ring-2 focus-visible:ring-lime-400 duration-100">
            <span className="text-sm font-medium text-slate-300" >
                Há 2 dias
            </span>
            <p className="text-sm leading-6 text-slate-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus rem quasi suscipit accusamus eum adipisci, cumque aliquam! Dicta iusto architecto porro quam. Similique dignissimos dolorum alias nemo doloremque. Ipsam, omnis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad temporibus quod ex quos, cupiditate odio at eos voluptates maxime dolore natus vel amet distinctio reprehenderit maiores nulla? Ex, debitis veritatis?
            </p>
            <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 pointer-events-none " />
        </button>
    )
}