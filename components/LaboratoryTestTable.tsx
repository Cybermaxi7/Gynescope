"use client";
import { useState } from "react";
import { FaPlus } from "react-icons/fa";
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
        // <div className="w-full overflow-x-auto">
        //     <table className="table w-full">
        //         <thead>
        //             <tr>
        //                 <th className="w-[100px]">Name</th>
        //                 <th>File Number</th>
        //                 <th>Lab Code</th>
        //                 <th>Test Type</th>
        //                 <th>Sample</th>
        //                 <th>Patient's Category</th>
        //                 <th>Date & Time of Request</th>
        //             </tr>
        //         </thead>
        //         <tbody>
        //             {records.map((record) => (
        //                 <tr key={record.name}>
        //                     <td>{record.name}</td>
        //                     <td>{record.fileNumber}</td>
        //                     <td>{record.labCode}</td>
        //                     <td>{record.testType}</td>
        //                     <td>{record.sample}</td>
        //                     <td>{record.patientCategory}</td>
        //                     <td>{record.dateTime}</td>
        //                 </tr>
        //             ))}
        //         </tbody>
        //     </table>
        // </div>
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
