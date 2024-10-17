import { IoIosArrowForward } from "react-icons/io";
import Image from "next/image";
import Link from "next/link";

export default function LabInfoSystem() {
    return (
        <div data-aos="zoom-in-up" className="bg-white py-4 px-3">
            <div className="grid grid-cols-1 sm:grid-cols-[3fr_1fr] gap-12">
                <div className="flex flex-col gap-2 p-3">
                    <h3 className="font-normal text-sm pb-2">
                        Built for{" "}
                        <span className="font-semibold">Lab technicians</span>
                    </h3>
                    <h2 className="font-semibold text-lg text-[#1c1c1c]">
                        Laboratory information systems
                    </h2>
                    <p className="font-light text-sm max-w-md">
                        Coordinate varieties of inpatient and outpatient medical
                        testing, including hematology, chemistry, immunology and
                        microbiology.
                    </p>
                    <Link
                        href="/test-templates"
                        className="bg-[#1C7DB4] w-fit flex items-center gap-1 text-white mt-4 p-2 rounded-md"
                    >
                        View Test Templates
                        <IoIosArrowForward />
                    </Link>
                </div>
                <div className="bg-gradient-to-r from-[#1C7DB4] to-[#0d4361] w-full flex items-end justify-start pb-5 pl-2 rounded-[10px] h-32 sm:h-full">
                    <Image
                        src="/icons/laboratory-kit.svg"
                        alt="lab kit"
                        width={90}
                        height={60}
                        className="w-16 md:w-[90px]"
                    />
                </div>
            </div>
        </div>
    );
}
