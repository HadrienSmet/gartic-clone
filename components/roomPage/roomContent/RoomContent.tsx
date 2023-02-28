import React from "react";
import ButtonsRow from "./ButtonsRow";
import PlayersContainer from "./PlayersContainer";
import SettingsContainer from "./SettingsContainer";

const RoomContent = () => {
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
