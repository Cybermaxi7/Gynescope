import { AddressDetailsCard } from "@/components/AddressDetailsCard";
import { EmergencyContactCard } from "@/components/EmergencyContactCard";
import { HospitalDetailsCard } from "@/components/HospitalDetailsCard";
import PatientDetailsCard from "@/components/PatientsDetailCard";
import { SpouseDetailsCard } from "@/components/SpouseDetailsCard";

export default function PatientOverview() {
    const patientData = {
        name: "Mrs. Bella Geoffrey",
        gender: "Female",
        dateOfBirth: "22-07-1989",
        placeOfBirth: "Rivers state",
        occupation: "Medical Doctor",
        contact: "08106002509",
        altContact: "08113209831",
        email: "bellageoffrey@gmail.com",
        nationality: "Nigerian",
        stateOfOrigin: "Rivers State",
        lgaOfOrigin: "Obio/Akpor",
        ethnicity: "",
        religion: "Christianity",
        maritalStatus: "Married",
    };
    const hospitalData = {
        category: "Registered",
        registrationPrefix: "REG",
        registrationCode: "10061",
        fileNumber: "REG10061",
        entryDate: "22-07-2022",
        expiryDate: "22-10-2022",
        referrer: "",
        referenceNumber: "",
        medic: "Dr. Henry",
        previousHospital: "Evergreen Hospital",
        transferLetter: "View file",
    };

    const spouseData = {
        name: "Mr. Anthony Geoffrey",
        contact: "08106002509",
        email: "anthonygeoffrey@gmail.com",
        occupation: "Engineer",
        streetOfResidence: "4, Danjuma Drive",
        stateOfResidence: "Rivers State",
        lgaOfResidence: "Obio/Akpor",
    };

    const addressData = {
        streetOfResidence: "4, Danjuma Drive",
        cityOfResidence: "Port-Harcourt",
        stateOfResidence: "Rivers State",
        lgaOfResidence: "Obio/Akpor",
    };

    const emergencyData = {
        spouseName: "Mr. Anthony Geoffrey",
        contact: "08106002509",
        altContact: "08113209831",
        email: "bellageoffrey@gmail.com",
        streetOfResidence: "4, Danjuma Drive",
        stateOfResidence: "Rivers State",
        lgaOfResidence: "Obio/Akpor",
    };

    return (
        <div className="space-y-6">
            <PatientDetailsCard patient={patientData} />
            <HospitalDetailsCard details={hospitalData} />
            <SpouseDetailsCard spouse={spouseData} />
            <AddressDetailsCard address={addressData} />
            <EmergencyContactCard contact={emergencyData} />
        </div>
    );
}
