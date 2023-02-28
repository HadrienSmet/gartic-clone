import LanguagesModal from "@/components/mui/LanguagesModal";
import RoomContent from "@/components/roomPage/roomContent/RoomContent";
import React from "react";
import RoomHeader from "../components/roomPage/RoomHeader";

const room = () => {
    return (
        <main className="room">
            <RoomHeader />
            <RoomContent />
            <LanguagesModal />
        </main>
    );
};

export default room;
