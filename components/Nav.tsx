"use client";

import sidebarItems from "@/lib/sidebarItems";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
    const pathname = usePathname();
    return (
        <nav>
            {sidebarItems.map((link) => {
                let isActive;

                if (link.link === "/") {
                    // Only mark the dashboard as active if the pathname is exactly "/"
                    isActive = pathname === "/";
                } else {
                    // For other routes, use startsWith to handle nested paths
                    isActive = pathname.startsWith(link.link);
                }

                return (
                    <Link
                        className={`flex flex-col items-center justify-center py-3 gap-1 transition-all duration-300 ease-in-out hover:bg-white/20 ${
                            isActive
                                ? "border-r-4 border-[#F98E30]" // Active styles
                                : "hover:border-r-4 hover:border-[#F98E30]" // Hover styles
                        }`}
                        key={link.link}
                        href={link.link}
                    >
                        <Image
                            src={link.icon}
                            width={22}
                            height={22}
                            alt={link.alt}
                        />
                        <p className="text-white text-xs font-medium">
                            {link.title}
                        </p>
                    </Link>
                );
            })}
        </nav>
    );
}
