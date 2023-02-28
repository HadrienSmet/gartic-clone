import Image from "next/image";
import React, {
    ChangeEvent,
    MouseEvent,
    MutableRefObject,
    useEffect,
    useRef,
    useState,
} from "react";
import { FaRedoAlt, FaTimes } from "react-icons/fa";

type UserDataType = {
    pseudo: string;
    imgUrl: string;
};

const useUserContainer = () => {
    const anonymRef = useRef<HTMLSpanElement | null>(null);
    const authRef = useRef<HTMLSpanElement | null>(null);
    const [avatarIndex, setAvatardIndex] = useState<number>(0);
    const [loginState, setLoginState] = useState("anonym");
    const [userData, setUserData] = useState<UserDataType>({
        pseudo: "",
        imgUrl: "",
    });

    const handleNewAvatar = () => {
        const newIndex = Math.floor(Math.random() * 15);
        setAvatardIndex(newIndex);
        setUserData({
            pseudo: userData.pseudo,
            imgUrl: `/images/gartic-avatar-${newIndex}.svg`,
        });
    };

    const handleUserContainerNav = (e: MouseEvent) => {
        anonymRef.current?.classList.remove("active");
        authRef.current?.classList.remove("active");
        const target = e.target as HTMLSpanElement;
        if (target.id === "anonym") {
            anonymRef.current?.classList.add("active");
            setLoginState("anonym");
        } else {
            authRef.current?.classList.add("active");
            setLoginState("auth");
        }
    };

    useEffect(() => {
        anonymRef.current?.classList.add("active");
    }, []);

    const handlePseudo = (e: ChangeEvent<HTMLInputElement>) => {
        setUserData({
            pseudo: e.target.value,
            imgUrl: userData.imgUrl,
        });
    };

    const handleSubmission = () => {
        console.log(userData);
        window.location.href = "http://localhost:3000/room";
    };
    return {
        anonymRef,
        authRef,
        avatarIndex,
        loginState,
        handleNewAvatar,
        handleUserContainerNav,
        handlePseudo,
        handleSubmission,
    };
};

const UserContainer = () => {
    const {
        anonymRef,
        authRef,
        avatarIndex,
        loginState,
        handleNewAvatar,
        handleUserContainerNav,
        handlePseudo,
        handleSubmission,
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
                {loginState === "anonym" ? (
                    <>
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
                            <input
                                type="text"
                                placeholder="PseudoCool3166"
                                onBlur={(e) => handlePseudo(e)}
                            />
                        </div>
                    </>
                ) : (
                    <>
                        <div className="user__content__avatar-container">
                            <Image
                                src={`/images/gartic-avatar-7.svg`}
                                alt="character icon"
                                width={180}
                                height={180}
                            />
                        </div>
                        <div className="user__content__message-container">
                            <h3>pas encore codé</h3>
                            <FaTimes />
                        </div>
                    </>
                )}
            </div>
            <div className="user__button-container">
                <div className="user__button" onClick={handleSubmission}>
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
