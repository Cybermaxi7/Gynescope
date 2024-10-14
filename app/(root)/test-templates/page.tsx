import Header from "@/components/Header";
import LabTestTemplates from "@/components/LabTestTemplates";
import PatientLabDetails from "@/components/PatientLabDetails";

export default function TestTemplates() {
    return (
        <div className="flex flex-col overflow-x-hidden">
            <Header
                heading="Laboratory Details"
                subheading="Appnovia Hospital Test Templates"
            />
            <div className="">
                <PatientLabDetails />
                <LabTestTemplates />
            </div>
        </div>
    );
}
