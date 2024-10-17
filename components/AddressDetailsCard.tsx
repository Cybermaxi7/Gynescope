import { AddressDetailsProps } from "@/types";

export function AddressDetailsCard({ address }: AddressDetailsProps) {
    return (
        <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex flex-col xl:flex-row gap-6">
                <div className="lg:w-64">
                    <h2 className="text-sm font-medium text-[#1c1c1c]">
                        Patient's Address
                    </h2>
                    <p className="text-[13px] text-gray-500 mt-1">
                        Patient's residential address
                    </p>
                </div>

                <div className="flex-1 bg-gray-50 rounded-lg p-4 overflow-x-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-4">
                        <div className="space-y-1">
                            <p className="text-xs text-gray-500">
                                Street of Residence:
                            </p>
                            <p className="text-xs font-medium text-gray-900">
                                {address.streetOfResidence}
                            </p>
                        </div>
                        <div className="space-y-1">
                            <p className="text-xs text-gray-500">
                                City of Residence:
                            </p>
                            <p className="text-xs font-medium text-gray-900">
                                {address.cityOfResidence}
                            </p>
                        </div>
                        <div className="space-y-1">
                            <p className="text-xs text-gray-500">
                                State of Residence:
                            </p>
                            <p className="text-xs font-medium text-gray-900">
                                {address.stateOfResidence}
                            </p>
                        </div>
                        <div className="space-y-1">
                            <p className="text-xs text-gray-500">
                                LGA of Residence:
                            </p>
                            <p className="text-xs font-medium text-gray-900">
                                {address.lgaOfResidence}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
