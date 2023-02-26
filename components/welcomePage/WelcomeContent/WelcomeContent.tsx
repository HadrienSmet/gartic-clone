import React from "react";
import RulesContainer from "./RulesContainer";
import UserContainer from "./UserContainer";

const WelcomeContent = () => {
    return (
        <section className="welcome-content">
            <UserContainer />
            <RulesContainer />
        </section>
    );
};

export default WelcomeContent;
