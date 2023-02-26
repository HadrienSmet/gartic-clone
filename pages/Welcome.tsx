import WelcomeContent from "@/components/welcomePage/WelcomeContent/WelcomeContent";
import WelcomeHeader from "@/components/welcomePage/WelcomeHeader";
import React from "react";

const Welcome = () => {
    return (
        <main className="welcome">
            <WelcomeHeader />
            <WelcomeContent />
        </main>
    );
};

export default Welcome;
