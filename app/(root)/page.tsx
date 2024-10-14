import Calendar from "@/components/MyCalendar";
import FindPatientsCard from "@/components/FindPatientsCard";
import LabInfoSystem from "@/components/LabInfoSystem";
import Overview from "@/components/Overview";
import OverviewTestCards from "@/components/OverviewTestCards";
import RecentLabTests from "@/components/RecentLabTests";
import ScheduledTasks from "@/components/ScheduledTasks";

import React from "react";
import Header from "@/components/Header";

export default function Home() {
    return (
        <div>
            <Header heading="Good Day," subheading="Have a good day at work." />
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
