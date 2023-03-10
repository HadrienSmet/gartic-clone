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
];

const WrittingStep = () => {
    const [placeHolderIndex, setPlaceHolderIndex] = useState(0);
    const [sentence, setSentence] = useState("");
    const [isReady, setIsReady] = useState(false);
    const { userData } = useUserContext();
    const { usersData } = useUsersContext();
    const { gameData, setGameData } = useGameContext();
    const { socket, setSocket } = useSocketContext();

    useEffect(() => {
        const newIndex = Math.floor(Math.random() * placeHoldersArray.length);
        setPlaceHolderIndex(newIndex);
        setIsReady(false);
    }, []);

    const handleSentence = (e: ChangeEvent) => {
        const target = e.target as HTMLInputElement;
        setSentence(target.value);
    };

    const saveSentence = () => {
        if (!isReady) {
            const dataObject = {
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

    return (
        <div className="writting-step">
            {gameData!.currentRound === 1 ? (
                <>
                    <Image
                        src="/images/gartic-rule-1.webp"
                        alt="illustration d'un vieux téléphone à cadran"
                        width={128}
                        height={119}
                    />
                    <h1>écris une phrase</h1>
                </>
            ) : (
                <h2>Y aura l{"'"}image de ton pote ici!!</h2>
            )}

            <div className="writting-step__input-container">
                <input
                    type="text"
                    placeholder={placeHoldersArray[placeHolderIndex]}
                    onBlur={(e) => handleSentence(e)}
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
