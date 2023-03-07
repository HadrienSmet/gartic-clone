import React from "react";
import DrawingContent from "./DrawingContent";
import DrawingLeftColumn from "./DrawingLeftColumn";
import DrawingRightColumn from "./DrawingRightColumn";

const DrawingStep = () => {
    return (
        <div className="drawing-step">
            <DrawingLeftColumn />
            <DrawingContent />
            <DrawingRightColumn />
        </div>
    );
};

export default DrawingStep;
