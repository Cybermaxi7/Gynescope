"use client";
import Calendar from "@/components/MyCalendar";
import FindPatientsCard from "@/components/FindPatientsCard";
import LabInfoSystem from "@/components/LabInfoSystem";
import Overview from "@/components/Overview";
import { useState, useEffect } from "react";
import OverviewTestCards from "@/components/OverviewTestCards";
import RecentLabTests from "@/components/RecentLabTests";
import { Session } from "@supabase/supabase-js";
import ScheduledTasks from "@/components/ScheduledTasks";
import Header from "@/components/Header";
import { supabase } from "@/lib/supabaseClient";

export default function Dashboard() {
    const [username, setUsername] = useState<string | null>(null);

    useEffect(() => {
        const fetchUser = async () => {
            const { data, error } = await supabase.auth.getSession();
            const session: Session | null = data?.session;

            if (error) {
                console.error("Error fetching user session:", error);
            } else if (session?.user) {
                // Extract the username from the email
                const email = session.user.email ?? "Unknown User";
                const formattedUsername = email.split("@")[0]; // Get part before '@'
                setUsername(formattedUsername);
            }
        };

        fetchUser();
    }, []);

    console.log(username);
    return (
        <div>
            <Header
                heading={`Good Day, ${username}`}
                subheading="Have a good day at work."
            />
            <div className="grid grid-cols-1 xl:grid-cols-[2fr_1fr] lg:grid-cols-[60%_37%] w-full mt-7 gap-10 mb-10">
                <div className="flex flex-col gap-8">
                    <Overview />
                    <OverviewTestCards />
                </div>
                <FindPatientsCard />
                <LabInfoSystem />
                <ScheduledTasks />
                <RecentLabTests />
                <Calendar />
            </div>
        </div>
    );
}
