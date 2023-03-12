/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

import { useGameContext } from "@/context/GameContext";
import { useSocketContext } from "@/context/SocketContext";

import GameContent from "@/components/gamePage/gameContent/GameContent";
import GameHeader from "@/components/gamePage/gameHeader/GameHeader";

// const useGame = () => {

//     return { gameData };
// };

const game = () => {
    const { socket } = useSocketContext();
    const { gameData, setGameData } = useGameContext();
    const router = useRouter();

    useEffect(() => {
        const body = document.querySelector("body");
        body!.classList.remove("room-bg");
        body!.classList.add("game-bg");
    }, []);

    useEffect(() => {
        socket!.on("player-saved-content", (playerIndex, round, content) => {
            const serieId = gameData!.series.findIndex(
                (serie) =>
                    serie.id ===
                    (playerIndex + round) % gameData!.players.length
            );
            const updatedPlayersReady = [
                ...gameData!.playersReady,
                playerIndex,
            ];

            if (serieId !== -1) {
                const updatedSeries = [...gameData!.series];
                const isAlready = updatedSeries[serieId].content.find(
                    (round) => round.roundId === content.roundId
                );
                if (isAlready === undefined) {
                    updatedSeries[serieId].content.push(content);
                }
                setGameData!({
                    players: gameData!.players,
                    playersReady: updatedPlayersReady,
                    playerIndex: gameData!.playerIndex,
                    gameState: gameData!.gameState,
                    currentRound: gameData!.currentRound,
                    writtingTime: gameData!.writtingTime,
                    drawingTime: gameData!.drawingTime,
                    series: updatedSeries,
                });
            } else {
                const newSerie = {
                    id: (playerIndex + round) % gameData!.players.length,
                    content: [content],
                };
                const updatedSeries = [...gameData!.series, newSerie];

                setGameData!({
                    players: gameData!.players,
                    playersReady: updatedPlayersReady,
                    playerIndex: gameData!.playerIndex,
                    gameState: gameData!.gameState,
                    currentRound: gameData!.currentRound,
                    writtingTime: gameData!.writtingTime,
                    drawingTime: gameData!.drawingTime,
                    series: updatedSeries,
                });
            }
        });
        //Handles the behavior when all players are ready for the next round
        if (gameData!.players.length === gameData!.playersReady.length) {
            if (gameData!.currentRound === gameData!.players.length) {
                router.push("results");
            } else {
                const nexRound =
                    gameData!.gameState === "writte" ? "draw" : "writte";
                setGameData!({
                    players: gameData!.players,
                    playersReady: [],
                    playerIndex: gameData!.playerIndex,
                    gameState: nexRound,
                    currentRound: gameData!.currentRound + 1,
                    writtingTime: gameData!.writtingTime,
                    drawingTime: gameData!.drawingTime,
                    series: gameData!.series,
                });
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [gameData!.series, gameData!.playersReady]);
    // const { gameData } = useGame();
    return (
        <>
            <Head>
                <title>Gartic Clone - Game - {gameData!.gameState}</title>
                <meta
                    name="description"
                    content={
                        gameData!.gameState === "draw"
                            ? "Dessine la situation que ton ami t'as donné!"
                            : "Décris une situation que ton amis devra décrire!"
                    }
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="game">
                <GameHeader />
                <GameContent />
            </main>
        </>
    );
};

export default game;
