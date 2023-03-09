import Image from "next/image";
import TimeIndicator from "../../mui/TimeIndicator";
import { useGameContext } from "@/context/GameContext";

const GameHeader = () => {
    const { gameData } = useGameContext();
    return (
        <>
            {gameData!.gameState === "writte" && (
                <div className="game-header">
                    <div className="game-header__step-indicator">
                        {gameData!.currentRound}/{gameData!.players.length}
                    </div>
                    <Image
                        src={"/images/gartic-logo.png"}
                        alt="Logo de Gartic phone"
                        width={300}
                        height={150}
                    />
                    <TimeIndicator totalTime={gameData!.writtingTime} />
                </div>
            )}
        </>
    );
};

export default GameHeader;
