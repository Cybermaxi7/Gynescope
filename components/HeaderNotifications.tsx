import Image from "next/image";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import HeaderInput from "./HeaderInput";

export default function HeaderNotifications() {
    const formatDate = () => {
        const today = new Date();
        const options: Intl.DateTimeFormatOptions = {
            weekday: "long", // "long" is a valid value
            day: "numeric",
            month: "long",
            year: "numeric",
        };
        return new Intl.DateTimeFormat("en-GB", options).format(today);
    };

    return (
        <div className="flex items-center gap-2 md:gap-3">
            <h3 className="hidden lg:block text-[#1c1c1c] font-normal text-sm">
                {formatDate()}
            </h3>
            <div className="flex items-center gap-2 md:gap-3 ">
                <div className="xl:hidden">
                    <Dialog>
                        <DialogTrigger asChild>
                            <Image
                                src="/icons/search.svg"
                                width={25}
                                height={25}
                                alt="user notification icon"
                            />
                        </DialogTrigger>

                        <DialogContent className="sm:max-w-md bg-white p-6">
                            <DialogHeader>
                                <DialogTitle>{formatDate()}</DialogTitle>
                                <DialogDescription className="hidden">
                                    You can use this input box to search
                                </DialogDescription>
                            </DialogHeader>
                            <HeaderInput />
                        </DialogContent>
                    </Dialog>
                </div>

                <Image
                    src="/icons/message-notification.svg"
                    width={25}
                    height={25}
                    alt="message notification icon"
                />
                <Image
                    src="/icons/bell-notification.svg"
                    width={25}
                    height={25}
                    alt="notification icon"
                />
            </div>
        </div>
    );
}
