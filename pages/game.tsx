/* eslint-disable react-hooks/rules-of-hooks */
import GameContent from "@/components/gamePage/gameContent/GameContent";
import GameHeader from "@/components/gamePage/gameHeader/GameHeader";
import { useGameContext } from "@/context/GameContext";
import { useSocketContext } from "@/context/SocketContext";
import { useUserContext } from "@/context/UserContext";
import { useEffect } from "react";

const game = () => {
    const { socket } = useSocketContext();
    const { gameData, setGameData } = useGameContext();
    const { userData } = useUserContext();
    useEffect(() => {
        const body = document.querySelector("body");
        body!.classList.remove("room-bg");
        body!.classList.add("game-bg");

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
                updatedSeries[serieId].content.push(content);
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
        if (gameData!.players.length === gameData!.playersReady.length) {
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
                series: [],
            });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [gameData!.series, gameData!.playersReady]);
    return (
        <main className="game">
            <GameHeader />
            <GameContent />
        </main>
    );
};

export default game;
