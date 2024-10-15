// Defining types for the data
interface TestCard {
    title: string;
    value: number;
    icon: string;
    first: boolean;
}

interface OverviewData {
    title: string;
    value: number;
}

// Exporting the data with appropriate types
export const overviewTestCards: TestCard[] = [
    {
        title: "New Lab. Tests",
        value: 100,
        icon: "/icons/test-icon.svg",
        first: true,
    },
    {
        title: "Processing Lab. Tests",
        value: 50,
        icon: "/icons/test-icon.svg",
        first: false,
    },
    {
        title: "Completed Lab. Tests",
        value: 200,
        icon: "/icons/test-icon.svg",
        first: false,
    },
];
export const laboratoryTestCards: TestCard[] = [
    {
        title: "New Laboratory Tests",
        value: 100,
        icon: "/icons/test-icon.svg",
        first: true,
    },
    {
        title: "Processing Laboratory Tests",
        value: 50,
        icon: "/icons/test-icon.svg",
        first: false,
    },
    {
        title: "Completed Laboratory Tests",
        value: 200,
        icon: "/icons/test-icon.svg",
        first: false,
    },
];

export const overviewData: OverviewData[] = [
    { title: "Total Patients", value: 2000 },
    { title: "New Patients", value: 30 },
    { title: "Walk-in Patients", value: 100 },
    { title: "Out Patients", value: 100 },
    { title: "In-patients", value: 30 },
];

// Define a type for each test item
type RecentLabTestType = {
    name: string;
    fileNumber: string;
    medic: string;
    date: string;
    time: string;
};

// Define the tests array with the Test type
export const recentLabTest: RecentLabTestType[] = [
    {
        name: "Roselyn Barima",
        fileNumber: "OD10009",
        medic: "Dr. Henry",
        date: "19-07-2021",
        time: "2:38 pm",
    },
    {
        name: "Patience Chibueze",
        fileNumber: "SD100010",
        medic: "Dr. Jude",
        date: "18-07-2021",
        time: "1:32 pm",
    },
    {
        name: "Joselyn Amadi",
        fileNumber: "SM10011",
        medic: "Dr. Maxwell",
        date: "18-07-2021",
        time: "12:08 pm",
    },
    {
        name: "Nkem Ameh",
        fileNumber: "REG100012",
        medic: "Dr. Henry",
        date: "17-07-2021",
        time: "03:38 pm",
    },
];

interface TestRecord {
    name: string;
    fileNumber: string;
    labCode: string;
    testType: string;
    sample: string;
    patientCategory: string;
    dateTime: string;
}
type ReportDetails = {
    clinicalDetails: string;
    dateTime: string;
    specimen: string;
    testRequired: string;
};

export const reportDetails: ReportDetails = {
    clinicalDetails: "Hematology/Serology Report",
    dateTime: "01-05-2022 9:39am",
    specimen: "Blood",
    testRequired: "Hematology/Serology Report",
};
export const records: TestRecord[] = [
    {
        name: "Bella Geoffrey",
        fileNumber: "REG10008",
        labCode: "LB08302021",
        testType: "Genotype",
        sample: "Blood",
        patientCategory: "Registered Patient",
        dateTime: "21-07-2022 10:00 am",
    },
    {
        name: "Bella Geoffrey",
        fileNumber: "OD10008",
        labCode: "LB08302021",
        testType: "Full Blood Count",
        sample: "Blood",
        patientCategory: "Ovum Donor",
        dateTime: "21-07-2022 10:00 am",
    },
    {
        name: "Georgiou Armoni",
        fileNumber: "SD10008",
        labCode: "LB08302021",
        testType: "Urinalysis",
        sample: "Urine",
        patientCategory: "Sperm Donor",
        dateTime: "21-07-2022 10:00 am",
    },
    {
        name: "Roselyn Wike",
        fileNumber: "WIN10008",
        labCode: "LB08302021",
        testType: "Blood Group",
        sample: "Blood",
        patientCategory: "Walk-In Patient",
        dateTime: "21-07-2022 10:00 am",
    },
    {
        name: "George Machimilon",
        fileNumber: "OPT10008",
        labCode: "LB08302021",
        testType: "Rhesus Antibody",
        sample: "Blood",
        patientCategory: "Out Patient",
        dateTime: "21-07-2022 10:00 am",
    },
    {
        name: "Isabella Adam",
        fileNumber: "SD10008",
        labCode: "LB08302021",
        testType: "Platelet Count",
        sample: "Blood",
        patientCategory: "Sperm Donor",
        dateTime: "21-07-2022 10:00 am",
    },
    {
        name: "Bella Geoffrey",
        fileNumber: "REG10008",
        labCode: "LB08302021",
        testType: "Coombs Test",
        sample: "Sputum",
        patientCategory: "Registered Patient",
        dateTime: "21-07-2022 10:00 am",
    },
    {
        name: "Bella Geoffrey",
        fileNumber: "OD10008",
        labCode: "LB08302021",
        testType: "Eosinophil Count",
        sample: "Semen",
        patientCategory: "Ovum Donor",
        dateTime: "21-07-2022 10:00 am",
    },
    {
        name: "Bella Geoffrey",
        fileNumber: "SD10008",
        labCode: "LB08302021",
        testType: "Surrogacy Test",
        sample: "Blood",
        patientCategory: "Sperm Donor",
        dateTime: "21-07-2022 10:00 am",
    },
    {
        name: "Bella Geoffrey",
        fileNumber: "WIN10008",
        labCode: "LB08302021",
        testType: "Culture test",
        sample: "Urine",
        patientCategory: "Walk-In Patient",
        dateTime: "21-07-2022 10:00 am",
    },
];

type PatientLabData = {
    name: string;
    labNumber: string;
    bedNumber: number;
    category: string;
    gender: string;
    isOnAdmission: boolean;
    fileNumber: string;
    wardNumber: number;
    testType: string;
    sample: string;
    dateTimeOfRequest: string;
    age: string;
};

export const patientsLabData: PatientLabData[] = [
    {
        name: "Bella Geoffrey",
        labNumber: "LB083120221",
        bedNumber: 3,
        category: "Registered Patient",
        gender: "Female",
        isOnAdmission: true,
        fileNumber: "REG10008",
        wardNumber: 2,
        testType: "Full Blood Count",
        sample: "Blood",
        dateTimeOfRequest: "21-07-2022 10:00 am",
        age: "38 years",
    },
];

type LabTestTemplateCard = {
    name: string;
    value: number;
    iconPath: string;
    link: string;
};

export const labTestTemplatesCardData: LabTestTemplateCard[] = [
    {
        name: "Chemistry Laboratory Report Form",
        value: 100,
        iconPath: "/icons/test-icon.svg",
        link: "/test-templates/chemistry-lab-report-form",
    },
    {
        name: "Anti-Mullerian Hormones Result",
        value: 100,
        iconPath: "/icons/test-icon.svg",
        link: "/test-templates/anti-mullerian-hormones-result",
    },
    {
        name: "Hematology/Serology Report",
        value: 100,
        iconPath: "/icons/test-icon.svg",
        link: "/test-templates/hematology-serology-report",
    },
    {
        name: "Endocrinology Report",
        value: 100,
        iconPath: "/icons/test-icon.svg",
        link: "/test-templates/endocrinology-report",
    },
    {
        name: "Buserelin Administration Chart",
        value: 100,
        iconPath: "/icons/test-icon.svg",
        link: "/test-templates/buserelin-administration-chart",
    },
    {
        name: "Microbiology Laboratory Form",
        value: 100,
        iconPath: "/icons/test-icon.svg",
        link: "/test-templates/microbiology-laboratory-form",
    },
    {
        name: "Laboratory Report Form",
        value: 100,
        iconPath: "/icons/test-icon.svg",
        link: "/test-templates/laboratory-report-form",
    },
];
