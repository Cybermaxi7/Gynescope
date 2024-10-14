import Image from "next/image";
import HeaderInput from "./HeaderInput";

export default function MessageSidebar() {
    return (
        <div className="flex flex-col w-full px-4 mt-10">
            <div className="flex items-center gap-2 py-2 md:py-0">
                <Image
                    src="/images/victor.jpg"
                    alt="ada image"
                    width={40}
                    height={40}
                    className="rounded-full border border-[#1C7DB4] object-cover h-10 w-10"
                />
                <div>
                    <h3 className="text-[#09126E] font-bold text-sm md:text-lg ">
                        Victor Osagwe
                    </h3>
                    <p className="hidden sm:block text-sm 2xl:text-base text-[#1c1c1c] ">
                        Laboratory Scientist
                    </p>
                </div>
            </div>
            <div className="mt-5">
                <HeaderInput />
            </div>
            <div className="flex flex-col gap-6 mt-6">
                <h3 className="text-xs font-bold">Groups</h3>
                <div className="flex flex-col gap-1 text-xs">
                    <div className="flex items-center justify-between">
                        <p className="text-[#1C7DB4] font-bold">#Staffs</p>
                        <p>12:55pm</p>
                    </div>
                    <div className="flex items-center justify-between">
                        <p>Hi Everyone</p>
                        <span className="w-2 h-2 bg-[#1C7DB4] block rounded-full"></span>
                    </div>
                </div>
                <div className="flex flex-col gap-1 text-xs">
                    <div className="flex items-center justify-between">
                        <p className="text-[#1C7DB4] font-bold">#Doctors</p>
                        <p>10:15pm</p>
                    </div>
                    <div className="flex items-center justify-between">
                        <p>Hi Everyone</p>
                        <span className="w-2 h-2 bg-[#1C7DB4] block rounded-full"></span>
                    </div>
                </div>
            </div>
            <hr className="border-1/2 border-[#1C7DB4] mt-10 mb-4" />

            <div className="flex flex-col gap-6 mt-6">
                <h3 className="text-xs font-bold">Recent Chats</h3>
                <div className="flex flex-col gap-1 text-xs">
                    <div className="flex items-center justify-between">
                        <p className="text-[#1C7DB4] font-bold">Nurse Ada</p>
                        <p>12:55pm</p>
                    </div>
                    <div className="flex items-center justify-between">
                        <p>Hi Everyone</p>
                        <span className="w-2 h-2 bg-[#1C7DB4] block rounded-full"></span>
                    </div>
                </div>
                <div className="flex flex-col gap-1 text-xs">
                    <div className="flex items-center justify-between">
                        <p className="text-[#1C7DB4] font-bold">#Doctors</p>
                        <p>10:15pm</p>
                    </div>
                    <div className="flex items-center justify-between">
                        <p>Hi Everyone</p>
                        <span className="w-2 h-2 bg-[#1C7DB4] block rounded-full"></span>
                    </div>
                </div>
            </div>
        </div>
    );
}
