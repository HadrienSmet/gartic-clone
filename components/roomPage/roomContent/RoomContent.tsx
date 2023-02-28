import React, { useEffect } from "react";
import ButtonsRow from "./ButtonsRow";
import PlayersContainer from "./PlayersContainer";
import SettingsContainer from "./SettingsContainer";

const RoomContent = () => {
    useEffect(() => {
        const body = document.querySelector("body");
        // if (body)
        body!.classList.add("room-bg");
    }, []);
    return (
        <section className="room-content">
            <PlayersContainer />
            <div className="room-content__setting-buttons-column">
                <SettingsContainer />
                <ButtonsRow />
            </div>
        </section>
    );
};

export default RoomContent;
