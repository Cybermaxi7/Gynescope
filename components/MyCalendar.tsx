"use client";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Calendar = () => {
    const today = new Date();
    const [currentDate, setCurrentDate] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);

    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const formatDay = (day: number): string => {
        return day < 10 ? `0${day}` : `${day}`;
    };

    const getDaysInMonth = (date: Date) => {
        const year = date.getFullYear();
        const month = date.getMonth();
        const firstDay = new Date(year, month, 1);
        const lastDay = new Date(year, month + 1, 0);
        const daysInMonth = lastDay.getDate();
        const startingDay = firstDay.getDay();

        const previousMonth = new Date(year, month, 0);
        const daysInPreviousMonth = previousMonth.getDate();

        const days = [];

        // Add days from previous month
        for (let i = startingDay - 1; i >= 0; i--) {
            days.push({
                date: daysInPreviousMonth - i,
                isCurrentMonth: false,
                isPreviousMonth: true,
            });
        }

        // Add days from current month
        for (let i = 1; i <= daysInMonth; i++) {
            days.push({
                date: i,
                isCurrentMonth: true,
                isPreviousMonth: false,
            });
        }

        // Add days from next month
        const remainingDays = 42 - days.length; // 6 rows × 7 days = 42
        for (let i = 1; i <= remainingDays; i++) {
            days.push({
                date: i,
                isCurrentMonth: false,
                isPreviousMonth: false,
            });
        }

        return days;
    };

    const previousMonth = () => {
        setCurrentDate(
            new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
        );
    };

    const nextMonth = () => {
        setCurrentDate(
            new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
        );
    };

    const handleDateClick = (day: number, isCurrentMonth: boolean) => {
        if (isCurrentMonth) {
            setSelectedDate(
                new Date(currentDate.getFullYear(), currentDate.getMonth(), day)
            );
        }
    };

    const isToday = (day: number): boolean => {
        return (
            day === today.getDate() &&
            currentDate.getMonth() === today.getMonth() &&
            currentDate.getFullYear() === today.getFullYear()
        );
    };

    const days = getDaysInMonth(currentDate);

    return (
        <div
            data-aos="flip-right"
            className="bg-[#1C7DB4] rounded-lg p-4 text-white font-poppins"
        >
            <div className="flex justify-between items-center mb-4">
                <button onClick={previousMonth} className="text-white">
                    <ChevronLeft size={20} />
                </button>
                <h2 className="text-lg font-semibold">
                    {months[currentDate.getMonth()]} {currentDate.getFullYear()}
                </h2>
                <button onClick={nextMonth} className="text-white">
                    <ChevronRight size={20} />
                </button>
            </div>

            <div className="grid grid-cols-7 gap-1">
                {daysOfWeek.map((day) => (
                    <div key={day} className="text-center text-sm py-2">
                        {day}
                    </div>
                ))}

                {days.map((day, index) => (
                    <button
                        key={index}
                        onClick={() =>
                            handleDateClick(day.date, day.isCurrentMonth)
                        }
                        className={`
              aspect-square p-2 text-sm rounded-full
              flex items-center justify-center
              ${!day.isCurrentMonth ? "text-gray-400" : "hover:bg-[#2488BD]"}
              ${
                  selectedDate &&
                  selectedDate.getDate() === day.date &&
                  selectedDate.getMonth() === currentDate.getMonth()
                      ? "bg-[#F98E30]"
                      : isToday(day.date) && !selectedDate && day.isCurrentMonth
                      ? "bg-[#F98E30]"
                      : ""
              }
            `}
                    >
                        {formatDay(day.date)}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Calendar;
