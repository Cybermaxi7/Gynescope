"use client";
import { useState } from "react";
import Header from "@/components/Header";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";
import { Button } from "@/components/ui/button";

export default function Logout() {
    const [loading, setLoading] = useState(false); // Loading state
    const router = useRouter();

    const handleSignOut = async () => {
        setLoading(true); // Start loading

        try {
            const { error } = await supabase.auth.signOut();
            if (error) throw error;

            // Redirect to sign-in page after successful sign-out
            router.push("/sign-in");
        } catch (error) {
            console.error("Failed to sign out");
        } finally {
            setLoading(false); // Stop loading after process completes
        }
    };

    return (
        <div>
            <Header heading="Logout" subheading="Logout Page" />
            <Button onClick={handleSignOut} disabled={loading}>
                {loading ? "Logging out..." : "Sign Out"}
            </Button>
        </div>
    );
}
