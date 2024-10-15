interface SidebarItem {
    title: string;
    icon: string;
    link: string;
    alt: string;
}
const sidebarItems: SidebarItem[] = [
    {
        title: "Dashboard",
        icon: "/icons/dashboard.svg",
        link: "/",
        alt: "Dashboard Icon",
    },
    {
        title: "Patients",
        icon: "/icons/people.svg",
        link: "/patients",
        alt: "Patients Icon",
    },
    {
        title: "Lab. Tests",
        icon: "/icons/laboratory.svg",
        link: "/lab-tests",
        alt: "Lab Tests Icon",
    },
    {
        title: "Test Templates",
        icon: "/icons/hospitalisation.svg",
        link: "/test-templates",
        alt: "Test Templates Icon",
    },
    {
        title: "Message",
        icon: "/icons/message.svg",
        link: "/messages",
        alt: "Message Icon",
    },
    {
        title: "Report",
        icon: "/icons/request.svg",
        link: "/reports",
        alt: "Report Icon",
    },
    {
        title: "Logout",
        icon: "/icons/log-out.svg",
        link: "/log-out",
        alt: "Logout Icon",
    },
];

export default sidebarItems;
