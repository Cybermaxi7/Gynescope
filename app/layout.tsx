import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { AOSInit } from "@/components/aos";

const poppins = Poppins({
    subsets: ["latin"],
    variable: "--font-poppins",
    weight: ["100", "200", "400", "500", "600", "700", "800", "900"],
    // display: "swap",
});

export const metadata: Metadata = {
    title: "Genyscope",
    description: "Genyscope is a modern laboratory test and operations plaform",
    icons: {
        icon: "/icons/logo.svg",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <AOSInit />

            <body className={`${poppins.variable} antialiased w-full`}>
                {children}
            </body>
        </html>
    );
}
