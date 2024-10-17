/* eslint-disable no-unused-vars */

declare type SearchParamProps = {
    params: { [key: string]: string };
    searchParams: { [key: string]: string | string[] | undefined };
};
// Define the type for a sidebar item
export type SidebarItem = {
    title: string;
    icon: string;
    link: string;
    alt: string;
};

declare type HeaderIntroType = {
    heading: string;
    subheading: string;
};
// ========================================

declare type SignUpParams = {
    firstName: string;
    lastName: string;
    address1: string;
    city: string;
    state: string;
    postalCode: string;
    dateOfBirth: string;
    ssn: string;
    email: string;
    password: string;
};

declare type LoginUser = {
    email: string;
    password: string;
};

declare type User = {
    $id: string;
    email: string;
    userId: string;
    dwollaCustomerUrl: string;
    dwollaCustomerId: string;
    firstName: string;
    lastName: string;
    address1: string;
    city: string;
    state: string;
    postalCode: string;
    dateOfBirth: string;
    ssn: string;
};

declare type NewUserParams = {
    userId: string;
    email: string;
    name: string;
    password: string;
};

declare type AddressDetailsProps = {
    address: {
        streetOfResidence: string;
        cityOfResidence: string;
        stateOfResidence: string;
        lgaOfResidence: string;
    };
};

declare type EmergencyContactProps = {
    contact: {
        spouseName: string;
        contact: string;
        altContact: string;
        email: string;
        streetOfResidence: string;
        stateOfResidence: string;
        lgaOfResidence: string;
    };
};

declare type HospitalDetailsProps = {
    details: {
        category: string;
        registrationPrefix: string;
        registrationCode: string;
        fileNumber: string;
        entryDate: string;
        expiryDate: string;
        referrer: string;
        referenceNumber: string;
        medic: string;
        previousHospital: string;
        transferLetter: string;
    };
};

declare type PatientDetailsProps = {
    patient: {
        name: string;
        gender: string;
        dateOfBirth: string;
        placeOfBirth: string;
        occupation: string;
        contact: string;
        altContact: string;
        email: string;
        nationality: string;
        stateOfOrigin: string;
        lgaOfOrigin: string;
        ethnicity: string;
        religion: string;
        maritalStatus: string;
    };
};

declare type SpouseDetailsProps = {
    spouse: {
        name: string;
        contact: string;
        email: string;
        occupation: string;
        streetOfResidence: string;
        stateOfResidence: string;
        lgaOfResidence: string;
    };
};
