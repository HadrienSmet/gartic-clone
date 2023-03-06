/* eslint-disable react-hooks/rules-of-hooks */
import GameContent from "@/components/gamePage/gameContent/GameContent";
import GameHeader from "@/components/gamePage/gameHeader/GameHeader";
import React, { useEffect } from "react";

const game = () => {
    useEffect(() => {
        const body = document.querySelector("body");
        body!.classList.remove("room-bg");
        body!.classList.add("game-bg");
    }, []);
    return (
        <main className="game">
            <GameHeader />
            <GameContent />
        </main>
    );
};

export default game;
