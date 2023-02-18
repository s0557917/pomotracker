export default function PauseButton(props) {
    return(
        <button 
            {...props}
            className={"w-auto bg-white/[.1] text-center rounded-[10px] py-3 px-3 text-2xl"}
        >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-9 h-auto">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25v13.5m-7.5-13.5v13.5" />
            </svg>
        </button>
    )
}