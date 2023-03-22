import React, { MouseEvent, useState } from "react";
import DrawingContent from "./DrawingContent";
import DrawingLeftColumn from "./DrawingLeftColumn";
import DrawingRightColumn from "./DrawingRightColumn";

const useDrawingStep = () => {
    const [currentColor, setCurrentColor] = useState("rgb(1,1,0)");

    const handleCurrentColor = (e: MouseEvent) => {
        const target = e.target as Element;
        setCurrentColor(target.id);
    };

    return {
        currentColor,
        handleCurrentColor,
    };
};

const DrawingStep = () => {
    const { currentColor, handleCurrentColor } = useDrawingStep();

    return (
        <div className="drawing-step">
            <DrawingLeftColumn
                currentColor={currentColor}
                handleCurrentColor={(e) => handleCurrentColor(e)}
            />
            <DrawingContent currentColor={currentColor} />
            <DrawingRightColumn />
        </div>
    );
};

export default DrawingStep;
