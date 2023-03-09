import React from "react";
import { FaPencilAlt } from "react-icons/fa";
import TimeIndicator from "../../../mui/TimeIndicator";
import { useGameContext } from "@/context/GameContext";

const DrawingRightColumn = () => {
    const { gameData } = useGameContext();
    return (
        <div className="drawing-step__right-column">
            <TimeIndicator totalTime={gameData!.drawingTime} />
            <div className="tools-container">
                <div className="tool">
                    <FaPencilAlt />
                </div>
                <div className="tool">
                    <FaPencilAlt />
                </div>
                <div className="tool">
                    <FaPencilAlt />
                </div>
                <div className="tool">
                    <FaPencilAlt />
                </div>
                <div className="tool">
                    <FaPencilAlt />
                </div>
                <div className="tool">
                    <FaPencilAlt />
                </div>
                <div className="tool">
                    <FaPencilAlt />
                </div>
                <div className="tool">
                    <FaPencilAlt />
                </div>
                <div className="tool">
                    <FaPencilAlt />
                </div>
                <div className="tool">
                    <FaPencilAlt />
                </div>
            </div>
        </div>
    );
};

export default DrawingRightColumn;
