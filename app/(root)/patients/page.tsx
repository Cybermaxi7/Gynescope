import Header from "@/components/Header";
import Image from "next/image";
import { redirect } from "next/navigation";

export default function Patients() {
    return (
        // <div>
        //     <Header heading="Bella Geoffrey" subheading="> Profile Overview" />
        //     <div className="w-full mb-10 flex">
        //         <div className="bg-[#edf6fb] flex flex-col gap-1 min-h-screen w-[290px] px-3 py-4">
        //             <div className="p-2 bg-[#f6f9fc] w-8 h-8 rounded-full border border-[#A0AAAF] mb-1">
        //                 <Image
        //                     src="/icons/user.svg"
        //                     width={20}
        //                     height={20}
        //                     alt="user icon"
        //                 />
        //             </div>
        //             <h3 className="text-[#1C7DB4] font-semibold text-base">
        //                 Bella Geoffrey
        //             </h3>

        //             <p className="font-medium text-xs flex gap-1 mb-1">
        //                 File Number:
        //                 <span className="font-light">Reg100</span>
        //             </p>
        //             <div className="flex flex-wrap gap-2">
        //                 <div className="flex items-center gap-1">
        //                     <div className="bg-[#1C7DB4] w-[6px] rounded-full h-[6px]"></div>
        //                     <p className="font-medium text-xs tracking-[5%] flex items-center gap-1">
        //                         Date of Birth:
        //                         <span className="font-light">22-07-1989</span>
        //                     </p>
        //                 </div>
        //                 <div className="flex items-center gap-1">
        //                     <div className="bg-[#1C7DB4] w-[6px] rounded-full h-[6px]"></div>
        //                     <p className="font-medium text-xs tracking-[5%] flex items-center gap-1">
        //                         Age:
        //                         <span className="font-light">39 years</span>
        //                     </p>
        //                 </div>
        //                 <div className="flex items-center gap-1">
        //                     <div className="bg-[#1C7DB4] w-[6px] rounded-full h-[6px]"></div>
        //                     <p className="font-medium text-xs tracking-[5%] flex items-center gap-1">
        //                         Gender
        //                         <span className="font-light">Female</span>
        //                     </p>
        //                 </div>
        //                 <div className="flex items-center gap-1">
        //                     <div className="bg-[#1C7DB4] w-[6px] rounded-full h-[6px]"></div>
        //                     <p className="font-medium text-xs tracking-[5%] flex items-center gap-1">
        //                         E-mail:
        //                         <span className="font-light">
        //                             bellageoffrey@gmail.com
        //                         </span>
        //                     </p>
        //                 </div>
        //             </div>
        //             <div className="flex items-center gap-4 mt-4">
        //                 <div className="flex flex-col justify-start items-center">
        //                     <div className="w-10 h-8 p-2 bg-[#9CCDFE]/50 rounded flex items-center justify-center">
        //                         <Image
        //                             src="/icons/message-2.svg"
        //                             width={100}
        //                             height={100}
        //                             alt="message-icon"
        //                         />
        //                     </div>
        //                     <p className="text-[#1c1c1c] font-medium text-xs tracking-[5%]">
        //                         Message
        //                     </p>
        //                 </div>
        //                 <div className="flex flex-col justify-start items-center">
        //                     <div className="w-10 h-8 p-2 bg-[#9CCDFE]/50 rounded flex items-center justify-center">
        //                         <Image
        //                             src="/icons/mail.svg"
        //                             width={100}
        //                             height={100}
        //                             alt="message-icon"
        //                         />
        //                     </div>
        //                     <p className="text-[#1c1c1c] font-medium text-xs tracking-[5%]">
        //                         SMS
        //                     </p>
        //                 </div>
        //                 <div className="flex flex-col justify-start items-center">
        //                     <div className="w-10 h-8 p-2 bg-[#9CCDFE]/50 rounded flex items-center justify-center">
        //                         <Image
        //                             src="/icons/write.svg"
        //                             width={100}
        //                             height={100}
        //                             alt="message-icon"
        //                         />
        //                     </div>
        //                     <p className="text-[#1c1c1c] font-medium text-xs tracking-[5%]">
        //                         Edit
        //                     </p>
        //                 </div>
        //                 <div className="flex flex-col justify-start items-center">
        //                     <div className="w-10 h-8 p-2 bg-[#9CCDFE]/50 rounded flex items-center justify-center justify-center">
        //                         <Image
        //                             src="/icons/vertical-dot.svg"
        //                             width={5}
        //                             height={5}
        //                             alt="message-icon"
        //                         />
        //                     </div>
        //                     <p className="text-[#1c1c1c] font-medium text-xs tracking-[5%]">
        //                         More
        //                     </p>
        //                 </div>
        //             </div>
        //         </div>
        //         <div></div>
        //     </div>
        // </div>
        redirect("/patients/overview")
    );
}
