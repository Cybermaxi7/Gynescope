"use client";
import { useState, useEffect, Suspense } from "react";
import { Session } from "@supabase/supabase-js"; // Import Session type
import { useRouter } from "next/navigation";
import Sidebar from "@/components/Sidebar";
import { supabase } from "@/lib/supabaseClient";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const router = useRouter();
    const [loading, setLoading] = useState(true);
    const [session, setSession] = useState<Session | null>(null); // Use Session type

    useEffect(() => {
        const checkSession = async () => {
            const { data } = await supabase.auth.getSession();
            if (!data.session) {
                // If no session, redirect to sign-in page
                router.push("/sign-in");
            } else {
                setSession(data.session);
            }
            setLoading(false);
        };
        checkSession();
    }, [router]);

    if (loading) return <div>Loading...</div>;

    return (
        <Suspense fallback={<div>Loading ...</div>}>
            <main className="flex min-h-screen w-full flex-1 font-poppins text-[#1c1c1c]">
                <Sidebar />
                <div className="flex-1 ml-0 md:ml-[140px] lg:ml-[150px] 2xl:ml-[194px] bg-[#f6f9fc] px-2 md:px-6 md:mt-[76px] lg:px-8 mt-[131px] xs:mt-[76px] xl:mt-[104px] table-width">
                    {children}
                </div>
            </main>
        </Suspense>
    );
}
