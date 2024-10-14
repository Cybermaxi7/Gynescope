import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { recentLabTest } from "@/lib/data";

export default function RecentLabTests() {
    return (
        <Card data-aos="flip-left" className="w-full bg-white">
            <CardHeader>
                <CardTitle className="text-lg font-semibold text-[#09126E]">
                    Recent Laboratory Tests
                </CardTitle>
            </CardHeader>
            <CardContent>
                {/* Ensure the parent container of the table has overflow-x-auto */}
                <div className="w-full overflow-x-auto">
                    <table className="min-w-[600px] w-full table-auto">
                        <thead>
                            <tr>
                                <th className="text-left py-4 px-4 text-[15px] whitespace-nowrap font-semibold text-[#1c1c1c]">
                                    Name
                                </th>
                                <th className="text-left py-4 px-4 text-[15px] whitespace-nowrap font-semibold text-[#1c1c1c]">
                                    File Number
                                </th>
                                <th className="text-left py-4 px-4 text-[15px] whitespace-nowrap font-semibold text-[#1c1c1c]">
                                    Medic
                                </th>
                                <th className="text-left py-4 px-4 text-[15px] whitespace-nowrap font-semibold text-[#1c1c1c]">
                                    Date
                                </th>
                                <th className="text-left py-4 px-4 text-[15px] whitespace-nowrap font-semibold text-[#1c1c1c]">
                                    Time
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {recentLabTest.map((test, index) => (
                                <tr
                                    key={test.fileNumber}
                                    className="hover:bg-white transition-colors"
                                >
                                    <td className="py-4 px-4 text-[#1c1c1c] text-xs md:text-sm">
                                        {test.name}
                                    </td>
                                    <td className="py-4 px-4 text-[#1c1c1c] text-xs md:text-sm">
                                        {test.fileNumber}
                                    </td>
                                    <td className="py-4 px-4 text-[#1c1c1c] text-xs md:text-sm">
                                        {test.medic}
                                    </td>
                                    <td className="py-4 px-4 text-[#1c1c1c] text-xs md:text-sm">
                                        {test.date}
                                    </td>
                                    <td className="py-4 px-4 text-[#1c1c1c] text-xs md:text-sm">
                                        {test.time}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </CardContent>
        </Card>
    );
}
