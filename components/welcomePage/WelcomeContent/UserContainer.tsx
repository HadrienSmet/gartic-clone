import Image from "next/image";
import React, {
    MouseEvent,
    MutableRefObject,
    useEffect,
    useRef,
    useState,
} from "react";
import { FaRedoAlt } from "react-icons/fa";

const useUserContainer = () => {
    const anonymRef = useRef<HTMLSpanElement | null>(null);
    const authRef = useRef<HTMLSpanElement | null>(null);
    const [avatarIndex, setAvatardIndex] = useState<number>(0);

    const handleNewAvatar = () => {
        const newIndex = Math.floor(Math.random() * 15);
        setAvatardIndex(newIndex);
    };

    const handleUserContainerNav = (e: MouseEvent) => {
        anonymRef.current?.classList.remove("active");
        authRef.current?.classList.remove("active");
        const target = e.target as HTMLSpanElement;
        if (target.id === "anonym") {
            anonymRef.current?.classList.add("active");
        } else {
            authRef.current?.classList.add("active");
        }
    };

    useEffect(() => {
        anonymRef.current?.classList.add("active");
    }, []);

    return {
        anonymRef,
        authRef,
        avatarIndex,
        handleNewAvatar,
        handleUserContainerNav,
    };
};

const UserContainer = () => {
    const {
        anonymRef,
        authRef,
        avatarIndex,
        handleNewAvatar,
        handleUserContainerNav,
    } = useUserContainer();
    return (
        <div className="user">
            <div className="user__header">
                <span
                    onClick={(e) => handleUserContainerNav(e)}
                    ref={anonymRef}
                    id="anonym"
                >
                    anonyme
                </span>
                <span
                    onClick={(e) => handleUserContainerNav(e)}
                    ref={authRef}
                    id="auth"
                >
                    authentification
                </span>
            </div>
            <div className="user__content">
                <div className="user__content__avatar-container">
                    <Image
                        src={`/images/gartic-avatar-${avatarIndex}.svg`}
                        alt="character icon"
                        width={180}
                        height={180}
                    />
                    <div
                        className="user__content__avatar-button"
                        onClick={handleNewAvatar}
                    >
                        <FaRedoAlt />
                    </div>
                </div>
                <div className="user__content__pseudo-container">
                    <h2>choisis un personnage et un surnom</h2>
                    <input type="text" placeholder="PseudoCool3166" />
                </div>
            </div>
            <div className="user__button-container">
                <div className="user__button">
                    <Image
                        src="/images/gartic_play.svg"
                        alt="play icon"
                        height={50}
                        width={50}
                    />
                    <span>démarrer</span>
                </div>
            </div>
        </div>
    );
};

export default UserContainer;
