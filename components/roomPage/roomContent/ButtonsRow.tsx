import { ChangeEvent, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Socket } from "socket.io-client";

import { FaCheck, FaTimes } from "react-icons/fa";
import { useUsersContext } from "@/context/UsersContext";
import { useUserContext } from "@/context/UserContext";

type ButtonsRowProps = {
    socket: Socket | undefined;
};

const ButtonsRow = ({ socket }: ButtonsRowProps) => {
    const [roomLink, setRoomLink] = useState("");
    const copyRef = useRef<HTMLSpanElement | null>(null);
    const modalRef = useRef<HTMLDivElement | null>(null);
    const inputRef = useRef<HTMLInputElement | null>(null);
    const { usersData } = useUsersContext();
    const { userData } = useUserContext();

    const handleInvitation = () => {
        navigator.clipboard.writeText(usersData!.roomId);
        copyRef.current?.classList.add("active");
        setTimeout(() => {
            copyRef.current?.classList.remove("active");
        }, 4000);
    };

    const showMeModal = () => {
        modalRef.current?.classList.add("active");
    };
    const hideMeModal = () => {
        modalRef.current?.classList.remove("active");
    };

    const handleRoomLink = (e: ChangeEvent<HTMLInputElement>) => {
        setRoomLink(e.target.value);
    };

    const handleJoinRoom = () => {
        hideMeModal();
        socket!.emit("join-room", roomLink, usersData?.roomId, userData);
        setRoomLink("");
        inputRef.current!.value = "";
    };

    return (
        <div className="room-content__buttons-row">
            <button onClick={handleInvitation}>
                <Image
                    src={"/images/gartic_link.svg"}
                    alt="illu d'un lien"
                    width={29}
                    height={30}
                />
                <span>inviter</span>
                <span ref={copyRef} className="copy">
                    lien copié
                </span>
            </button>
            <button>
                <div ref={modalRef} className="join-room-form">
                    <div className="join-room-form__header">
                        <h3>Copie le lien de ton ami!</h3>
                        <FaTimes onClick={hideMeModal} />
                    </div>
                    <input
                        ref={inputRef}
                        type="text"
                        name="link"
                        id="link"
                        onBlur={(e) => handleRoomLink(e)}
                    />
                    <span onClick={handleJoinRoom}>rejoindre</span>
                </div>
                <Image
                    src={"/images/gartic_link.svg"}
                    alt="illu d'un lien"
                    width={29}
                    height={30}
                />
                <span onClick={showMeModal}>rejoindre</span>
            </button>
            <button>
                <Image
                    src={"/images/gartic_play.svg"}
                    alt="illu d'un boutton play"
                    width={29}
                    height={30}
                />
                <span>démarrer</span>
            </button>
        </div>
    );
};

export default ButtonsRow;
