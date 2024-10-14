interface HospitalDetailsProps {
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
}

export function HospitalDetailsCard({ details }: HospitalDetailsProps) {
    return (
        <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex flex-col xl:flex-row gap-6">
                <div className="lg:w-64">
                    <h2 className="text-sm font-medium text-[#1c1c1c]">
                        Patient's Hospital Details
                    </h2>
                    <p className="text-[13px] text-gray-500 mt-1">
                        Patient's personal information.
                    </p>
                </div>

                <div className="flex-1 bg-gray-50 rounded-lg p-4 overflow-x-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-4">
                        {/* Row 1 */}
                        <div className="space-y-1">
                            <p className="text-xs text-gray-500">
                                Patient's Category:
                            </p>
                            <p className="text-xs font-medium text-gray-900">
                                {details.category}
                            </p>
                        </div>
                        <div className="space-y-1">
                            <p className="text-xs text-gray-500">
                                Registration Prefix:
                            </p>
                            <p className="text-xs font-medium text-gray-900">
                                {details.registrationPrefix}
                            </p>
                        </div>
                        <div className="space-y-1">
                            <p className="text-xs text-gray-500">
                                Registration Code:
                            </p>
                            <p className="text-xs font-medium text-gray-900">
                                {details.registrationCode}
                            </p>
                        </div>
                        <div className="space-y-1">
                            <p className="text-xs text-gray-500">
                                File Number:
                            </p>
                            <p className="text-xs font-medium text-gray-900">
                                {details.fileNumber}
                            </p>
                        </div>

                        {/* Row 2 */}
                        <div className="space-y-1">
                            <p className="text-xs text-gray-500">Entry Date:</p>
                            <p className="text-xs font-medium text-gray-900">
                                {details.entryDate}
                            </p>
                        </div>
                        <div className="space-y-1">
                            <p className="text-xs text-gray-500">
                                Expiry Date:
                            </p>
                            <p className="text-xs font-medium text-gray-900">
                                {details.expiryDate}
                            </p>
                        </div>
                        <div className="space-y-1">
                            <p className="text-xs text-gray-500">Referrer:</p>
                            <p className="text-xs font-medium text-gray-900">
                                {details.referrer}
                            </p>
                        </div>
                        <div className="space-y-1">
                            <p className="text-xs text-gray-500">
                                Reference Number:
                            </p>
                            <p className="text-xs font-medium text-gray-900">
                                {details.referenceNumber}
                            </p>
                        </div>

                        {/* Row 3 */}
                        <div className="space-y-1">
                            <p className="text-xs text-gray-500">Medic:</p>
                            <p className="text-xs font-medium text-gray-900">
                                {details.medic}
                            </p>
                        </div>
                        <div className="space-y-1">
                            <p className="text-xs text-gray-500">
                                Previous Hospital:
                            </p>
                            <p className="text-xs font-medium text-gray-900">
                                {details.previousHospital}
                            </p>
                        </div>
                        <div className="space-y-1">
                            <p className="text-xs text-gray-500">
                                Transfer Letter:
                            </p>
                            <button className="text-xs text-white bg-blue-500 px-3 py-1 rounded-md">
                                View file
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
