import React, { MouseEvent, useState } from "react";
import DrawingContent from "./DrawingContent";
import DrawingLeftColumn from "./DrawingLeftColumn";
import DrawingRightColumn from "./DrawingRightColumn";

const DrawingStep = () => {
    const [currentColor, setCurrentColor] = useState("rgb(1,1,0)");

    const handleCurrentColor = (e: MouseEvent) => {
        const target = e.target as Element;
        setCurrentColor(target.id);
    };

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
