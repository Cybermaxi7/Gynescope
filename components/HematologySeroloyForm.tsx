import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Textarea } from "./ui/textarea";
import { reportDetails } from "@/lib/data";

export default function HematologySeroloyForm({
    currentStep,
    handleNext,
    handlePrev,
}: {
    currentStep: number;
    handleNext: () => void;
    handlePrev: () => void;
}) {
    return (
        <div className="mw-full mt-8">
            {/* Form Step 1 */}
            {currentStep === 1 && (
                <div className="flex flex-col gap-2">
                    {/* Top Section */}
                    <div className="grid grid-cols-1 md:grid-cols-2  border rounded-[10px] mb-5 md:mb-10 gap-4">
                        <div className="p-4">
                            <h3 className="font-medium mb-2 text-sm md:text-base tracking-[5%] text-[#1c1c1c]">
                                Clinical Details
                            </h3>

                            <Input
                                type="text"
                                placeholder="Enter clinical details"
                            />
                        </div>
                        <div className="p-4">
                            <h3 className="font-medium mb-2 text-sm md:text-base tracking-[5%] text-[#1c1c1c]">
                                Date & Time of Collection
                            </h3>
                            <Input
                                type="datetime-local"
                                placeholder="Select date and time for collection"
                            />
                        </div>
                        <div className="p-4">
                            <h3 className="font-medium mb-2 text-sm md:text-base tracking-[5%] text-[#1c1c1c]">
                                Specimen
                            </h3>
                            <Input type="text" placeholder="Enter specimen" />
                        </div>
                        <div className="p-4">
                            <h3 className="font-medium mb-2 text-sm md:text-base tracking-[5%] text-[#1c1c1c]">
                                Test Required
                            </h3>
                            <Input
                                type="text"
                                placeholder="Enter test required"
                            />
                        </div>
                        {/* Doctor's Name Section */}
                        <div className="p-4">
                            <h3 className="font-medium mb-2 text-sm md:text-base tracking-[5%] text-[#1c1c1c]">
                                Doctor's Name
                            </h3>
                            <Input
                                type="text"
                                placeholder="Enter doctor's name"
                            />
                        </div>
                    </div>

                    {/*TEST Section */}
                    <h3 className="font-semibold text-base md:text-lg tracking-[2%] border-b border-[#1c1c1c]">
                        TEST PROFILE
                    </h3>
                    <div className="border rounded-lg p-4 mb-5 md:mb-10">
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-8">
                            <div>
                                <label className="block mb-1 text-sm md:text-base font-medium tracking-[5%]">
                                    PCV
                                </label>
                                <Input type="text" placeholder="Enter result" />
                                <span className="font-medium text-xs md:text-sm text-[#1C7DB4] tracking-[2%]">
                                    Range: Men: 40%-52% ; Women: 35%-45% ;
                                    Infant: 45%-60%
                                </span>
                            </div>
                            <div>
                                <label className="block mb-1 text-sm md:text-base font-medium tracking-[5%]">
                                    MP
                                </label>
                                <Input type="text" placeholder="Enter result" />
                            </div>
                            <div>
                                <label className="block mb-1 text-sm md:text-base font-medium tracking-[5%]">
                                    RBC COUNT
                                </label>
                                <Input type="text" placeholder="Enter result" />
                                <span className="font-medium text-xs md:text-sm text-[#1C7DB4] tracking-[2%]">
                                    Range: 3.5 - 505 X 10 12/l
                                </span>
                            </div>
                            <div>
                                <label className="block mb-1 text-sm md:text-base font-medium tracking-[5%]">
                                    MCV
                                </label>
                                <Input type="text" placeholder="Enter result" />
                                <span className="font-medium text-xs md:text-sm text-[#1C7DB4] tracking-[2%]">
                                    Range: 80 - 100 fl
                                </span>
                            </div>
                            <div>
                                <label className="block mb-1 text-sm md:text-base font-medium tracking-[5%]">
                                    MCH
                                </label>
                                <Input type="text" placeholder="Enter result" />
                                <span className="font-medium text-xs md:text-sm text-[#1C7DB4] tracking-[2%]">
                                    Range: 27 - 34 pg
                                </span>
                            </div>
                            <div>
                                <label className="block mb-1 text-sm md:text-base font-medium tracking-[5%]">
                                    MCHC
                                </label>
                                <Input type="text" placeholder="Enter result" />
                                <span className="font-medium text-xs md:text-sm text-[#1C7DB4] tracking-[2%]">
                                    Range: 320 - 360 g/l
                                </span>
                            </div>
                            <div>
                                <label className="block mb-1 text-sm md:text-base font-medium tracking-[5%]">
                                    RDN-SD
                                </label>
                                <Input type="text" placeholder="Enter result" />
                                <span className="font-medium text-xs md:text-sm text-[#1C7DB4] tracking-[2%]">
                                    Range: 35 - 56 fl
                                </span>
                            </div>
                            <div>
                                <label className="block mb-1 text-sm md:text-base font-medium tracking-[5%]">
                                    MPV
                                </label>
                                <Input type="text" placeholder="Enter result" />
                                <span className="font-medium text-xs md:text-sm text-[#1C7DB4] tracking-[2%]">
                                    Range: 6.5 - 12.0 fl
                                </span>
                            </div>
                            <div>
                                <label className="block mb-1 text-sm md:text-base font-medium tracking-[5%]">
                                    PDW
                                </label>
                                <Input type="text" placeholder="Enter result" />
                                <span className="font-medium text-xs md:text-sm text-[#1C7DB4] tracking-[2%]">
                                    Range: 9.0 - 17.0
                                </span>
                            </div>
                            <div>
                                <label className="block mb-1 text-sm md:text-base font-medium tracking-[5%]">
                                    PCT
                                </label>
                                <Input type="text" placeholder="Enter result" />
                                <span className="font-medium text-xs md:text-sm text-[#1C7DB4] tracking-[2%]">
                                    Range: 0.108 - 0.282 %{" "}
                                </span>
                            </div>
                            <div>
                                <label className="block mb-1 text-sm md:text-base font-medium tracking-[5%]">
                                    PLATELET COUNT
                                </label>
                                <Input type="text" placeholder="Enter result" />
                                <span className="font-medium text-xs md:text-sm text-[#1C7DB4] tracking-[2%]">
                                    Range: 140 - 400 X 10 /l{" "}
                                </span>
                            </div>
                        </div>
                        {/* Navigation Buttons */}
                        <div className="flex justify-end gap-3">
                            <Button
                                onClick={handleNext}
                                className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-600 text-xs md:text-sm font-semibold"
                            >
                                <IoIosArrowForward />
                                Next
                                {/* <ChevronRight size={20} /> */}
                            </Button>
                        </div>
                    </div>
                </div>
            )}
            {/* Form Step 2 */}
            {currentStep === 2 && (
                <div className="flex flex-col gap-2">
                    {/* Top Section */}
                    <div className="grid grid-cols-1 md:grid-cols-2  border rounded-[10px] mb-5 md:mb-10 gap-4 md:gap-8">
                        <div className="p-4">
                            <h3 className="font-medium mb-2 text-sm md:text-base tracking-[5%] text-[#1c1c1c]">
                                CLOTTING TIME
                            </h3>

                            <Input
                                type="text"
                                placeholder="Enter clotting time"
                            />
                        </div>
                        <div className="p-4">
                            <h3 className="font-medium mb-2 text-sm md:text-base tracking-[5%] text-[#1c1c1c]">
                                BLEEDING TIME
                            </h3>
                            <Input
                                type="text"
                                placeholder="Enter bleeding time"
                            />
                        </div>
                        <div className="p-4">
                            <h3 className="font-medium mb-2 text-sm md:text-base tracking-[5%] text-[#1c1c1c]">
                                FIBRINOGEN
                            </h3>
                            <Input type="text" placeholder="Enter result" />
                        </div>
                        <div className="p-4">
                            <h3 className="font-medium mb-2 text-sm md:text-base tracking-[5%] text-[#1c1c1c]">
                                VIRAL LOAD
                            </h3>
                            <Input type="text" placeholder="Enter viral load" />
                        </div>

                        <div className="p-4">
                            <h3 className="font-medium mb-2 text-sm md:text-base tracking-[5%] text-[#1c1c1c]">
                                SICKLING TEST
                            </h3>
                            <Input
                                type="text"
                                placeholder="Enter sickling test"
                            />
                        </div>
                        <div className="p-4">
                            <h3 className="font-medium mb-2 text-sm md:text-base tracking-[5%] text-[#1c1c1c]">
                                CD4 COUNT
                            </h3>
                            <Input type="text" placeholder="Enter CD4 test" />
                            <span className="font-medium text-xs md:text-sm text-[#1C7DB4] tracking-[2%]">
                                Range: 500 - 100 cell/ul
                            </span>
                        </div>
                        <div className="p-4">
                            <h3 className="font-medium mb-2 text-sm md:text-base tracking-[5%] text-[#1c1c1c]">
                                PROTHROMBIN TIME
                            </h3>
                            <Input
                                type="text"
                                placeholder="Enter prothrombin time"
                            />
                            <span className="font-medium text-xs md:text-sm text-[#1C7DB4] tracking-[2%]">
                                Range: 35 - 56 fl
                            </span>
                        </div>
                        <div className="p-4">
                            <h3 className="font-medium mb-2 text-sm md:text-base tracking-[5%] text-[#1c1c1c]">
                                PREGNANCY TEST
                            </h3>
                            <Input
                                type="text"
                                placeholder="Enter pregnancy test"
                            />
                            <span className="font-medium text-xs md:text-sm text-[#1C7DB4] tracking-[2%]">
                                Range: 6.5 - 12.0 fl
                            </span>
                        </div>
                    </div>

                    {/*TEST Section */}
                    <h3 className="font-semibold text-base md:text-lg tracking-[2%] border-b border-[#1c1c1c]">
                        TEST PROFILE
                    </h3>
                    <div className="border rounded-lg p-4 mb-5 md:mb-10">
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-8">
                            <div>
                                <label className="block mb-1 text-sm md:text-base font-medium tracking-[5%]">
                                    HB
                                </label>
                                <Input type="text" placeholder="Enter result" />
                                <span className="font-medium text-xs md:text-sm text-[#1C7DB4] tracking-[2%]">
                                    Range: Men: 12.3 - 17.6 g/dl ; Women: 10.8 -
                                    13.9 ; Infant: 13.9 - 18.5
                                </span>
                            </div>
                            <div>
                                <label className="block mb-1 text-sm md:text-base font-medium tracking-[5%]">
                                    WBC COUNT
                                </label>
                                <Input type="text" placeholder="Enter result" />
                                <span className="font-medium text-xs md:text-sm text-[#1C7DB4] tracking-[2%]">
                                    Range: 4.8 - 10.8 X 10 /l
                                </span>
                            </div>
                            <div>
                                <label className="block mb-1 text-sm md:text-base font-medium tracking-[5%]">
                                    EOSINOPHIL COUNT %
                                </label>
                                <Input type="text" placeholder="Enter result" />
                                <span className="font-medium text-xs md:text-sm text-[#1C7DB4] tracking-[2%]">
                                    Range: Adult 1 - 6%; Children 1-6%
                                </span>
                            </div>
                            <div>
                                <label className="block mb-1 text-sm md:text-base font-medium tracking-[5%]">
                                    NEUTROPHIS %
                                </label>
                                <Input type="text" placeholder="Enter result" />
                                <span className="font-medium text-xs md:text-sm text-[#1C7DB4] tracking-[2%]">
                                    Range: Adult 35 - 71%; Children 20 - 45%
                                </span>
                            </div>
                            <div>
                                <label className="block mb-1 text-sm md:text-base font-medium tracking-[5%]">
                                    NEUTROPHIS #
                                </label>
                                <Input type="text" placeholder="Enter result" />
                                <span className="font-medium text-xs md:text-sm text-[#1C7DB4] tracking-[2%]">
                                    Range: 2 - 7 X 10 /l
                                </span>
                            </div>
                            <div>
                                <label className="block mb-1 text-sm md:text-base font-medium tracking-[5%]">
                                    LMPHOCYTES %
                                </label>
                                <Input type="text" placeholder="Enter result" />
                                <span className="font-medium text-xs md:text-sm text-[#1C7DB4] tracking-[2%]">
                                    Range: Adult 22 - 44%; Children 45 - 70%
                                </span>
                            </div>
                            <div>
                                <label className="block mb-1 text-sm md:text-base font-medium tracking-[5%]">
                                    LMPHOCYTES #
                                </label>
                                <Input type="text" placeholder="Enter result" />
                                <span className="font-medium text-xs md:text-sm text-[#1C7DB4] tracking-[2%]">
                                    Range: 0.8 - 4.0 X 10 /l
                                </span>
                            </div>
                            <div>
                                <label className="block mb-1 text-sm md:text-base font-medium tracking-[5%]">
                                    MONOCYTES
                                </label>
                                <Input type="text" placeholder="Enter result" />
                                <span className="font-medium text-xs md:text-sm text-[#1C7DB4] tracking-[2%]">
                                    Range: 1 - 10%
                                </span>
                            </div>
                            <div>
                                <label className="block mb-1 text-sm md:text-base font-medium tracking-[5%]">
                                    BASOPHILS
                                </label>
                                <Input type="text" placeholder="Enter result" />
                                <span className="font-medium text-xs md:text-sm text-[#1C7DB4] tracking-[2%]">
                                    Range: 0 - 1%
                                </span>
                            </div>
                            <div>
                                <label className="block mb-1 text-sm md:text-base font-medium tracking-[5%]">
                                    ESR (WESTERGREEN)
                                </label>
                                <Input type="text" placeholder="Enter result" />
                                <span className="font-medium text-xs md:text-sm text-[#1C7DB4] tracking-[2%]">
                                    Range: 5 - 7 mm/hr
                                </span>
                            </div>
                        </div>
                        {/* Navigation Buttons */}
                        <div className="flex justify-end gap-3">
                            <Button
                                onClick={handlePrev}
                                className="bg-[#E4F3FA] text-[#1C7DB4] px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-600 text-xs md:text-sm font-semibold"
                            >
                                {/* <ChevronLeft size={20} /> */}
                                <IoIosArrowBack />
                                Previous
                            </Button>
                            <Button
                                onClick={handleNext}
                                className="bg-[#1C7DB4] text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-600 text-xs md:text-sm font-semibold"
                            >
                                Next
                                {/* <ChevronRight size={20} /> */}
                                <IoIosArrowForward />
                            </Button>
                        </div>
                    </div>
                </div>
            )}
            {/* Form Step 3 */}
            {currentStep === 3 && (
                <div className="flex flex-col gap-2">
                    {/* Top Section */}
                    <h2 className="text-base md:text-lg font-semibold uppercase border-b border-[#1c1c1c] mb-9">
                        WIDAL REACTION
                    </h2>
                    <div className="grid grid-cols-[1fr_2fr]  border rounded-[10px] mb-5 md:mb-10 gap-4 md:gap-8 items-center">
                        <p className="p-4">Sal. Typhi</p>
                        <div className="grid grid-cols-1 xl:grid-cols-2">
                            <div className="p-4">
                                <h3 className="font-medium mb-2 text-sm md:text-base tracking-[5%] text-[#1c1c1c]">
                                    O
                                </h3>

                                <Input type="text" placeholder="Enter result" />
                            </div>
                            <div className="p-4">
                                <h3 className="font-medium mb-2 text-sm md:text-base tracking-[5%] text-[#1c1c1c]">
                                    H
                                </h3>
                                <Input type="text" placeholder="Enter result" />
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-[1fr_2fr]  border rounded-[10px] mb-5 md:mb-10 gap-4 md:gap-8 items-center">
                        <p className="p-4">Sal. Paratyphi A</p>
                        <div className="grid grid-cols-1 xl:grid-cols-2">
                            <div className="p-4">
                                <h3 className="font-medium mb-2 text-sm md:text-base tracking-[5%] text-[#1c1c1c]">
                                    O
                                </h3>

                                <Input type="text" placeholder="Enter result" />
                            </div>
                            <div className="p-4">
                                <h3 className="font-medium mb-2 text-sm md:text-base tracking-[5%] text-[#1c1c1c]">
                                    H
                                </h3>
                                <Input type="text" placeholder="Enter result" />
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-[1fr_2fr]  border rounded-[10px] mb-5 md:mb-10 gap-4 md:gap-8 items-center">
                        <p className="p-4">Sal. Paratyphi B</p>
                        <div className="grid grid-cols-1 xl:grid-cols-2">
                            <div className="p-4">
                                <h3 className="font-medium mb-2 text-sm md:text-base tracking-[5%] text-[#1c1c1c]">
                                    O
                                </h3>

                                <Input type="text" placeholder="Enter result" />
                            </div>
                            <div className="p-4">
                                <h3 className="font-medium mb-2 text-sm md:text-base tracking-[5%] text-[#1c1c1c]">
                                    H
                                </h3>
                                <Input type="text" placeholder="Enter result" />
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-[1fr_2fr]  border rounded-[10px] mb-5 md:mb-10 gap-4 md:gap-8 items-center">
                        <p className="p-4">Sal. Paratyphi C</p>
                        <div className="grid grid-cols-1 xl:grid-cols-2">
                            <div className="p-4">
                                <h3 className="font-medium mb-2 text-sm md:text-base tracking-[5%] text-[#1c1c1c]">
                                    O
                                </h3>

                                <Input type="text" placeholder="Enter result" />
                            </div>
                            <div className="p-4">
                                <h3 className="font-medium mb-2 text-sm md:text-base tracking-[5%] text-[#1c1c1c]">
                                    H
                                </h3>
                                <Input type="text" placeholder="Enter result" />
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-[1fr_2fr]  border rounded-[10px] mb-5 md:mb-10 gap-4 md:gap-8 items-center">
                        <p className="p-4">
                            Titer significant at level {">="} 1/80
                        </p>
                        <div className="p-4">
                            <h3 className="font-medium mb-2 text-sm md:text-base tracking-[5%] text-[#1c1c1c]">
                                Comment
                            </h3>

                            <Textarea placeholder="Enter comment" />
                        </div>
                    </div>

                    {/*COMPATIBILITY Section */}
                    <h3 className="font-semibold text-base md:text-lg tracking-[2%] border-b border-[#1c1c1c]">
                        COMPATIBILITY REPORT
                    </h3>

                    <div className="border rounded-lg p-4 mb-5 md:mb-10">
                        <div className="grid grid-cols-[1fr_2fr]  border rounded-[10px] mb-5 md:mb-10 gap-4 md:gap-8 items-center">
                            <p className="p-4">Patient Blood Group</p>
                            <div className="p-4">
                                <h3 className="font-medium mb-2 text-sm md:text-base tracking-[5%] text-[#1c1c1c]">
                                    O
                                </h3>

                                <Input
                                    type="text"
                                    placeholder="Enter result"
                                    className="w-full"
                                />
                                <span className="font-medium text-xs md:text-sm text-[#1C7DB4] tracking-[2%]">
                                    is Compatible with Donor cells
                                </span>
                            </div>
                        </div>
                        <div className="grid grid-cols-[1fr_2fr]  border rounded-[10px] mb-5 md:mb-10 gap-4 md:gap-8 items-center">
                            <p className="p-4">From blood bag number</p>
                            <div className="grid grid-cols-1 xl:grid-cols-2">
                                <div className="p-4">
                                    <h3 className="font-medium mb-2 text-sm md:text-base tracking-[5%] text-[#1c1c1c]">
                                        O
                                    </h3>

                                    <Input
                                        type="text"
                                        placeholder="Enter result"
                                    />

                                    <span className="font-medium text-xs md:text-sm text-[#1C7DB4] tracking-[2%]">
                                        Donor blood is Sero-negative to HCV,
                                        HBsAg, RVS & VDRL
                                    </span>
                                </div>
                                <div className="p-4">
                                    <h3 className="font-medium mb-2 text-sm md:text-base tracking-[5%] text-[#1c1c1c]">
                                        H
                                    </h3>
                                    <Input
                                        type="text"
                                        placeholder="Enter result"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Navigation Buttons */}
                        <div className="flex justify-end gap-3">
                            <Button
                                onClick={handlePrev}
                                className="bg-[#E4F3FA] text-[#1C7DB4] px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-600 text-xs md:text-sm font-semibold"
                            >
                                {/* <ChevronLeft size={20} /> */}
                                <IoIosArrowBack />
                                Previous
                            </Button>
                            <Button
                                onClick={handleNext}
                                className="bg-[#1C7DB4] text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-600 text-xs md:text-sm font-semibold"
                            >
                                Preview
                                {/* <ChevronRight size={20} /> */}
                                <IoIosArrowForward />
                            </Button>
                        </div>
                    </div>
                </div>
            )}
            {currentStep === 4 && (
                <div className="rounded-[10px] border-[#E2E3E4] border p-4 w-full mt-2 ">
                    <h2 className="text-base md:text-lg font-semibold uppercase border-b border-[#1c1c1c] mb-9 text-[#1C7DB4]">
                        Laboratory Details
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 w-full gap-4 md:gap-6 ">
                        <div className="flex gap-1 justify-center sm:justify-start ">
                            <p className="text-xs md:text-sm font-semibold tracking-[2%]">
                                Clinical Details:
                            </p>
                            <p className="text-xs md:text-sm font-normal tracking-[2%]">
                                {reportDetails.clinicalDetails}
                            </p>
                        </div>
                        <div className="flex gap-1 justify-center sm:justify-start">
                            <p className="text-xs md:text-sm font-semibold tracking-[2%]">
                                Date & Time of collection:
                            </p>
                            <p className="text-xs md:text-sm font-normal tracking-[2%]">
                                {reportDetails.dateTime}
                            </p>
                        </div>
                        <div className="flex gap-1 justify-center sm:justify-start">
                            <p className="text-xs md:text-sm font-semibold tracking-[2%]">
                                Specimen:
                            </p>
                            <p className="text-xs md:text-sm font-normal tracking-[2%]">
                                {reportDetails.specimen}
                            </p>
                        </div>
                        <div className="flex gap-1 justify-center sm:justify-start">
                            <p className="text-xs md:text-sm font-semibold tracking-[2%]">
                                Test Required:
                            </p>
                            <p className="text-xs md:text-sm font-normal tracking-[2%]">
                                {reportDetails.testRequired}
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
