import HeaderBox from "@/components/HeaderBox";
import RightSidebar from "@/components/RightSidebar";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import React from "react";

export default function Home() {
    const loggedIn = {
        firstName: "Cybermaxi",
        lastName: "Dev",
        email: "cybermaxi@yahoo.com",
    };
    return (
        <section className="home font-poppins">
            <div className="home-content">
                <header className="home-header">
                    <HeaderBox
                        type="greeting"
                        title="Welcome"
                        user={loggedIn?.firstName || "Guest"}
                        subtext="Access and manage your accounts and transactions effectively"
                    />
                    <TotalBalanceBox
                        accounts={[]}
                        totalBanks={1}
                        totalCurrentBalance={1250.35}
                    />
                </header>
                RECENT TRANSACTIONS
            </div>
            <RightSidebar
                user={loggedIn}
                transactions={[]}
                banks={[{ currentBalance: 123.4 }, { currentBalance: 431.4 }]}
            />
        </section>
    );
}
