import Header from "@/components/Header";
import LaboratoryTestCard from "@/components/LaboratoryTestCard";
import LaboratoryTestTable from "@/components/LaboratoryTestTable";
import PatientsTable from "@/components/PatientsTable";

export default function LabTest() {
    return (
        <div className="w-full">
            <Header
                heading="Laboratory Test"
                subheading="New, pending and completed laboratory test request"
            />
            <div className="px-6 py-3 w-full overflow-x-hidden">
                <div className="px-2 py-6 border rounded-[10px] border-[#E2E3E4] flex flex-col gap-2 w-full">
                    <h4 className="font-semibold text-xs uppercase tracking-[2%]">
                        Laboratory Test
                    </h4>
                    <LaboratoryTestCard />
                </div>
                {/* <div className="overflow-x-auto w-full"> */}
                <PatientsTable />
                {/* </div> */}
            </div>
        </div>
    );
}
