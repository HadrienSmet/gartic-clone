import React, { useEffect } from "react";
import { Socket } from "socket.io-client";
import ButtonsRow from "./ButtonsRow";
import PlayersContainer from "./PlayersContainer";
import SettingsContainer from "./settingsContainer/SettingsContainer";

type RoomProps = {
    socket: Socket | undefined;
};

const RoomContent = ({ socket }: RoomProps) => {
    useEffect(() => {
        const body = document.querySelector("body");
        body!.classList.add("room-bg");
    }, []);
    return (
        <section className="room-content">
            <PlayersContainer />
            <div className="room-content__right-column">
                <SettingsContainer />
                <ButtonsRow socket={socket} />
            </div>
        </section>
    );
};

export default RoomContent;
