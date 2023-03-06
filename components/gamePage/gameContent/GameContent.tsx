import Image from "next/image";
import React from "react";

const GameContent = () => {
    return (
        <div className="game-content">
            <Image
                src="/images/gartic-rule-1.webp"
                alt="illustration d'un vieux téléphone à cadran"
                width={128}
                height={119}
            />
            <h1>écris une phrase</h1>
            <div className="game-content__input-container">
                <input type="text" />
                <button>
                    <Image
                        src="/images/gartic_ready.svg"
                        alt="illustration symbolisant que vous êtes prêt"
                        width={30}
                        height={30}
                    />
                    <span>terminé !</span>
                </button>
            </div>
        </div>
    );
};

export default GameContent;
