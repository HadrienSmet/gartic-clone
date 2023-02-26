import Image from "next/image";
import React from "react";
import { FaRedoAlt } from "react-icons/fa";

const UserContainer = () => {
    return (
        <div className="user">
            <div className="user__header">
                <span className="active" id="anonym">
                    anonyme
                </span>
                <span id="auth">authentification</span>
            </div>
            <div className="user__content">
                <div className="user__content__avatar-container">
                    <Image
                        src="/images/gartic-avatar-0.svg"
                        alt="character icon"
                        width={180}
                        height={180}
                    />
                    <div className="user__content__avatar-button">
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
