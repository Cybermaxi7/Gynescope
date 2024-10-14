"use client";
import AntiMullerianForm from "@/components/AntiMullerianForm";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { patientsLabData } from "@/lib/data";
import { useState } from "react";
import { IoPrint } from "react-icons/io5";
import { LuSave } from "react-icons/lu";

type FormStep = number;
export default function AntiMullerianHormonesResult() {
    const [currentStep, setCurrentStep] = useState<FormStep>(1);
    const handleSubmit = () => {
        setCurrentStep((prev) => prev + 1);
    };
    return (
        <div className="flex flex-col w-full">
            <Header
                heading="Anti-Mullerian Hormone Test"
                subheading="Gynescope Specialist Hospital Test Templates"
            />
            {currentStep === 1 && (
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
                    <AntiMullerianForm handleSubmit={handleSubmit} />
                </div>
            )}
            {currentStep === 2 && (
                <div className="flex flex-col mt-4 rounded-[10px] border border-[E2E3E4] px-3 py-6 gap-10">
                    <div className="flex flex-col">
                        <div className="flex flex-col md:flex-row justify-between">
                            <h2 className="font-bold text-sm md:text-lg text-[#1C7DB4]">
                                Gynescope Specialist Hospital
                            </h2>
                            <h2 className="font-bold text-sm md:text-lg text-[#1C7DB4]">
                                Anti-Mullerian Hormone Result
                            </h2>
                        </div>
                        <p className="text-sm mb-3">
                            <span className="text-[#050A40] font-semibold font-normal">
                                Address:
                            </span>{" "}
                            4 Etim Okpoyo Close, Bridge Bus-stop Aba <br />{" "}
                            Expressway, Port-Harcourt.
                        </p>
                        <div className="flex gap-4 ">
                            <p className="font-normal text-sm">
                                <span className="text-[#050A40] font-semibold">
                                    Website
                                </span>{" "}
                                www.gynescopeh.com
                            </p>
                            <p className="font-normal text-sm">
                                <span className="text-[#050A40] font-semibold">
                                    Email
                                </span>{" "}
                                Gynescope@yahoo.com
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div className="border rounded-lg p-4 mb-8">
                            <h3 className="font-semibold text-sm tracking-[2%] border-b border-[#1C1C1C] text-[#1C7DB4]  mb-4">
                                PATIENT'S LABORATORY DETAILS
                            </h3>
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
                        <div className="border rounded-lg p-4">
                            <h3 className="font-semibold text-sm tracking-[2%] border-b border-[#1C1C1C] text-[#1C7DB4]  mb-4">
                                LABORATORY DETAILS
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 w-full gap-4 md:gap-6 ">
                                {patientsLabData.map((patientsData, index) => (
                                    <>
                                        <div
                                            key={index}
                                            className="flex gap-1 justify-center sm:justify-start "
                                        >
                                            <p className="text-xs md:text-sm font-semibold tracking-[2%]">
                                                Clinic Details:
                                            </p>
                                            <p className="text-xs md:text-sm font-normal tracking-[2%]"></p>
                                        </div>
                                        <div
                                            key={index}
                                            className="flex gap-1 justify-center sm:justify-start"
                                        >
                                            <p className="text-xs md:text-sm font-semibold tracking-[2%]">
                                                Date & Time of Collection
                                            </p>
                                            <p className="text-xs md:text-sm font-normal tracking-[2%]">
                                                {patientsData.dateTimeOfRequest}
                                            </p>
                                        </div>
                                        <div
                                            key={index}
                                            className="flex gap-1 justify-center sm:justify-start"
                                        >
                                            <p className="text-xs md:text-sm font-semibold tracking-[2%]">
                                                Specimen:
                                            </p>
                                            <p className="text-xs md:text-sm font-normal tracking-[2%]">
                                                Blood
                                            </p>
                                        </div>
                                        <div
                                            key={index}
                                            className="flex gap-1 justify-center sm:justify-start"
                                        >
                                            <p className="text-xs md:text-sm font-semibold tracking-[2%]">
                                                Test Required:
                                            </p>
                                            <p className="text-xs md:text-sm font-normal tracking-[2%]"></p>
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
                        <div className="w-full p-4 border border-[#095F8F]">
                            <div className="grid grid-cols-3">
                                <h2 className=" text-[#FF0000] font-semibold tracking-[2%]">
                                    TEST
                                </h2>
                                <h2 className="pl-5 text-[#FF0000] font-semibold tracking-[2%]">
                                    RESULT
                                </h2>
                            </div>
                            <table className="w-full border-collapse">
                                <tbody>
                                    <tr>
                                        <td className="border border-lue-200  p-2 w-1/3">
                                            ANTI-MULLERIAN HORMONE (ng/ml)
                                        </td>
                                        <td className="border  p-2 w-1/3 bg-[#CDEDFC]/60"></td>
                                        <td className="border border-[#095F8F]  p-2 w-1/3 bg-[#CDEDFC]/60"></td>
                                    </tr>
                                    <tr>
                                        <td className="border border-blue-200  p-2 w-1/3">
                                            ANTI-MULLERIAN HORMONE (pmol/l)
                                        </td>
                                        <td className="border border-[#095F8F]  p-2 w-1/3"></td>
                                        <td className="border border-[#095F8F]  p-2 w-1/3"></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="border rounded-lg p-4 bg-[#C1E6F8]/25 mt-[5rem]">
                            <h3 className="font-semibold text-base md:text-lg tracking-[2%] border-b border-[#1C7DB4] text-[#1C7DB4] mb-4">
                                Expected AMH Values Relative to Antral Follicle
                                Count (AFC)
                            </h3>
                            <div className="w-full mx-auto p-4 overflow-x-auto ">
                                <table className="w-full border-collapse overflow-x-auto h-48">
                                    <thead>
                                        <tr>
                                            <th className="p-4 font-normal w-1/4 h-10"></th>
                                            <th className="border border-[#095F8F] p-4 text-center font-bold text-xs md:text-sm h-10">
                                                AFC
                                            </th>
                                            <th className="border border-[#095F8F] p-4 text-center font-bold text-xs md:text-sm h-10">
                                                AMH (ng/ml)
                                            </th>
                                            <th className="border border-[#095F8F] p-4 text-center font-bold text-xs md:text-sm h-10">
                                                AMH (pmol/l)
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="p-4 text-[#1c7db4] font-semibold text-xs md:text-sm">
                                                Negligible Response
                                            </td>
                                            <td className="border border-[#095F8F] p-4 text-center bg-[#CDEDFC] font-semibold text-xs md:text-sm">
                                                3 - 6
                                            </td>
                                            <td className="border border-[#095F8F] p-4 text-center bg-[#CDEDFC] font-semibold text-xs md:text-sm">
                                                ≤ 0.15
                                            </td>
                                            <td className="border border-[#095F8F] p-4 text-center bg-[#CDEDFC] font-semibold text-xs md:text-sm">
                                                ≤ 1.1
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 text-[#1c7db4] font-semibold text-xs md:text-sm">
                                                Reduced Response
                                            </td>
                                            <td className="border border-[#095F8F] bg-[#e1f0ff] p-4 text-center font-semibold text-xs md:text-sm">
                                                6 - 11
                                            </td>
                                            <td className="border border-[#095F8F] bg-[#e1f0ff] p-4 text-center font-semibold text-xs md:text-sm">
                                                0.15 - 1.14
                                            </td>
                                            <td className="border border-[#095F8F] bg-[#e1f0ff] p-4 text-center font-semibold text-xs md:text-sm">
                                                1.1 - 8.1
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 text-[#1c7db4] font-semibold text-xs md:text-sm">
                                                Safe/Normal Response
                                            </td>
                                            <td className="border border-[#095F8F] bg-[#CDEDFC] p-4 text-center font-semibold text-xs md:text-sm">
                                                9 - 16
                                            </td>
                                            <td className="border border-[#095F8F] bg-[#CDEDFC] p-4 text-center font-semibold text-xs md:text-sm">
                                                1.15 - 2.56
                                            </td>
                                            <td className="border border-[#095F8F] bg-[#CDEDFC] p-4 text-center font-semibold text-xs md:text-sm">
                                                8.2 - 18.3
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 text-[#1c7db4] font-semibold text-xs md:text-sm">
                                                Excessive Response
                                            </td>
                                            <td className="border border-[#095F8F] bg-[#e1f0ff] p-4 text-center font-semibold text-xs md:text-sm">
                                                13 - 26
                                            </td>
                                            <td className="border border-[#095F8F] bg-[#e1f0ff] p-4 text-center font-semibold text-xs md:text-sm">
                                                {">"} 2.56
                                            </td>
                                            <td className="border border-[#095F8F] bg-[#e1f0ff] p-4 text-center font-semibold text-xs md:text-sm">
                                                {">"} 18.3
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <p className="mt-[3rem]">
                            AMH levels should be interpreted in conjunction with
                            clinical and ultrasound findings.
                        </p>

                        <div className="border-t border-[#CDEDFC] mt-[6rem] overflow-x-hidden">
                            <div className="flex w-full ml-[30%]">
                                <p className="bg-[#CDEDFC] w-full p-3">
                                    Signature:
                                </p>
                                <p className="bg-[#CDEDFC] w-full p-3">Date:</p>
                            </div>
                        </div>

                        <div className="flex justify-end mt-[7rem]">
                            <div className="flex gap-4">
                                <Button className="flex items-center border-[#1C7DB4] rounded-md border gap-1 text-[#1C7DB4] p-2">
                                    <IoPrint />
                                    Print Page
                                </Button>
                                <Button className="flex items-center border-[#1C7DB4] rounded-md border gap-1 text-[#1C7DB4] p-2">
                                    <LuSave />
                                    Save as draft
                                </Button>
                                <Button className="flex items-center border-[#1C7DB4] rounded-md border gap-1 bg-[#1C7DB4] text-white p-2">
                                    <LuSave />
                                    Save
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
