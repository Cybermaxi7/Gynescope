import Header from "@/components/Header";
import HeaderInput from "@/components/HeaderInput";
import HeaderNotifications from "@/components/HeaderNotifications";
import MessageSidebar from "@/components/MessageSidebar";
import MobileNav from "@/components/MobileNav";
import SingleMessage from "@/components/SingleMessage";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { TbSend2 } from "react-icons/tb";

const messages = [
    { message: "Hi Victor!", senderImg: "/images/ada.jpg", isSender: false },
    {
        message: "Hi Nurse Ada!",
        senderImg: "/images/victor.jpg",
        isSender: true,
    },
];

export default function Messages() {
    return (
        <div className="flex w-full">
            <header className="px-2 pb-1 fixed-header-2 md:px-6 lg:px-8">
                <aside className="block md:hidden">
                    <MobileNav />
                </aside>
                <div className="flex items-center justify-between w-full pt-2 md:pt-4 ">
                    <div className="flex items-center gap-2 py-2 md:py-0">
                        <Image
                            src="/images/ada.jpg"
                            alt="ada image"
                            width={40}
                            height={40}
                            className="rounded-full border border-[#1C7DB4] object-cover h-10 w-10"
                        />
                        <div>
                            <h3 className="text-[#09126E] font-bold text-lg md:text-xl ">
                                Nurse Ada
                            </h3>
                            <p className="hidden sm:block text-sm 2xl:text-base text-[#1c1c1c] ">
                                Nurse
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className="hidden xl:block">
                            <HeaderInput />
                        </div>
                    </div>
                    <HeaderNotifications />
                </div>
            </header>

            <div className="absolute top-[127px] md:top-0 ml-0 md:left-[140px] lg:left-[150px] 2xl:left-[194px] w-[300px] bg-[#C1E6F8]/40 h-screen flex">
                <MessageSidebar />
            </div>
            <div className="ml-[300px] w-full h-chat flex flex-col justify-between">
                <div className="flex flex-col w-full gap-2 mt-5">
                    {messages.map((message, index) => (
                        <SingleMessage
                            key={index}
                            message={message.message}
                            isSender={message.isSender}
                            senderImg={message.senderImg}
                        />
                    ))}
                </div>
                <div className="flex items-center">
                    <Input type="input" placeholder="Type Message" />

                    <div>
                        <TbSend2 />
                    </div>
                </div>
            </div>
        </div>
    );
}
