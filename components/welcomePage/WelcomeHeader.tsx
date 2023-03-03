import Image from "next/image";
import React, { useEffect, useState } from "react";
import { ImInfo, ImSphere } from "react-icons/im";
import { FaTwitch } from "react-icons/fa";

const useWelcomeHeader = () => {
    const [isBrowser, setIsBrowser] = useState(false);

    const showLanguagesModal = () => {
        const modalContainer = isBrowser
            ? document.querySelector(".languages-modal__container")
            : null;
        const modalLayout = isBrowser
            ? document.querySelector(".languages-modal__layout")
            : null;
        modalContainer?.classList.add("active");
        modalLayout?.classList.add("active");
    };

    const showRulesModal = () => {
        const mobileRules = isBrowser ? document.querySelector(".rules") : null;
        mobileRules?.classList.add("active");
    };

    useEffect(() => {
        setIsBrowser(true);
    }, []);

    return {
        showLanguagesModal,
        showRulesModal,
    };
};

const WelcomeHeader = () => {
    const { showLanguagesModal, showRulesModal } = useWelcomeHeader();

    return (
        <section className="welcome-header">
            <div
                className="welcome-header__country-container"
                onClick={showLanguagesModal}
            >
                <ImSphere />
                <span>FR</span>
            </div>
            <div className="welcome-header__logo-container">
                <Image
                    priority
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
                        width={6}
                        height={7}
                    />
                </div>
            </div>
            <ImInfo
                className="welcome-header__mobile-infos"
                onClick={showRulesModal}
            />
        </section>
    );
};

export default WelcomeHeader;
