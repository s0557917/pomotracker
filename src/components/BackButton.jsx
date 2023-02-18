export default function BackButton(props) {
    return(
        <button 
            {...props}
            className={"bg-white/[.1] text-left rounded-[10px] py-1 px-2 text-xl leading-9 flex items-center justify-center w-1/4 mt-3"}
        >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 mr-[5px] h-auto">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>

            Back
        </button>
    )
}