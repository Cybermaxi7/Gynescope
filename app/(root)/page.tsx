"use client";
// app/page.tsx (if using the new App Router)

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
    const router = useRouter();

    useEffect(() => {
        // Redirect to the /sign-up page on page load
        router.push("/sign-up");
    }, [router]);

    return null; // Nothing will be rendered since we are redirecting
}
