import Image from "next/image";
import Link from "next/link";
import Nav from "./Nav";
// import MobileNav from "./MobileNav";

export default function Sidebar() {
    return (
        <div>
            <aside className="hidden md:flex flex-col w-[140px] lg:w-[150px] 2xl:w-[194px] min-h-screen bg-[#1C7DB4] fixed">
                {/* logo */}
                <Link href="/dashboard" className="w-full">
                    <Image
                        src="/icons/dashboardlogo.svg"
                        width={194}
                        height={60}
                        className="ml-4"
                        alt="genyscope logo"
                    />
                </Link>

                <Nav />
            </aside>
        </div>
    );
}
