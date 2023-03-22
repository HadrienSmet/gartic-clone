import { MouseEvent, useRef } from "react";
import { useGameContext } from "@/context/GameContext";
import { FaTimes } from "react-icons/fa";

type LeftColumnProps = {
    currentColor: string;
    handleCurrentColor: (e: MouseEvent) => void;
};

const colors: string[] = [
    "rgb(1,1,0)",
    "rgb(103,103,102)",
    "rgb(0,81,204)",
    "rgb(255,254,254)",
    "rgb(170,171,171)",
    "rgb(39,201,254)",
    "rgb(0,116,33)",
    "rgb(153,1,1)",
    "rgb(151,65,19)",
    "rgb(17,176,60)",
    "rgb(255,0,19)",
    "rgb(254,120,40)",
    "rgb(176,113,29)",
    "rgb(152,1,78)",
    "rgb(202,91,87)",
    "rgb(254,192,38)",
    "rgb(254,1,143)",
    "rgb(255,174,168)",
];

const useDrawingLeftColumn = () => {
    const colorModificatorRef = useRef<HTMLDivElement | null>(null);

    const hideColorModal = () => {
        colorModificatorRef.current!.classList.remove("active");
    };

    return {
        colorModificatorRef,
        hideColorModal,
    };
};

const DrawingLeftColumn = ({
    currentColor,
    handleCurrentColor,
}: LeftColumnProps) => {
    const { gameData } = useGameContext();
    const { colorModificatorRef, hideColorModal } = useDrawingLeftColumn();

    return (
        <div className="drawing-step__left-column">
            <h2>
                {gameData!.currentRound}/{gameData!.players.length}
            </h2>
            <div ref={colorModificatorRef} className="color-container">
                <FaTimes
                    onClick={hideColorModal}
                    className="color-container__remover"
                />
                <ul className="color-container__choices">
                    {colors.map((color) => (
                        <li
                            id={color}
                            className="color"
                            key={color}
                            style={{ backgroundColor: `${color}` }}
                            onClick={(e) => handleCurrentColor(e)}
                        ></li>
                    ))}
                </ul>
                <div
                    className="color-container__current"
                    style={{ backgroundColor: `${currentColor}` }}
                ></div>
            </div>
        </div>
    );
};

export default DrawingLeftColumn;
