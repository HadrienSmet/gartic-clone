import Image from "next/image";
import React from "react";
import { ImSphere } from "react-icons/im";
import { FaTwitch } from "react-icons/fa";

const WelcomeHeader = () => {
    return (
        <section className="welcome-header">
            <div className="welcome-header__country-container">
                <ImSphere />
                <span>FR</span>
            </div>
            <div className="welcome-header__logo-container">
                <Image
                    src="/images/gartic-logo.png"
                    alt="logo"
                    width={300}
                    height={150}
                />
                <h1>téléphone sans fil</h1>
            </div>
            <div className="welcome-header__streamers-container">
                <div className="welcome-header__streamers-container__first-row">
                    <FaTwitch />
                    <p>Streamers en direct</p>
                </div>
                <div className="welcome-header__streamer-picture">
                    <Image
                        src="/images/gartic-avatar-12.svg"
                        alt="streamer picture"
                        width={50}
                        height={50}
                    />
                </div>
            </div>
        </section>
    );
};

export default WelcomeHeader;
