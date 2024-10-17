"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import Image from "next/image";
import Header from "@/components/Header";
import { FiUser } from "react-icons/fi";
import { RiEqualizerLine } from "react-icons/ri";
import { IoImagesOutline } from "react-icons/io5";
import { GoBeaker } from "react-icons/go";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();

    const sidebarItems = [
        {
            title: "Profile Overview",
            href: "/patients/overview",
            icon: FiUser,
            activeColor: "text-white",
            inactiveColor: "text-[#0EA5E9]",
        },
        {
            title: "Treatment Timeline",
            href: "/patients/treatment-timeline",
            icon: RiEqualizerLine,
            activeColor: "text-white",
            inactiveColor: "text-[#0EA5E9]",
        },
        {
            title: "Images & Documents",
            href: "/patients/image-docs",
            icon: IoImagesOutline,
            activeColor: "text-white",
            inactiveColor: "text-[#0EA5E9]",
        },
        {
            title: "Laboratory",
            href: "/patients/laboratory",
            icon: GoBeaker,
            activeColor: "text-white",
            inactiveColor: "text-[#0EA5E9]",
        },
    ];

    return (
        <>
            <div>
                <Header
                    heading="Bella Geoffrey"
                    subheading="> Profile Overview"
                />
                <div className="w-full mb-10 flex">
                    <div className="bg-[#edf6fb] flex flex-col items-center md:items-start gap-1 min-h-screen w-fit md:w-[290px] px-3 py-4">
                        <div className="p-2 bg-[#f6f9fc] w-8 h-8 rounded-full border border-[#A0AAAF] mb-1 flex items-center ">
                            <Image
                                src="/icons/user.svg"
                                width={20}
                                height={20}
                                alt="user icon"
                            />
                        </div>
                        <h3 className="hidden sm:block text-[#1C7DB4] font-semibold text-base">
                            Bella Geoffrey
                        </h3>

                        <p className="font-medium text-xs hidden sm:flex gap-1 mb-1">
                            File Number:
                            <span className="font-light">Reg100</span>
                        </p>
                        <div className="flex flex-wrap gap-2">
                            <div className="hidden sm:flex items-center gap-1">
                                <div className="bg-[#1C7DB4] w-[6px] rounded-full h-[6px]"></div>
                                <p className="font-medium text-xs tracking-[5%] flex items-center gap-1">
                                    Date of Birth:
                                    <span className="font-light">
                                        22-07-1989
                                    </span>
                                </p>
                            </div>
                            <div className="hidden md:flex items-center gap-1">
                                <div className="bg-[#1C7DB4] w-[6px] rounded-full h-[6px]"></div>
                                <p className="font-medium text-xs tracking-[5%] flex items-center gap-1">
                                    Age:
                                    <span className="font-light">39 years</span>
                                </p>
                            </div>
                            <div className="hidden md:flex items-center gap-1">
                                <div className="bg-[#1C7DB4] w-[6px] rounded-full h-[6px]"></div>
                                <p className="font-medium text-xs tracking-[5%] flex items-center gap-1">
                                    Gender
                                    <span className="font-light">Female</span>
                                </p>
                            </div>
                            <div className="hidden md:flex items-center gap-1">
                                <div className="bg-[#1C7DB4] w-[6px] rounded-full h-[6px]"></div>
                                <p className="font-medium text-xs tracking-[5%] flex items-center gap-1">
                                    E-mail:
                                    <span className="font-light">
                                        bellageoffrey@gmail.com
                                    </span>
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 w-fit  items-center gap-4 mt-4 flex-wrap">
                            <div className="flex flex-col justify-start items-center">
                                <div className="w-10 h-8 p-2 bg-[#9CCDFE]/50 rounded flex items-center justify-center">
                                    <Image
                                        src="/icons/message-2.svg"
                                        width={100}
                                        height={100}
                                        alt="message-icon"
                                    />
                                </div>
                                <p className="text-[#1c1c1c] font-medium text-xs tracking-[5%]">
                                    Message
                                </p>
                            </div>
                            <div className="flex flex-col justify-start items-center">
                                <div className="w-10 h-8 p-2 bg-[#9CCDFE]/50 rounded flex items-center justify-center">
                                    <Image
                                        src="/icons/mail.svg"
                                        width={100}
                                        height={100}
                                        alt="message-icon"
                                    />
                                </div>
                                <p className="text-[#1c1c1c] font-medium text-xs tracking-[5%]">
                                    SMS
                                </p>
                            </div>
                            <div className="flex flex-col justify-start items-center">
                                <div className="w-10 h-8 p-2 bg-[#9CCDFE]/50 rounded flex items-center justify-center">
                                    <Image
                                        src="/icons/write.svg"
                                        width={100}
                                        height={100}
                                        alt="message-icon"
                                    />
                                </div>
                                <p className="text-[#1c1c1c] font-medium text-xs tracking-[5%]">
                                    Edit
                                </p>
                            </div>
                            <div className="flex flex-col justify-start items-center">
                                <div className="w-10 h-8 p-2 bg-[#9CCDFE]/50 rounded flex items-center justify-center">
                                    <Image
                                        src="/icons/vertical-dot.svg"
                                        width={5}
                                        height={5}
                                        alt="message-icon"
                                    />
                                </div>
                                <p className="text-[#1c1c1c] font-medium text-xs tracking-[5%]">
                                    More
                                </p>
                            </div>
                        </div>
                        <nav className="mt-16 space-y-2">
                            {sidebarItems.map((item) => {
                                // const Icon = item.icon;
                                const isActive = pathname === item.href;

                                return (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all w-fit group ${
                                            isActive
                                                ? "bg-[#F97316] text-white"
                                                : "text-[#0369A1] hover:bg-white/60"
                                        }`}
                                    >
                                        <item.icon
                                            size={24}
                                            className={
                                                isActive
                                                    ? item.activeColor
                                                    : item.inactiveColor
                                            }
                                        />
                                        <span
                                            className={`hidden md:block text-sm ${
                                                isActive
                                                    ? "font-bold text-white"
                                                    : "font-medium text-[#1C7DB4]"
                                            }`}
                                        >
                                            {item.title}
                                        </span>
                                    </Link>
                                );
                            })}
                        </nav>
                    </div>
                    <main className="flex-1 p-2 md:p-8">{children}</main>
                </div>
            </div>
        </>
    );
}
