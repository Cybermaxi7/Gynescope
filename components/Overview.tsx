"use client";
import { overviewData } from "@/lib/data";
import CountUp from "react-countup";

export default function Overview() {
    return (
        <div
            data-aos="zoom-in"
            className="bg-[#1C7DB4] flex flex-col p-5 text-white gap-6 rounded-[10px]"
        >
            <h4 className="font-light text-lg">Overview</h4>
            <div className="grid gap-3 items-center justify-center grid-cols-2 sm:grid-cols-3  lg:grid-cols-3 xl:grid-cols-5">
                {overviewData.map((data, index) => (
                    <div key={index} className="flex flex-col items-center">
                        <h3 className="font-semibold text-2xl">
                            <CountUp end={data.value} duration={3} />
                        </h3>
                        <p className="font-medium text-xs sm:text-sm  lg:text-base text-center whitespace-nowrap">
                            {data.title}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}
