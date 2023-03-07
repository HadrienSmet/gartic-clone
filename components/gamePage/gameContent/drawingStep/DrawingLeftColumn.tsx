import React, { useEffect, useState } from "react";

let colors: string[] = [""];

const DrawingLeftColumn = () => {
    const [colors, setColors] = useState([""]);

    useEffect(() => {
        for (let i = 0; i < 18; i++) {
            if (i === 0) {
                setColors([`color-number__${i}`]);
            } else {
                setColors((curr) => [...curr, `color-number__${i}`]);
            }
        }
    }, []);
    return (
        <div className="drawing-step__left-column">
            <h2>1/1</h2>
            <div className="color-container">
                <ul className="color-container__choices">
                    {colors.map((color) => (
                        <li className="color" key={color}></li>
                    ))}
                </ul>
                <div className="color-container__current"></div>
            </div>
        </div>
    );
};

export default DrawingLeftColumn;
