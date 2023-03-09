import Image from "next/image";
import React, { MouseEvent, useEffect, useRef, useState } from "react";
import { FaDownload, FaVolumeUp } from "react-icons/fa";

type DrawingContentProps = {
    currentColor: string;
};

const DrawingContent = ({ currentColor }: DrawingContentProps) => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
    const [isDrawing, setIsDrawing] = useState(false);
    const [cursor, setCursor] = useState({
        x: 0,
        y: 0,
    });

    const handleCursor = (e: MouseEvent) => {
        setCursor({
            x: e.clientX,
            y: e.clientY,
        });
    };

    const startDrawing = (e: MouseEvent) => {
        const { offsetX, offsetY } = e.nativeEvent;
        ctxRef.current!.beginPath();
        ctxRef.current!.moveTo(offsetX, offsetY);
        setIsDrawing(true);
    };

    const stopDrawing = (e: MouseEvent) => {
        ctxRef.current!.closePath();
        setIsDrawing(false);
    };

    const draw = (e: MouseEvent) => {
        if (!isDrawing) {
            return;
        }
        console.log(e);

        const { offsetX, offsetY } = e.nativeEvent;
        ctxRef.current!.lineTo(offsetX, offsetY);
        ctxRef.current!.stroke();
    };

    useEffect(() => {
        const context = canvasRef.current!.getContext("2d");
        context!.lineCap = "round";
        context!.strokeStyle = currentColor;
        context!.lineWidth = 5;
        ctxRef.current = context;
    }, [currentColor]);

    return (
        <div className="drawing-step__content">
            <div className="drawing-step__content__header">
                <Image
                    className="drawing-step__content__header-rings"
                    src={"/images/gartic-anneaux-classeur.png"}
                    alt="anneaux de classeurs"
                    width={518}
                    height={59}
                />
                <div className="first-row">
                    <FaDownload />
                    <Image
                        src={"/images/gartic-footertitle.svg"}
                        alt="Gartic phone"
                        width={200}
                        height={55}
                    />
                    <FaVolumeUp />
                </div>
                <h1>
                    hé, c{"'"}est l{"'"}heure du dessin !
                </h1>
                <h2>Y aura la phrase que tu reçois ici</h2>
            </div>
            <div className="drawing-step__content__main">
                <Image
                    priority
                    src={"/images/gartic-bgcanvas.svg"}
                    alt="logo de Gartic Phone"
                    width={267}
                    height={150}
                />
                <canvas
                    ref={canvasRef}
                    width={758}
                    height={424}
                    onMouseDown={startDrawing}
                    onMouseUp={stopDrawing}
                    onMouseMove={draw}
                ></canvas>
            </div>
            <div className="drawing-step__content__footer">
                <div className="stroke-settings">
                    <fieldset className="stroke-settings__size-modificator">
                        <div className="smallest-size">
                            <input
                                type="radio"
                                name="smallest-size"
                                id="smallest-size"
                            />
                            <label htmlFor="smallest-size"></label>
                        </div>
                        <div className="small-size">
                            <input
                                type="radio"
                                name="small-size"
                                id="small-size"
                            />
                            <label htmlFor="small-size"></label>
                        </div>
                        <div className="medium-size">
                            <input
                                type="radio"
                                name="medium-size"
                                id="medium-size"
                            />
                            <label htmlFor="medium-size"></label>
                        </div>
                        <div className="big-size">
                            <input type="radio" name="big-size" id="big-size" />
                            <label htmlFor="big-size"></label>
                        </div>
                        <div className="biggest-size">
                            <input
                                type="radio"
                                name="biggest-size"
                                id="biggest-size"
                            />
                            <label htmlFor="biggest-size"></label>
                        </div>
                    </fieldset>
                    <div className="stroke-settings__opacity-modificator">
                        <span className="low-opacity"></span>
                        <input
                            type="range"
                            name="opacity"
                            id="opacity"
                            min={1}
                            max={100}
                        />
                        <span className="strong-opacity"></span>
                    </div>
                </div>
                <button>
                    <Image
                        src="/images/gartic_ready.svg"
                        alt="Symbole illustrant le fait que l'utilisateur est prêt"
                        width={40}
                        height={40}
                    />
                    <span>terminé !</span>
                </button>
            </div>
        </div>
    );
};

export default DrawingContent;
