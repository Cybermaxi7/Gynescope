import React from "react";
import { Input } from "./ui/input";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { Button } from "./ui/button";

export default function ChemistryForm({
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

                    {/* Lipid Profile Section */}
                    <h3 className="font-semibold text-base md:text-lg tracking-[2%] border-b border-[#1c1c1c]">
                        LIPID PROFILE
                    </h3>
                    <div className="border rounded-lg p-4 mb-5 md:mb-10">
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                            <div>
                                <label className="block mb-1 text-sm md:text-base font-medium tracking-[5%]">
                                    CHOLESTEROL
                                </label>
                                <Input type="text" placeholder="Enter result" />
                                <span className="font-medium text-xs md:text-sm text-[#1C7DB4] tracking-[2%]">
                                    Range: 4.5 - 5.8 mmol/L
                                </span>
                            </div>
                            <div>
                                <label className="block mb-1 text-sm md:text-base font-medium tracking-[5%]">
                                    TRIGLYCERIDE
                                </label>
                                <Input type="text" placeholder="Enter result" />
                                <span className="font-medium text-xs md:text-sm text-[#1C7DB4] tracking-[2%]">
                                    Range: 0.68 - 1.50 mmol/L
                                </span>
                            </div>
                            <div>
                                <label className="block mb-1 text-sm md:text-base font-medium tracking-[5%]">
                                    HDL
                                </label>
                                <Input type="text" placeholder="Enter result" />
                                <span className="font-medium text-xs md:text-sm text-[#1C7DB4] tracking-[2%]">
                                    Range: 0.8 - 1.55 mmol/L
                                </span>
                            </div>
                            <div>
                                <label className="block mb-1 text-sm md:text-base font-medium tracking-[5%]">
                                    LDL
                                </label>
                                <Input type="text" placeholder="Enter result" />
                                <span className="font-medium text-xs md:text-sm text-[#1C7DB4] tracking-[2%]">
                                    Range: 1.8 - 4.0 mmol/L
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Liver Function Test Section */}
                    <h3 className="font-semibold text-base md:text-lg tracking-[2%] border-b border-[#1c1c1c]">
                        LIVER FUNCTION TEST
                    </h3>
                    <div className="border rounded-lg p-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2">
                            <div>
                                <label className="block mb-1 text-sm md:text-base font-medium tracking-[5%]">
                                    TOTAL BILIRUBIN
                                </label>
                                <Input type="text" placeholder="Enter result" />
                                <span className="font-medium text-xs md:text-sm text-[#1C7DB4] tracking-[2%]">
                                    Range: 5.0 - 18.0 μmol/L
                                </span>
                            </div>
                            <div>
                                <label className="block mb-1 text-sm md:text-base font-medium tracking-[5%]">
                                    CONG. BILIRUBIN
                                </label>
                                <Input type="text" placeholder="Enter result" />
                                <span className="font-medium text-xs md:text-sm text-[#1C7DB4] tracking-[2%]">
                                    Range: {"<"} 8.0 μmol/L
                                </span>
                            </div>
                            <div>
                                <label className="block mb-1 text-sm md:text-base font-medium tracking-[5%]">
                                    ALKALINE PHOSPHATASE
                                </label>
                                <Input type="text" placeholder="Enter result" />
                                <span className="font-medium text-xs md:text-sm text-[#1C7DB4] tracking-[2%]">
                                    Range: 20 - 48 IU/L
                                </span>
                            </div>
                            <div>
                                <label className="block mb-1 text-sm md:text-base font-medium tracking-[5%]">
                                    AST
                                </label>
                                <Input type="text" placeholder="Enter result" />
                                <span className="font-medium text-xs md:text-sm text-[#1C7DB4] tracking-[2%]">
                                    Range: up to 12 IU/L
                                </span>
                            </div>
                            <div>
                                <label className="block mb-1 text-sm md:text-base font-medium tracking-[5%]">
                                    ALT
                                </label>
                                <Input type="text" placeholder="Enter result" />
                                <span className="font-medium text-xs md:text-sm text-[#1C7DB4] tracking-[2%]">
                                    Range: up to 12 IU/L
                                </span>
                            </div>
                            <div>
                                <label className="block mb-1 text-sm md:text-base font-medium tracking-[5%]">
                                    HBsAg
                                </label>
                                <Input type="text" placeholder="Enter result" />
                            </div>
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
            )}

            {/* Form Step 2 (Similar structure for demonstration) */}
            {currentStep === 2 && (
                <div className="space-y-6">
                    {/* RENAL FUNCTION TEST  */}
                    <h3 className="font-semibold text-base md:text-lg tracking-[2%] border-b border-[#1c1c1c]">
                        RENAL FUNCTION TEST
                    </h3>
                    <div className="border rounded-lg p-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2">
                            <div>
                                <label className="block mb-1 text-sm md:text-base font-medium tracking-[5%]">
                                    SODIUM
                                </label>
                                <Input type="text" placeholder="Enter result" />
                                <span className="font-medium text-xs md:text-sm text-[#1C7DB4] tracking-[2%]">
                                    Range: 130 -145 mmol/L
                                </span>
                            </div>
                            <div>
                                <label className="block mb-1 text-sm md:text-base font-medium tracking-[5%]">
                                    POTASSIUM
                                </label>
                                <Input type="text" placeholder="Enter result" />
                                <span className="font-medium text-xs md:text-sm text-[#1C7DB4] tracking-[2%]">
                                    Range: 3.5 - 5.0 mmol/L
                                </span>
                            </div>
                            <div>
                                <label className="block mb-1 text-sm md:text-base font-medium tracking-[5%]">
                                    BICARBONATE
                                </label>
                                <Input type="text" placeholder="Enter result" />
                                <span className="font-medium text-xs md:text-sm text-[#1C7DB4] tracking-[2%]">
                                    Range: 18 - 30 mmol/L
                                </span>
                            </div>
                            <div>
                                <label className="block mb-1 text-sm md:text-base font-medium tracking-[5%]">
                                    CHLORIDE
                                </label>
                                <Input type="text" placeholder="Enter result" />
                                <span className="font-medium text-xs md:text-sm text-[#1C7DB4] tracking-[2%]">
                                    Range: 95 - 110 mmol/L
                                </span>
                            </div>
                            <div>
                                <label className="block mb-1 text-sm md:text-base font-medium tracking-[5%]">
                                    UREA
                                </label>
                                <Input type="text" placeholder="Enter result" />
                                <span className="font-medium text-xs md:text-sm text-[#1C7DB4] tracking-[2%]">
                                    Range: 2.5 - 6.6 mmol/L
                                </span>
                            </div>
                            <div>
                                <label className="block mb-1 text-sm md:text-base font-medium tracking-[5%]">
                                    OR
                                </label>
                                <Input type="text" placeholder="Enter result" />
                                <span className="font-medium text-xs md:text-sm text-[#1C7DB4] tracking-[2%]">
                                    Range: 10 - 50 mg/10dl
                                </span>
                            </div>
                            <div>
                                <label className="block mb-1 text-sm md:text-base font-medium tracking-[5%]">
                                    CREAT
                                </label>
                                <Input type="text" placeholder="Enter result" />
                                <span className="font-medium text-xs md:text-sm text-[#1C7DB4] tracking-[2%]">
                                    Range: 50 - 124 µmol/L
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* CHEMISTRY TEST */}
                    <h3 className="font-semibold text-base md:text-lg tracking-[2%] border-b border-[#1c1c1c]">
                        RENAL FUNCTION TEST
                    </h3>
                    <div className="border rounded-lg p-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2">
                            <div>
                                <label className="block mb-1 text-sm md:text-base font-medium tracking-[5%]">
                                    ACID PHOS (T)
                                </label>
                                <Input type="text" placeholder="Enter result" />
                                <span className="font-medium text-xs md:text-sm text-[#1C7DB4] tracking-[2%]">
                                    Range: up to 25 IU/L
                                </span>
                            </div>
                            <div>
                                <label className="block mb-1 text-sm md:text-base font-medium tracking-[5%]">
                                    ACID PHOS (P)
                                </label>
                                <Input type="text" placeholder="Enter result" />
                                <span className="font-medium text-xs md:text-sm text-[#1C7DB4] tracking-[2%]">
                                    Range: up to 25 IU/L
                                </span>
                            </div>
                            <div>
                                <label className="block mb-1 text-sm md:text-base font-medium tracking-[5%]">
                                    AMYLASE
                                </label>
                                <Input type="text" placeholder="Enter result" />
                                <span className="font-medium text-xs md:text-sm text-[#1C7DB4] tracking-[2%]">
                                    Range: up to 180 IU/L
                                </span>
                            </div>
                            <div>
                                <label className="block mb-1 text-sm md:text-base font-medium tracking-[5%]">
                                    ALBUMIN
                                </label>
                                <Input type="text" placeholder="Enter result" />
                                <span className="font-medium text-xs md:text-sm text-[#1C7DB4] tracking-[2%]">
                                    Range:38 -44 g/ml
                                </span>
                            </div>
                            <div>
                                <label className="block mb-1 text-sm md:text-base font-medium tracking-[5%]">
                                    PROTEIN
                                </label>
                                <Input type="text" placeholder="Enter result" />
                                <span className="font-medium text-xs md:text-sm text-[#1C7DB4] tracking-[2%]">
                                    Range: 60 - 83 gm/L
                                </span>
                            </div>
                            <div>
                                <label className="block mb-1 text-sm md:text-base font-medium tracking-[5%]">
                                    URIC ACID
                                </label>
                                <Input type="text" placeholder="Enter result" />
                                <span className="font-medium text-xs md:text-sm text-[#1C7DB4] tracking-[2%]">
                                    Range: 0.21 - 0.42 mmol/L
                                </span>
                            </div>
                            <div>
                                <label className="block mb-1 text-sm md:text-base font-medium tracking-[5%]">
                                    CALCIUM
                                </label>
                                <Input type="text" placeholder="Enter result" />
                                <span className="font-medium text-xs md:text-sm text-[#1C7DB4] tracking-[2%]">
                                    Range: 2.02 - 2.60 mmol/L
                                </span>
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
                            Next
                            {/* <ChevronRight size={20} /> */}
                            <IoIosArrowForward />
                        </Button>
                    </div>
                </div>
            )}
            {currentStep === 3 && (
                <div className="space-y-6">
                    {/* RENAL FUNCTION TEST  */}
                    <h3 className="font-semibold text-base md:text-lg tracking-[2%] border-b border-[#1c1c1c]">
                        BLOOD SUGAR
                    </h3>
                    <div className="border rounded-lg p-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2">
                            <div>
                                <label className="block mb-1 text-sm md:text-base font-medium tracking-[5%]">
                                    FBS
                                </label>
                                <Input type="text" placeholder="Enter result" />
                                <span className="font-medium text-xs md:text-sm text-[#1C7DB4] tracking-[2%]">
                                    Range: 3.5 - 5.5 mmol/L
                                </span>
                            </div>
                            <div>
                                <label className="block mb-1 text-sm md:text-base font-medium tracking-[5%]">
                                    OR
                                </label>
                                <Input type="text" placeholder="Enter result" />
                                <span className="font-medium text-xs md:text-sm text-[#1C7DB4] tracking-[2%]">
                                    Range: 63 - 100 mg/dl
                                </span>
                            </div>
                            <div>
                                <label className="block mb-1 text-sm md:text-base font-medium tracking-[5%]">
                                    2 HOUR POST PRANDIAL
                                </label>
                                <Input type="text" placeholder="Enter result" />
                                <span className="font-medium text-xs md:text-sm text-[#1C7DB4] tracking-[2%]">
                                    Range: ≤ 7.8 mmol/L
                                </span>
                            </div>
                            <div>
                                <label className="block mb-1 text-sm md:text-base font-medium tracking-[5%]">
                                    OR
                                </label>
                                <Input type="text" placeholder="Enter result" />
                                <span className="font-medium text-xs md:text-sm text-[#1C7DB4] tracking-[2%]">
                                    Range: ≤ 140 mgldl
                                </span>
                            </div>
                            <div>
                                <label className="block mb-1 text-sm md:text-base font-medium tracking-[5%]">
                                    RBS
                                </label>
                                <Input type="text" placeholder="Enter result" />
                                <span className="font-medium text-xs md:text-sm text-[#1C7DB4] tracking-[2%]">
                                    Range: ≤ 7.8 mmol/L
                                </span>
                            </div>
                            <div>
                                <label className="block mb-1 text-sm md:text-base font-medium tracking-[5%]">
                                    OGTT 1/2HR
                                </label>
                                <Input type="text" placeholder="Enter result" />
                                <span className="font-medium text-xs md:text-sm text-[#1C7DB4] tracking-[2%]">
                                    Range: mmol/L{" "}
                                </span>
                            </div>
                            <div>
                                <label className="block mb-1 text-sm md:text-base font-medium tracking-[5%]">
                                    1HR
                                </label>
                                <Input type="text" placeholder="Enter result" />
                                <span className="font-medium text-xs md:text-sm text-[#1C7DB4] tracking-[2%]">
                                    Range: mmol/L
                                </span>
                            </div>
                            <div>
                                <label className="block mb-1 text-sm md:text-base font-medium tracking-[5%]">
                                    1HR
                                </label>
                                <Input type="text" placeholder="Enter result" />
                                <span className="font-medium text-xs md:text-sm text-[#1C7DB4] tracking-[2%]">
                                    Range: mmol/L
                                </span>
                            </div>
                            <div>
                                <label className="block mb-1 text-sm md:text-base font-medium tracking-[5%]">
                                    1 1/2 HR
                                </label>
                                <Input type="text" placeholder="Enter result" />
                                <span className="font-medium text-xs md:text-sm text-[#1C7DB4] tracking-[2%]">
                                    Range: mmol/L
                                </span>
                            </div>
                            <div>
                                <label className="block mb-1 text-sm md:text-base font-medium tracking-[5%]">
                                    2HR
                                </label>
                                <Input type="text" placeholder="Enter result" />
                                <span className="font-medium text-xs md:text-sm text-[#1C7DB4] tracking-[2%]">
                                    Range: mmol/L
                                </span>
                            </div>
                            <div>
                                <label className="block mb-1 text-sm md:text-base font-medium tracking-[5%]">
                                    2 1/2 HR
                                </label>
                                <Input type="text" placeholder="Enter result" />
                                <span className="font-medium text-xs md:text-sm text-[#1C7DB4] tracking-[2%]">
                                    Range: ≤ 7.8 mmol/L
                                </span>
                            </div>
                            <div>
                                <label className="block mb-1 text-sm md:text-base font-medium tracking-[5%]">
                                    HBA1C
                                </label>
                                <Input type="text" placeholder="Enter result" />
                                <span className="font-medium text-xs md:text-sm text-[#1C7DB4] tracking-[2%]">
                                    Range: 4.5 - 6.5%
                                </span>
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
                            onClick={() => console.log("Form submitted")}
                            className="bg-[#1C7DB4] text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-600 text-xs md:text-sm font-semibold"
                        >
                            Submit
                            {/* <ChevronRight size={20} /> */}
                            <IoIosArrowForward />
                        </Button>
                    </div>
                </div>
            )}
        </div>
    );
}
