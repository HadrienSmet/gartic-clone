import LanguagesModal from "@/components/mui/LanguagesModal";
import WelcomeContent from "@/components/welcomePage/WelcomeContent/WelcomeContent";
import WelcomeFooter from "@/components/welcomePage/WelcomeFooter";
import WelcomeHeader from "@/components/welcomePage/WelcomeHeader";
import React from "react";

const Welcome = () => {
    return (
        <main className="welcome">
            <WelcomeHeader />
            <WelcomeContent />
            <WelcomeFooter />
            <LanguagesModal />
        </main>
    );
};

export default Welcome;
