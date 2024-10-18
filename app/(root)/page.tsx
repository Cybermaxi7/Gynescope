"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import Dashboard from "@/components/Dashboard";
import { Session } from "@supabase/supabase-js"; // Import Session type

export default function Home() {
    const router = useRouter();
    const [loading, setLoading] = useState(true);
    const [session, setSession] = useState<Session | null>(null); // Type the session state

    useEffect(() => {
        // Check if the user is signed in
        const checkSession = async () => {
            const {
                data: { session },
            } = await supabase.auth.getSession();
            if (session) {
                setSession(session); // User is signed in
            } else {
                // Redirect to sign-in page if no session is found
                router.push("/sign-in");
            }
            setLoading(false); // End loading state
        };

        checkSession();
    }, [router]);

    // While checking session, you can display a loading indicator
    if (loading) {
        return <div>Loading...</div>;
    }

    // If user is signed in, show the dashboard content
    return (
        <div>
            <Dashboard />
        </div>
    );
}
