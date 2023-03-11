import Image from "next/image";
import { ChangeEvent, useEffect, useState } from "react";
import { useGameContext } from "@/context/GameContext";
import { useSocketContext } from "@/context/SocketContext";
import { useUserContext } from "@/context/UserContext";
import { useUsersContext } from "@/context/UsersContext";

const placeHoldersArray = [
    "Bob l'éponge lave sa vaisselle",
    "Un escargot et son baluchon partant à l'aventure",
    "Un pirate tombe amoureux d'une sirène",
    "Un singe fait un wheeling en moto",
    "Mario répare sa plomberie",
    "Gollum demande Frodon en mariage",
];

const WrittingStep = () => {
    const [placeHolderIndex, setPlaceHolderIndex] = useState(0);
    const [sentence, setSentence] = useState("");
    const [isReady, setIsReady] = useState(false);
    const { userData } = useUserContext();
    const { usersData } = useUsersContext();
    const { gameData } = useGameContext();
    const { socket } = useSocketContext();
    const rightSerie = gameData!.series.findIndex(
        (serie) =>
            serie.id ===
            (gameData!.playerIndex + gameData!.currentRound) %
                gameData!.players.length
    );
    const oldDraw =
        gameData!.currentRound === 1
            ? ""
            : gameData!.series[rightSerie].content[gameData!.currentRound - 2]
                  .content;

    const handleSentence = (e: ChangeEvent) => {
        const target = e.target as HTMLInputElement;
        setSentence(target.value);
    };

    const saveSentence = () => {
        if (!isReady) {
            const dataObject = {
                roundId: gameData!.currentRound,
                author: {
                    pseudo: userData!.pseudo,
                    avatar: userData!.avatar,
                },
                content: sentence,
            };
            socket!.emit(
                "player-ready",
                gameData!.playerIndex,
                gameData!.currentRound,
                dataObject,
                usersData!.roomId
            );
        }
        setIsReady(true);
    };

    useEffect(() => {
        const newIndex = Math.floor(Math.random() * placeHoldersArray.length);
        setPlaceHolderIndex(newIndex);
        setIsReady(false);

        const saveSentenceOnTime = () => {
            const dataObject = {
                roundId: gameData!.currentRound,
                author: {
                    pseudo: userData!.pseudo,
                    avatar: userData!.avatar,
                },
                content: sentence,
            };
            socket!.emit(
                "save-content",
                gameData!.playerIndex,
                gameData!.currentRound,
                dataObject,
                usersData!.roomId
            );
        };

        socket!.on("time-to-save-content", () => saveSentenceOnTime());
    }, [gameData, sentence, socket, userData, usersData]);
    return (
        <div className="writting-step">
            {gameData!.currentRound === 1 ? (
                <>
                    <Image
                        id="first-round-picture"
                        src="/images/gartic-rule-1.webp"
                        alt="illustration d'un vieux téléphone à cadran"
                        width={128}
                        height={119}
                    />
                    <h1>écris une phrase</h1>
                </>
            ) : (
                <div className="draw-bg">
                    <Image
                        id="friends-draw"
                        src={typeof oldDraw === "string" ? oldDraw : ""}
                        alt="Dessin fait par votre ami"
                        width={300}
                        height={200}
                    />
                </div>
            )}

            <div className="writting-step__input-container">
                <input
                    type="text"
                    placeholder={placeHoldersArray[placeHolderIndex]}
                    onChange={(e) => handleSentence(e)}
                />
                <button onClick={saveSentence}>
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

export default WrittingStep;
