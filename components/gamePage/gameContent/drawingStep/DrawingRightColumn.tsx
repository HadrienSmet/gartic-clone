import React, { useRef } from "react";
import { FaPencilAlt, FaTimes } from "react-icons/fa";
import TimeIndicator from "../../../mui/TimeIndicator";
import { useGameContext } from "@/context/GameContext";

const DrawingRightColumn = () => {
    const toolsContainerRef = useRef<HTMLDivElement | null>(null);
    const { gameData } = useGameContext();

    const hideToolModal = () => {
        toolsContainerRef.current!.classList.remove("active");
    };

    return (
        <div className="drawing-step__right-column">
            <TimeIndicator totalTime={gameData!.drawingTime} />
            <div ref={toolsContainerRef} className="tools-container">
                <FaTimes
                    onClick={hideToolModal}
                    className="tools-container__remover-button"
                />
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
