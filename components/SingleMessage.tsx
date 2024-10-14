import Image from "next/image";

export default function SingleMessage({
    message,
    senderImg,
    isSender,
}: {
    message: string;
    senderImg: string;
    isSender: boolean;
}) {
    return (
        <div
            className={`flex ${
                isSender
                    ? "flex-row-reverse justify-end self-end"
                    : "flex-row justify-start"
            } gap-3 items-center`}
        >
            <Image
                src={senderImg}
                alt="image"
                width={40}
                height={40}
                className="rounded-full border border-[#1C7DB4] object-cover h-10 w-10"
            />
            <div className="bg-[#C1E6F8]/40 px-5 py-3 border-[0.5px] border-[#09126E] rounded-[10px]">
                <p className="text-xs font-medium">{message}</p>
            </div>
        </div>
    );
}
