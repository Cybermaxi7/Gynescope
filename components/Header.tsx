import HeaderInput from "./HeaderInput";
import HeaderIntro from "./HeaderIntro";
import HeaderNotifications from "./HeaderNotifications";
import MobileNav from "./MobileNav";

export default function Header({
    heading,
    subheading,
}: {
    heading: string;
    subheading: string;
}) {
    return (
        <header className="fixed-header px-2 md:px-6 lg:px-8 pb-1">
            <aside className="block md:hidden">
                <MobileNav />
            </aside>
            <div className="flex items-center justify-between w-full  pt-2 md:pt-4 ">
                <HeaderIntro heading={heading} subheading={subheading} />
                <div>
                    <div className="hidden xl:block">
                        <HeaderInput />
                    </div>
                </div>
                <HeaderNotifications />
            </div>
        </header>
    );
}
