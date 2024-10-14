import { HeaderIntro } from "@/types";

export default function HeaderIntro({ heading, subheading }: HeaderIntro) {
    return (
        <div className="flex flex-col items-start py-2 md:py-0  gap-1">
            <h3 className="text-[#09126E] font-bold text-xl md:text-2xl ">
                {heading}
            </h3>
            <p className="hidden sm:block text-sm 2xl:text-base text-[#1c1c1c] ">
                {subheading}
            </p>
        </div>
    );
}
