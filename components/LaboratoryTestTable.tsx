"use client";

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Button } from "./ui/button";
import { records } from "@/lib/data";

export default function LaboratoryTestTable() {
    return (
        <div className="w-full">
            <div className="w-[90%]">
                <Table>
                    <TableCaption>A list of your recent invoices.</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="">Name</TableHead>
                            <TableHead>File Number </TableHead>
                            <TableHead>Lab Code</TableHead>
                            <TableHead className="text-right">
                                Test Type
                            </TableHead>
                            <TableHead className="text-right">Sample</TableHead>
                            <TableHead className="text-right">
                                Patient's Category
                            </TableHead>
                            <TableHead className="text-right">
                                Date & Time of Request
                            </TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {records.map((record, index) => (
                            <TableRow key={index}>
                                <TableCell className="font-medium">
                                    {record.name}
                                </TableCell>
                                <TableCell>{record.fileNumber}</TableCell>
                                <TableCell>{record.labCode}</TableCell>
                                <TableCell className="text-right">
                                    {record.testType}
                                </TableCell>
                                <TableCell className="text-right">
                                    {record.sample}
                                </TableCell>
                                <TableCell className="text-right">
                                    {record.patientCategory}
                                </TableCell>
                                <TableCell className="text-right">
                                    {record.dateTime}
                                </TableCell>
                                <TableCell className="text-right">
                                    <Button>Process Test</Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}
