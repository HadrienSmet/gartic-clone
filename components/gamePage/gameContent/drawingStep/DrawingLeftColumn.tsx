import React from "react";

const DrawingLeftColumn = () => {
    return (
        <div className="drawing-step__left-column">
            <h1>1/1</h1>
            <div className="color-container">
                <div className="color-container__choices">
                    <p>Y aura des couleurs ici</p>
                </div>
                <div className="color-container__current">
                    <p>Y aura la couleur que t auras choisi ici</p>
                </div>
            </div>
        </div>
    );
};

export default DrawingLeftColumn;
