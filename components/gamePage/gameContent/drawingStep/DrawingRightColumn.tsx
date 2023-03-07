import React from "react";
import { FaPencilAlt } from "react-icons/fa";
import TimeIndicator from "../../../mui/TimeIndicator";

const DrawingRightColumn = () => {
    return (
        <div className="drawing-step__right-column">
            <TimeIndicator />
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
                <div className="tool">
                    <FaPencilAlt />
                </div>
            </div>
        </div>
    );
};

export default DrawingRightColumn;
