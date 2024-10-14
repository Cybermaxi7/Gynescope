export default function HeaderInput() {
    return (
        <div className="relative my-6">
            <input
                id="id-s03"
                type="search"
                name="id-s03"
                placeholder="Search here"
                aria-label="Search content"
                className="relative w-full h-10 px-4 pr-12 text-sm transition-all border border-[#1c1c1c] rounded-3xl outline-none focus-visible:outline-none peer text-slate-500 autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-[#1C7DB4] focus:outline-none invalid:focus:border-pink-500 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
            />
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute top-2.5 right-4 h-5 w-5 cursor-pointer stroke-[#1c1c1c] peer-disabled:cursor-not-allowed"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-hidden="true"
                aria-label="Search icon"
                role="graphics-symbol"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
            </svg>
        </div>
    );
}
