import Image from "next/image";
import { ChangeEvent, useEffect, useRef, useState } from "react";
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

const useWrittingStep = () => {
    const [placeHolderIndex, setPlaceHolderIndex] = useState(0);
    const [isReady, setIsReady] = useState(false);
    const buttonRef = useRef<HTMLButtonElement | null>(null);
    const inputRef = useRef("");

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
        inputRef.current = target.value;
    };

    const saveSentence = () => {
        if (!isReady) {
            setIsReady((curr) => !curr);
            const dataObject = {
                roundId: gameData!.currentRound,
                author: {
                    pseudo: userData!.pseudo,
                    avatar: userData!.avatar,
                },
                content: inputRef.current,
            };
            socket!.emit(
                "player-ready",
                gameData!.playerIndex,
                gameData!.currentRound,
                dataObject,
                usersData!.roomId
            );
        }
    };

    useEffect(() => {
        const newIndex = Math.floor(Math.random() * placeHoldersArray.length);
        setPlaceHolderIndex(newIndex);
    }, []);

    useEffect(() => {
        const saveSentenceOnTime = () => {
            const dataObject = {
                roundId: gameData!.currentRound,
                author: {
                    pseudo: userData!.pseudo,
                    avatar: userData!.avatar,
                },
                content: inputRef.current,
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
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [inputRef.current]);

    useEffect(() => {
        setIsReady(false);
    }, []);

    return {
        buttonRef,
        isReady,
        oldDraw,
        placeHolderIndex,
        handleSentence,
        saveSentence,
    };
};

const WrittingStep = () => {
    const { gameData } = useGameContext();
    const {
        buttonRef,
        isReady,
        oldDraw,
        placeHolderIndex,
        handleSentence,
        saveSentence,
    } = useWrittingStep();

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
                {isReady ? (
                    <p className="players-ready">
                        {gameData!.playersReady.length}/
                        {gameData!.players.length} Joueurs prêts
                    </p>
                ) : (
                    <button ref={buttonRef} onClick={saveSentence}>
                        <Image
                            src="/images/gartic_ready.svg"
                            alt="illustration symbolisant que vous êtes prêt"
                            width={30}
                            height={30}
                        />
                        <span>terminé !</span>
                    </button>
                )}
            </div>
        </div>
    );
};

export default WrittingStep;
