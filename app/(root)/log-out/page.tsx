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
            <div className="flex items-center justify-center w-full mt-[10rem]">
                <Button
                    onClick={handleSignOut}
                    disabled={loading}
                    className="bg-blue-500 text-white"
                >
                    {loading ? "Logging out..." : "Sign Out"}
                </Button>
            </div>
        </div>
    );
}
