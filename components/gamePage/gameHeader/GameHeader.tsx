import Image from "next/image";
import TimeIndicator from "../../mui/TimeIndicator";
import { useGameContext } from "@/context/GameContext";

const GameHeader = () => {
    const { gameData } = useGameContext();
    return (
        <>
            {gameData!.gameState === "writte" && (
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
            )}
        </>
    );
};

export default GameHeader;
