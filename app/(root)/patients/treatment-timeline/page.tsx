interface TimelineItem {
    id: number;
    person: string;
    role: string;
    action: string;
    time: string;
}

const timelineData: TimelineItem[] = [
    {
        id: 1,
        person: "Admin Charity",
        role: "Created patient hospital record",
        action: "",
        time: "09:45 am 22/07/2022",
    },
    {
        id: 2,
        person: "Nurse Roselyn",
        role: "Updated patient's medical record",
        action: "",
        time: "10:00 am 22/07/2022",
    },
    {
        id: 3,
        person: "Dr. Henry",
        role: "Investigation:",
        action: "Treatment: Remarks & Summary:",
        time: "10:00 am 22/07/2022",
    },
    {
        id: 4,
        person: "Nurse Roselyn",
        role: "Updated patient's medical record",
        action: "",
        time: "10:00 am 22/07/2022",
    },
    {
        id: 5,
        person: "Lab Victor",
        role: "Laboratory test Results",
        action: "",
        time: "10:00 am 22/07/2022",
    },
];
export default function TreatmentTimeline() {
    return (
        <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex flex-col xl:flex-row gap-6 ">
                {/* Left side - Title */}
                <div className="lg:w-64">
                    <h2 className="text-sm font-medium text-[#1c1c1c]">
                        Treatment Timeline
                    </h2>
                    <p className="text-[13px] text-gray-500 mt-1">
                        View treatment timeline
                    </p>
                </div>

                {/* Right side - Details Grid */}
                <div className="flex-1 bg-gray-50 rounded-lg p-4 overflow-x-auto">
                    <div className="grid grid-cols-1 gap-4">
                        {timelineData.map((item) => (
                            <div
                                key={item.id}
                                className="relative flex items-start space-x-4"
                            >
                                {/* Timeline Line and Circle */}
                                <div className="flex flex-col items-center">
                                    <div className="w-4 h-4 rounded-full bg-blue-300"></div>
                                    <div className="h-full w-0.5 bg-blue-300"></div>
                                </div>

                                {/* Content */}
                                <div className="flex-1">
                                    <div className="flex justify-between">
                                        <div>
                                            <div className="flex flex-col 2xl:flex-row 2xl:gap-4 ">
                                                <p className="font-medium text-xs lg:text-sm text-[#1c1c1c]">
                                                    {item.person}
                                                </p>
                                                <p className="text-xs lg:text-sm font-light text-[#1c1c1c]">
                                                    {item.role}
                                                </p>
                                            </div>
                                            {item.action && (
                                                <div className="mt-1">
                                                    <p className="font-light tracking-[5%] text-[#1c1c1c] text-xs">
                                                        {item.action}
                                                    </p>
                                                </div>
                                            )}
                                        </div>
                                        <p className="text-xs text-[#1c1c1c]">
                                            {item.time}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
