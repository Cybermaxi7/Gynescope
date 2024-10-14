import Image from "next/image";
import { Button } from "./ui/button";

export default function ScheduledTasks() {
    return (
        <div
            data-aos="zoom-in-down"
            className="bg-white py-4 px-6 rounded-[10px]"
        >
            <div className="flex justify-between flex-col md:flex-row lg:flex-col xl:flex-row">
                <h2 className="text-[#09126E] font-semibold text-lg">
                    Scheduled Tasks
                </h2>
                <Button className="bg-[#1C7DB4] font-normal text-sm text-white flex items-center gap-2">
                    <Image
                        src="/icons/plus.svg"
                        width={20}
                        height={20}
                        alt="plus icon"
                    />
                    Add Task
                </Button>
            </div>
            <div className="flex gap-12 lg:gap-4 2xl:gap-6 mt-10">
                <div className="flex flex-col gap-3">
                    <h3 className="font-semibold text-[#1c1c1c] tracking-[2%] text-base">
                        Tasks
                    </h3>
                    <p className=" text-[#1c1c1c] font-medium text-xs md:text-sm tracking-[2%]">
                        Call Roselyn Barium
                    </p>
                    <p className=" text-[#1c1c1c] font-medium text-xs md:text-sm tracking-[2%]">
                        Call Roselyn Barium
                    </p>
                </div>
                <div className="flex flex-col gap-3">
                    <h3 className="font-semibold text-[#1c1c1c] tracking-[2%] text-base">
                        Date & Time
                    </h3>
                    <p className="flex gap-4 text-[#1c1c1c] font-normal text-xs md:text-sm tracking-[2%]">
                        19-07-2021 <span>2:38 pm</span>
                    </p>
                    <p className="flex gap-4 text-[#1c1c1c] font-normal text-xs md:text-sm tracking-[2%]">
                        19-07-2021 <span>2:38 pm</span>
                    </p>
                </div>
            </div>
        </div>
    );
}
