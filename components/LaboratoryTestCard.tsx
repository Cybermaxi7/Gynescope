"use client";
import { laboratoryTestCards } from "@/lib/data";
import { cn } from "@/lib/utils";
import Image from "next/image";
import CountUp from "react-countup";

export default function LaboratoryTestCard() {
    return (
        <div className="grid  grid-cols-1 lg:grid-cols-3 gap-4 w-full">
            {laboratoryTestCards.map((data, index) => (
                <div
                    data-aos="fade-left"
                    key={index}
                    className={cn(
                        "bg-white flex justify-between rounded-[10px] px-3 py-4 h-24 md:h-auto",
                        data.first && "border-l-8 border-[#F98E30]"
                    )}
                >
                    <div className="text-[#1c1c1c] flex flex-col gap-2">
                        <h2 className="text-xs md:text-sm font-normal">
                            {data.title}
                        </h2>
                        <p className="text-base md:text-lg font-semibold ">
                            <CountUp end={data.value} duration={3} />
                        </p>
                    </div>
                    <Image
                        src={data.icon}
                        width={40}
                        height={40}
                        alt="lab icon test tube"
                    />
                </div>
            ))}
        </div>
    );
}
