import Image from "next/image";
import React, { useEffect, useState } from "react";
import { ImSphere } from "react-icons/im";
import { FaTwitch } from "react-icons/fa";

const useRoomHeader = () => {
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

    useEffect(() => {
        setIsBrowser(true);
    }, []);

    return {
        showLanguagesModal,
    };
};

const RoomHeader = () => {
    const { showLanguagesModal } = useRoomHeader();

    return (
        <section className="room-header">
            <div
                className="room-header__country-container"
                onClick={showLanguagesModal}
            >
                <ImSphere />
                <span>FR</span>
            </div>
            <div className="room-header__logo-container">
                <Image
                    src="/images/gartic-logo.png"
                    alt="logo"
                    width={300}
                    height={150}
                />
            </div>
            <div className="room-header__streamers-container">
                <div className="room-header__streamers-container__first-row">
                    <FaTwitch />
                    <p>Streamers en direct</p>
                </div>
                <div className="room-header__streamer-picture">
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

export default RoomHeader;
