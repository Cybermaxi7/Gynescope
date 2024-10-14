interface PatientDetailsProps {
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
}

export default function PatientDetailsCard({ patient }: PatientDetailsProps) {
    return (
        <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex flex-col xl:flex-row gap-6 ">
                {/* Left side - Title */}
                <div className="lg:w-64">
                    <h2 className="text-sm font-medium text-[#1c1c1c]">
                        Patient's Personal Details
                    </h2>
                    <p className="text-[13px] text-gray-500 mt-1">
                        Patient's personal information.
                    </p>
                </div>

                {/* Right side - Details Grid */}
                <div className="flex-1 bg-gray-50 rounded-lg p-4 overflow-x-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-4">
                        {/* Row 1 */}
                        <div className="space-y-1">
                            <p className="text-xs text-gray-500">
                                Patient's Name:
                            </p>
                            <p className="text-xs font-medium text-gray-900">
                                {patient.name}
                            </p>
                        </div>
                        <div className="space-y-1">
                            <p className="text-xs text-gray-500">Gender:</p>
                            <p className="text-xs font-medium text-gray-900">
                                {patient.gender}
                            </p>
                        </div>
                        <div className="space-y-1">
                            <p className="text-xs text-gray-500">
                                Date of Birth:
                            </p>
                            <p className="text-xs font-medium text-gray-900">
                                {patient.dateOfBirth}
                            </p>
                        </div>
                        <div className="space-y-1">
                            <p className="text-xs text-gray-500">
                                Place of Birth:
                            </p>
                            <p className="text-xs font-medium text-gray-900">
                                {patient.placeOfBirth}
                            </p>
                        </div>

                        {/* Row 2 */}
                        <div className="space-y-1">
                            <p className="text-xs text-gray-500">Occupation:</p>
                            <p className="text-xs font-medium text-gray-900">
                                {patient.occupation}
                            </p>
                        </div>
                        <div className="space-y-1">
                            <p className="text-xs text-gray-500">Contact:</p>
                            <p className="text-xs font-medium text-gray-900">
                                {patient.contact}
                            </p>
                        </div>
                        <div className="space-y-1">
                            <p className="text-xs text-gray-500">
                                Alt Contact:
                            </p>
                            <p className="text-xs font-medium text-gray-900">
                                {patient.altContact}
                            </p>
                        </div>
                        <div className="space-y-1">
                            <p className="text-xs text-gray-500">
                                E-mail Address:
                            </p>
                            <p className="text-xs font-medium text-gray-900">
                                {patient.email}
                            </p>
                        </div>

                        {/* Row 3 */}
                        <div className="space-y-1">
                            <p className="text-xs text-gray-500">
                                Nationality:
                            </p>
                            <p className="text-xs font-medium text-gray-900">
                                {patient.nationality}
                            </p>
                        </div>
                        <div className="space-y-1">
                            <p className="text-xs text-gray-500">
                                State of Origin:
                            </p>
                            <p className="text-xs font-medium text-gray-900">
                                {patient.stateOfOrigin}
                            </p>
                        </div>
                        <div className="space-y-1">
                            <p className="text-xs text-gray-500">
                                LGA of Origin:
                            </p>
                            <p className="text-xs font-medium text-gray-900">
                                {patient.lgaOfOrigin}
                            </p>
                        </div>
                        <div className="space-y-1">
                            <p className="text-xs text-gray-500">Ethnicity:</p>
                            <p className="text-xs font-medium text-gray-900">
                                {patient.ethnicity}
                            </p>
                        </div>

                        {/* Row 4 */}
                        <div className="space-y-1">
                            <p className="text-xs text-gray-500">Religion:</p>
                            <p className="text-xs font-medium text-gray-900">
                                {patient.religion}
                            </p>
                        </div>
                        <div className="space-y-1">
                            <p className="text-xs text-gray-500">
                                Marital Status:
                            </p>
                            <p className="text-xs font-medium text-gray-900">
                                {patient.maritalStatus}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
