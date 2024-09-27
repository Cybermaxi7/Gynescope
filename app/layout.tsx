import type { Metadata } from "next";
import { Poppins, IBM_Plex_Serif } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
    subsets: ["latin"],
    variable: "--font-poppins",
    weight: ["100", "200", "400", "500", "600", "700", "800", "900"],
});
const ibmPlexSerif = IBM_Plex_Serif({
    subsets: ["latin"],
    weight: ["400", "700"],
    variable: "--font-ibm-plex-serif",
});
export const metadata: Metadata = {
    title: "Horizon",
    description: "Horizon is a modern banking platform for everyone",
    icons: {
        icon: "/icon/logo.svg",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${poppins.variable} ${ibmPlexSerif.variable} antialiased`}
            >
                {children}
            </body>
        </html>
    );
}
