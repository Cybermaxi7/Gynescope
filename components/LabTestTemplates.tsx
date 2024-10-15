"use client";
import { labTestTemplatesCardData } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import CountUp from "react-countup";

export default function LabTestTemplates() {
    return (
        <div className="flex flex-col mt-5">
            <h3 className="uppercase text-base md:text-lg font-semibold tracking-[2%] pb-1 border-b border-[#E2E3E4]">
                Laboratory test templates
            </h3>
            <div className="grid sm:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-4 mt-3">
                {labTestTemplatesCardData.map((data, index) => (
                    <Link
                        href={data.link}
                        data-aos="fade-left"
                        key={index}
                        className="bg-white flex justify-between rounded-[10px] px-3 py-4 h-24 md:h-auto"
                    >
                        <div className="text-[#1c1c1c] flex flex-col gap-2">
                            <h2 className="text-xs md:text-sm font-normal">
                                {data.name}
                            </h2>
                            <p className="text-base md:text-lg font-semibold ">
                                <CountUp end={data.value} duration={3} />
                            </p>
                        </div>
                        <Image
                            src={data.iconPath}
                            width={40}
                            height={40}
                            alt="lab icon test tube"
                        />
                    </Link>
                ))}
            </div>
        </div>
    );
}
