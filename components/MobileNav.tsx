"use client";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import sidebarItems from "@/lib/sidebarItems";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { RiMenu2Fill } from "react-icons/ri";

export default function MobileNav() {
    const pathname = usePathname();
    return (
        <nav className="w-full max-w-[194px]">
            <Sheet>
                <SheetTrigger className="mt-3  mr-3">
                    <RiMenu2Fill className="text-4xl" />
                </SheetTrigger>
                <SheetContent
                    className="flex flex-col w-[140px] bg-[#1C7DB4] fixed border-none z-[999]"
                    side="left"
                >
                    <SheetHeader>
                        <SheetTitle className="hidden">Sidebar</SheetTitle>
                        <SheetDescription className="hidden">
                            My Sidebar
                        </SheetDescription>
                        <Link href="/" className="w-full">
                            <Image
                                src="/icons/dashboardlogo.svg"
                                width={160}
                                height={60}
                                className="max-w-max absolute top-2 left-2"
                                alt="genyscope logo"
                            />
                        </Link>
                        <div className="mobilenav-sheet">
                            <SheetClose asChild>
                                <nav className="flex h-full flex-col gap-2 pt-16 text-white">
                                    {sidebarItems.map((link) => {
                                        const isActive = pathname === link.link; // Check if the current route matches the link

                                        return (
                                            <SheetClose asChild key={link.link}>
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
                                            </SheetClose>
                                        );
                                    })}
                                </nav>
                            </SheetClose>
                        </div>
                    </SheetHeader>
                </SheetContent>
            </Sheet>
        </nav>
    );
}
