import { useSocketContext } from "@/context/SocketContext";
import { useUserContext } from "@/context/UserContext";
import { useUsersContext } from "@/context/UsersContext";
import Image from "next/image";
import Link from "next/link";
import { FaCog, FaPlay, FaTwitch } from "react-icons/fa";

const RoomHeader = () => {
    const { userData } = useUserContext();
    const { usersData } = useUsersContext();
    const { socket } = useSocketContext();

    const handleLeaveRoom = () => {
        socket!.emit(
            "player-leaving-the-room",
            userData!.pseudo,
            usersData!.roomId
        );
    };

    const showSettingsContainer = () => {
        const settings = document.querySelector(".settings-container");
        if (settings) settings.classList.add("active");
    };

    return (
        <section className="room-header">
            <Link
                href={"/"}
                className="room-header__back-button"
                onClick={handleLeaveRoom}
            >
                <FaPlay />
                <span>retour</span>
            </Link>
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
                        width={6}
                        height={7}
                    />
                </div>
            </div>
            <FaCog
                onClick={showSettingsContainer}
                className="room-header__settings-button"
            />
        </section>
    );
};

export default RoomHeader;
