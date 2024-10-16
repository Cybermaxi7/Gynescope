import Image from "next/image";
import { Button } from "./ui/button";
import { patientsLabData } from "@/lib/data";
import Link from "next/link";

export default function PatientLabDetails() {
    return (
        <div className="rounded-[10px] border-[#E2E3E4] border p-2 w-full mt-2">
            <div className="flex flex-col sm:flex-row items-center justify-between mb-2">
                <h2 className="text-base md:text-lg font-semibold uppercase">
                    Patient's Laboratory Details
                </h2>
                <Link
                    href="/patients/overview"
                    className="font-medium text-xs md:text-sm text-[#1C7DB4] flex items-center gap-1 border rounded-[10px] border-[#B5B5B5] p-2"
                >
                    <Image
                        src="/icons/blue-user.svg"
                        alt="blue user icon"
                        width={15}
                        height={15}
                    />
                    View Patient Profile
                </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 w-full gap-4 md:gap-6 ">
                {patientsLabData.map((patientsData, index) => (
                    <>
                        <div
                            key={index}
                            className="flex gap-1 justify-center sm:justify-start justify-center"
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
                                Is Patient On Admission?:
                            </p>
                            <p className="text-xs md:text-sm font-normal tracking-[2%]">
                                {patientsData.isOnAdmission}
                            </p>
                        </div>
                        <div
                            key={index}
                            className="flex gap-1 justify-center sm:justify-start"
                        >
                            <p className="text-xs md:text-sm font-semibold tracking-[2%]">
                                Ward Number:
                            </p>
                            <p className="text-xs md:text-sm font-normal tracking-[2%]">
                                {patientsData.wardNumber}
                            </p>
                        </div>
                        <div
                            key={index}
                            className="flex gap-1 justify-center sm:justify-start"
                        >
                            <p className="text-xs md:text-sm font-semibold tracking-[2%]">
                                Bed Number:
                            </p>
                            <p className="text-xs md:text-sm font-normal tracking-[2%]">
                                {patientsData.bedNumber}
                            </p>
                        </div>
                        <div
                            key={index}
                            className="flex gap-1 justify-center sm:justify-start"
                        >
                            <p className="text-xs md:text-sm font-semibold tracking-[2%]">
                                Test Type:
                            </p>
                            <p className="text-xs md:text-sm font-normal tracking-[2%]">
                                {patientsData.testType}
                            </p>
                        </div>
                        <div
                            key={index}
                            className="flex gap-1 justify-center sm:justify-start"
                        >
                            <p className="text-xs md:text-sm font-semibold tracking-[2%]">
                                Sample:
                            </p>
                            <p className="text-xs md:text-sm font-normal tracking-[2%]">
                                {patientsData.sample}
                            </p>
                        </div>
                        <div
                            key={index}
                            className="flex gap-1 justify-center sm:justify-start"
                        >
                            <p className="text-xs md:text-sm font-semibold tracking-[2%]">
                                Patient's Category:
                            </p>
                            <p className="text-xs md:text-sm font-normal tracking-[2%]">
                                {patientsData.category}
                            </p>
                        </div>
                        <div
                            key={index}
                            className="flex gap-1 justify-center sm:justify-start"
                        >
                            <p className="text-xs md:text-sm font-semibold tracking-[2%] whitespace-nowrap">
                                Data & Time of Request:
                            </p>
                            <p className="text-xs md:text-sm font-normal tracking-[2%] whitespace-nowrap">
                                {patientsData.dateTimeOfRequest}
                            </p>
                        </div>
                    </>
                ))}
            </div>
        </div>
    );
}
