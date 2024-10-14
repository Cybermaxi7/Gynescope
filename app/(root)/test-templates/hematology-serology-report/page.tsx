"use client";
import Header from "@/components/Header";
import HematologySeroloyForm from "@/components/HematologySeroloyForm";
import { patientsLabData } from "@/lib/data";
import { useState } from "react";

type FormStep = number;
export default function HermatologySerelogyReport() {
    const [currentStep, setCurrentStep] = useState<FormStep>(1);

    const handleNext = () => {
        setCurrentStep((prev) => prev + 1);
    };

    const handlePrev = () => {
        setCurrentStep((prev) => prev - 1);
    };
    return (
        <div className="flex flex-col w-full">
            <Header
                heading="Hematology/Serology Report"
                subheading="Appnovia Hospital Test Templates"
            />
            <div className="flex flex-col p-4 md:p-7">
                <div className="rounded-[10px] border-[#E2E3E4] border p-4 w-full mt-2 ">
                    <h2 className="text-base md:text-lg font-semibold uppercase border-b border-[#1c1c1c] mb-9">
                        Patient's Laboratory Details
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 w-full gap-4 md:gap-6 ">
                        {patientsLabData.map((patientsData, index) => (
                            <>
                                <div
                                    key={index}
                                    className="flex gap-1 justify-center sm:justify-start "
                                >
                                    <p className="text-xs md:text-sm font-semibold tracking-[2%]">
                                        Name:
                                    </p>
                                    <p className="text-xs md:text-sm font-normal tracking-[2%]">
                                        {patientsData.name}
                                    </p>
                                </div>
                                <div
                                    key={index}
                                    className="flex gap-1 justify-center sm:justify-start"
                                >
                                    <p className="text-xs md:text-sm font-semibold tracking-[2%]">
                                        Gender:
                                    </p>
                                    <p className="text-xs md:text-sm font-normal tracking-[2%]">
                                        {patientsData.gender}
                                    </p>
                                </div>
                                <div
                                    key={index}
                                    className="flex gap-1 justify-center sm:justify-start"
                                >
                                    <p className="text-xs md:text-sm font-semibold tracking-[2%]">
                                        File Number:
                                    </p>
                                    <p className="text-xs md:text-sm font-normal tracking-[2%]">
                                        {patientsData.fileNumber}
                                    </p>
                                </div>
                                <div
                                    key={index}
                                    className="flex gap-1 justify-center sm:justify-start"
                                >
                                    <p className="text-xs md:text-sm font-semibold tracking-[2%]">
                                        Lab Number:
                                    </p>
                                    <p className="text-xs md:text-sm font-normal tracking-[2%]">
                                        {patientsData.labNumber}
                                    </p>
                                </div>
                                <div
                                    key={index}
                                    className="flex gap-1 justify-center sm:justify-start"
                                >
                                    <p className="text-xs md:text-sm font-semibold tracking-[2%]">
                                        Age:
                                    </p>
                                    <p className="text-xs md:text-sm font-normal tracking-[2%]">
                                        {patientsData.age}
                                    </p>
                                </div>
                            </>
                        ))}
                    </div>
                </div>
                <HematologySeroloyForm
                    currentStep={currentStep}
                    handleNext={handleNext}
                    handlePrev={handlePrev}
                />
            </div>
        </div>
    );
}
