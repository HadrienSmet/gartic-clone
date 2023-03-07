import Image from "next/image";
import React, { useEffect, useRef } from "react";
import TimeIndicator from "./TimeIndicator";

const GameHeader = () => {
    return (
        <div className="game-header">
            <div className="game-header__step-indicator">1/4</div>
            <Image
                src={"/images/gartic-logo.png"}
                alt="Logo de Gartic phone"
                width={300}
                height={150}
            />
            <TimeIndicator />
        </div>
    );
};

export default GameHeader;
