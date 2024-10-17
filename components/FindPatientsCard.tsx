import Link from "next/link";

import { IoIosArrowForward } from "react-icons/io";

export default function FindPatientsCard() {
    return (
        <div data-aos="fade-down" className="bg-white rounded-[10px] p-4">
            <div className=" h-full rounded-[10px] relative bg-[url('/images/laboratory.jpg')] bg-cover bg-center">
                <div className="absolute inset-0 bg-[#1C7DB4]/85 rounded-[10px]"></div>

                <div className="z-20 relative px-4 pt-8 pb-3 rounded-[10px] flex flex-col h-full justify-between gap-8">
                    <div className="flex flex-col gap-3">
                        <h2 className="font-medium text-lg text-[#FAFAFD]">
                            Find Patient's Record
                        </h2>
                        <p className="font-light text-sm text-white">
                            Get access to patient's record for laboratory test
                            requests and processing
                        </p>
                    </div>
                    <Link
                        href="/patients"
                        className="bg-white w-fit flex items-center gap-1 p-2 rounded-md"
                    >
                        Find Patient
                        <IoIosArrowForward />
                    </Link>
                </div>
            </div>
        </div>
    );
}
