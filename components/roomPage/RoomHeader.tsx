import Image from "next/image";
import Link from "next/link";
import { FaPlay, FaTwitch } from "react-icons/fa";

const RoomHeader = () => {
    return (
        <section className="room-header">
            <Link href={"/"} className="room-header__back-button">
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
                        width={50}
                        height={50}
                    />
                </div>
            </div>
        </section>
    );
};

export default RoomHeader;
