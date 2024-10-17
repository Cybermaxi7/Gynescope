import { SpouseDetailsProps } from "@/types";

export function SpouseDetailsCard({ spouse }: SpouseDetailsProps) {
    return (
        <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex flex-col xl:flex-row gap-6">
                <div className="lg:w-64">
                    <h2 className="text-sm font-medium text-[#1c1c1c]">
                        Spouse Details
                    </h2>
                    <p className="text-[13px] text-gray-500 mt-1">
                        Patient's spouse information
                    </p>
                </div>

                <div className="flex-1 bg-gray-50 rounded-lg p-4 overflow-x-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-4">
                        <div className="space-y-1">
                            <p className="text-xs text-gray-500">
                                Spouse's Name:
                            </p>
                            <p className="text-xs font-medium text-gray-900">
                                {spouse.name}
                            </p>
                        </div>
                        <div className="space-y-1">
                            <p className="text-xs text-gray-500">Contact:</p>
                            <p className="text-xs font-medium text-gray-900">
                                {spouse.contact}
                            </p>
                        </div>
                        <div className="space-y-1 overflow-x-auto">
                            <p className="text-xs text-gray-500">
                                E-mail Address:
                            </p>
                            <p className="text-xs font-medium text-gray-900">
                                {spouse.email}
                            </p>
                        </div>
                        <div className="space-y-1">
                            <p className="text-xs text-gray-500">
                                Spouse's Occupation:
                            </p>
                            <p className="text-xs font-medium text-gray-900">
                                {spouse.occupation}
                            </p>
                        </div>
                        <div className="space-y-1">
                            <p className="text-xs text-gray-500">
                                Street of Residence:
                            </p>
                            <p className="text-xs font-medium text-gray-900">
                                {spouse.streetOfResidence}
                            </p>
                        </div>
                        <div className="space-y-1">
                            <p className="text-xs text-gray-500">
                                State of Residence:
                            </p>
                            <p className="text-xs font-medium text-gray-900">
                                {spouse.stateOfResidence}
                            </p>
                        </div>
                        <div className="space-y-1">
                            <p className="text-xs text-gray-500">
                                LGA of Residence:
                            </p>
                            <p className="text-xs font-medium text-gray-900">
                                {spouse.lgaOfResidence}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
