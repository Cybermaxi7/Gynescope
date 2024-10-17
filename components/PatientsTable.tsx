import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import Image from "next/image";
import laboratoryKitIcon from "../public/icons/laboratory-kit.svg";

const patients = [
    {
        name: "Bello Geoffrey",
        fileNumber: "96101005",
        labCode: "LB083120221",
        testType: "Genotype",
        sample: "Blood",
        patientsCategory: "Registered Patient",
        dateTime: "21-07-2023 10:00 am",
    },
    {
        name: "Bello Geoffrey",
        fileNumber: "GH10009",
        labCode: "LB083120221",
        testType: "Full Blood Count",
        sample: "Blood",
        patientsCategory: "Gown Donor",
        dateTime: "21-07-2023 10:59 am",
    },
    {
        name: "Idowu Aramide",
        fileNumber: "20202510",
        labCode: "LB083120221",
        testType: "Urinalysis",
        sample: "Urine",
        patientsCategory: "Sperm Donor",
        dateTime: "21-07-2023 10:00 am",
    },
    {
        name: "Timothy Victor",
        fileNumber: "WALK/2155",
        labCode: "LB083120221",
        testType: "Blood Group",
        sample: "Blood",
        patientsCategory: "Walk in Patient",
        dateTime: "21-07-2023 10:00 am",
    },
    {
        name: "George Machimbidza",
        fileNumber: "OTH/11205",
        labCode: "LB083120221",
        testType: "Rhesus Antibody",
        sample: "Blood",
        patientsCategory: "Old Patient",
        dateTime: "21-07-2023 10:00 am",
    },
    {
        name: "Isoboye Adaim",
        fileNumber: "4000018",
        labCode: "LB083120221",
        testType: "Platelet Count",
        sample: "Blood",
        patientsCategory: "Sperm Donor",
        dateTime: "21-07-2023 10:00 am",
    },
    {
        name: "Bello Geoffrey",
        fileNumber: "95101005",
        labCode: "LB083120221",
        testType: "Clombia Test",
        sample: "Sputum",
        patientsCategory: "Registered Patient",
        dateTime: "21-07-2023 10:00 am",
    },
    {
        name: "Bello Geoffrey",
        fileNumber: "GH10009",
        labCode: "LB083120221",
        testType: "Endocephil Count",
        sample: "Semen",
        patientsCategory: "Gown Donor",
        dateTime: "21-07-2023 10:00 am",
    },
    {
        name: "Bello Geoffrey",
        fileNumber: "5/10009",
        labCode: "LB083120221",
        testType: "Surrogacy Test",
        sample: "Blood",
        patientsCategory: "Sperm Donor",
        dateTime: "21-07-2023 10:00 am",
    },
    {
        name: "Bello Geoffrey",
        fileNumber: "WALK/2155",
        labCode: "LB083120221",
        testType: "Culture test",
        sample: "Urine",
        patientsCategory: "Walk in Patient",
        dateTime: "21-07-2023 10:00 am",
    },
];

export default function PatientsTable() {
    return (
        <div className="overflow-x-auto rounded-[10px] w-full mt-5">
            <Table className="w-full rounded-[10px] ">
                <TableHeader>
                    <TableRow>
                        <TableHead className="text-xs md:text-sm font-semibold text-white bg-[#1C7DB4]">
                            <div className="p-2">Name</div>
                        </TableHead>
                        <TableHead className="text-xs md:text-sm font-semibold text-white bg-[#1C7DB4]">
                            <div className="p-2">File Number</div>
                        </TableHead>
                        <TableHead className="text-xs md:text-sm font-semibold text-white bg-[#1C7DB4]">
                            <div className="p-2">Lab. Code</div>
                        </TableHead>
                        <TableHead className="text-xs md:text-sm font-semibold text-white bg-[#1C7DB4]">
                            <div className="p-2">Test Type</div>
                        </TableHead>
                        <TableHead className="text-xs md:text-sm font-semibold text-white bg-[#1C7DB4]">
                            <div className="p-2">Sample</div>
                        </TableHead>
                        <TableHead className="text-xs md:text-sm font-semibold text-white bg-[#1C7DB4]">
                            <div className="p-2">Patient's Category</div>
                        </TableHead>
                        <TableHead className="text-xs md:text-sm font-semibold text-white bg-[#1C7DB4]">
                            <div className="p-2">Date & Time of Request</div>
                        </TableHead>
                        <TableHead className="text-sm md:text-base font-semibold text-white bg-[#1C7DB4]">
                            <div className="p-2"></div>
                        </TableHead>
                        <TableHead className="text-xs md:text-sm font-semibold text-white bg-[#1C7DB4]">
                            <div className="p-2"></div>
                        </TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {patients.map((patient, index) => (
                        <TableRow key={index}>
                            <TableCell>
                                <div className="p-2 text-xs 2xl:text-sm font-normal">
                                    {patient.name}
                                </div>
                            </TableCell>
                            <TableCell>
                                <div className="p-2 text-xs 2xl:text-sm font-normal">
                                    {patient.fileNumber}
                                </div>
                            </TableCell>
                            <TableCell>
                                <div className="p-2 text-xs 2xl:text-sm font-normal">
                                    {patient.labCode}
                                </div>
                            </TableCell>
                            <TableCell>
                                <div className="p-2 text-xs 2xl:text-sm font-normal">
                                    {patient.testType}
                                </div>
                            </TableCell>
                            <TableCell>
                                <div className="p-2 text-xs 2xl:text-sm font-normal">
                                    {patient.sample}
                                </div>
                            </TableCell>
                            <TableCell>
                                <div className="p-2 text-xs 2xl:text-sm font-normal">
                                    {patient.patientsCategory}
                                </div>
                            </TableCell>
                            <TableCell>
                                <div className="p-2 text-xs 2xl:text-sm font-normal">
                                    {patient.dateTime}
                                </div>
                            </TableCell>
                            <TableCell>
                                <div className="p-2">
                                    <Button className="bg-[#1C7DB4] text-white rounded-[10px] flex items-center gap-1">
                                        <Image
                                            src={laboratoryKitIcon}
                                            width={20}
                                            height={20}
                                            alt="laboratory kit icon"
                                        />
                                        Process Test
                                    </Button>
                                </div>
                            </TableCell>
                            <TableCell>
                                <Button className="p-2 w-full flex items-center justify-center bg-[#d6f0f6]  rounded-[10px]">
                                    <PlusIcon className="text-[#1C7DB4]  text-center" />
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}
