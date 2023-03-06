import Image from "next/image";
import React from "react";

const GameHeader = () => {
    return (
        <div className="game-header">
            <div className="game-header__step-container">1/4</div>
            <Image
                src={"/images/gartic-logo.png"}
                alt="Logo de Gartic phone"
                width={300}
                height={150}
            />
            <div className="game-header__time-indicator"></div>
        </div>
    );
};

export default GameHeader;
