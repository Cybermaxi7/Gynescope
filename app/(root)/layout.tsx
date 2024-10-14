import Sidebar from "@/components/Sidebar";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className="flex min-h-screen w-full flex-1 font-poppins text-[#1c1c1c]">
            <Sidebar />
            <div className="flex-1  ml-0 md:ml-[140px] lg:ml-[150px] 2xl:ml-[194px] bg-[#f6f9fc] px-2 md:px-6 md:mt-[76px] lg:px-8 mt-[131px] xs:mt-[76px] xl:mt-[104px] table-width">
                {children}
            </div>
        </main>
    );
}
