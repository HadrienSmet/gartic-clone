import { useGameContext } from "@/context/GameContext";
import DrawingStep from "./drawingStep/DrawingStep";
import WrittingStep from "./WrittingStep";

const GameContent = () => {
    const { gameData } = useGameContext();

    return (
        <div className="game-content">
            {gameData?.gameState === "writte" && <WrittingStep />}
            {gameData?.gameState === "draw" && <DrawingStep />}
        </div>
    );
};

export default GameContent;
