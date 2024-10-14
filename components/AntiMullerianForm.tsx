import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function AntiMullerianForm({
    handleSubmit,
}: {
    handleSubmit: () => void;
}) {
    return (
        <div className="flex flex-col gap-2">
            {/* Top Section */}
            <div className="grid grid-cols-1 md:grid-cols-2  border rounded-[10px] mb-5 md:mb-10 gap-4">
                <div className="p-4">
                    <h3 className="font-medium mb-2 text-sm md:text-base tracking-[5%] text-[#1c1c1c]">
                        Doctor Ref.
                    </h3>

                    <Input type="text" placeholder="Enter clinical details" />
                </div>
                <div className="p-4">
                    <h3 className="font-medium mb-2 text-sm md:text-base tracking-[5%] text-[#1c1c1c]">
                        Collection Date:
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
                    <Input type="text" placeholder="Enter test required" />
                </div>
                {/* Doctor's Name Section */}
                <div className="p-4">
                    <h3 className="font-medium mb-2 text-sm md:text-base tracking-[5%] text-[#1c1c1c]">
                        Doctor's Name
                    </h3>
                    <Input type="text" placeholder="Enter doctor's name" />
                </div>
            </div>

            {/* ANTI-MULLERIAN HORMONE (ng/ml) section */}
            <h3 className="font-semibold text-base md:text-lg tracking-[2%] border-b border-[#1c1c1c]">
                ANTI-MULLERIAN HORMONE (ng/ml)
            </h3>
            <div className="border rounded-lg p-4 mb-5 md:mb-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block mb-1 text-sm md:text-base font-medium tracking-[5%]">
                            Result
                        </label>
                        <Input type="text" placeholder="Enter result" />
                    </div>
                    <div>
                        <label className="block mb-1 text-sm md:text-base font-medium tracking-[5%]">
                            Result
                        </label>
                        <Input type="text" placeholder="Enter result" />
                    </div>
                </div>
            </div>
            {/* ANTI-MULLERIAN HORMONE (pmol/l) section */}
            <h3 className="font-semibold text-base md:text-lg tracking-[2%] border-b border-[#1c1c1c]">
                ANTI-MULLERIAN HORMONE (pmol/l)
            </h3>
            <div className="border rounded-lg p-4 mb-5 md:mb-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block mb-1 text-sm md:text-base font-medium tracking-[5%]">
                            Result
                        </label>
                        <Input type="text" placeholder="Enter result" />
                    </div>
                    <div>
                        <label className="block mb-1 text-sm md:text-base font-medium tracking-[5%]">
                            Result
                        </label>
                        <Input type="text" placeholder="Enter result" />
                    </div>
                </div>
            </div>

            {/* Liver Function Test Section */}
            <div className="border rounded-lg p-4 bg-[#C1E6F8]/25">
                <h3 className="font-semibold text-base md:text-lg tracking-[2%] border-b border-[#1C7DB4] text-[#1C7DB4] mb-4">
                    Expected AMH Values Relative to Antral Follicle Count (AFC)
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

            {/* Navigation Buttons */}
            <Button
                onClick={handleSubmit}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center gap-4 h over:bg-blue-600 text-xs md:text-sm font-semibold my-8 w-fit ml-auto"
            >
                {/* <IoIosArrowForward /> */}
                Submit
                {/* <ChevronRight size={20} /> */}
            </Button>
        </div>
    );
}
