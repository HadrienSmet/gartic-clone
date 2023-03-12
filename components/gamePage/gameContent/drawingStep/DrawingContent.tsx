import { useGameContext } from "@/context/GameContext";
import { useSocketContext } from "@/context/SocketContext";
import { useUserContext } from "@/context/UserContext";
import { useUsersContext } from "@/context/UsersContext";
import { RoundDataType } from "@/types/next";
import Image from "next/image";
import { ChangeEvent, MouseEvent, useEffect, useRef, useState } from "react";
import { FaDownload, FaVolumeUp } from "react-icons/fa";

type DrawingContentProps = {
    currentColor: string;
};

const DrawingContent = ({ currentColor }: DrawingContentProps) => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
    const scaleXRef = useRef(0);
    const scaleYRef = useRef(0);
    const [isReady, setIsReady] = useState(false);
    const [isDrawing, setIsDrawing] = useState(false);
    const [currentSize, setCurrentSize] = useState(15);
    const [currentOpacity, setCurrentOpacity] = useState(1);
    const { gameData, setGameData } = useGameContext();
    const { userData } = useUserContext();
    const { usersData } = useUsersContext();
    const { socket } = useSocketContext();

    const rightSerie = gameData!.series.findIndex(
        (serie) =>
            serie.id ===
            (gameData!.playerIndex + gameData!.currentRound) %
                gameData!.players.length
    );
    const oldSentence =
        gameData!.currentRound === 1
            ? ""
            : gameData!.series[rightSerie].content[gameData!.currentRound - 2]
                  .content;

    const handleStrokeSize = (e: MouseEvent) => {
        const sizes = document.querySelectorAll(".size");
        sizes.forEach((size) => {
            size.classList.remove("active");
        });
        const target = e.target as Element;
        target.classList.add("active");
        setCurrentSize(parseInt(target.id.split("-")[1]));
    };

    const handleStrokeOpacity = (e: ChangeEvent) => {
        const target = e.target as HTMLInputElement;
        const opacity = parseInt(target.value) / 100;

        setCurrentOpacity(opacity);
    };

    const startDrawing = (e: MouseEvent) => {
        const { offsetX, offsetY } = e.nativeEvent;
        ctxRef.current!.beginPath();
        ctxRef.current!.moveTo(offsetX, offsetY);
        setIsDrawing(true);
    };

    const stopDrawing = () => {
        ctxRef.current!.closePath();
        setIsDrawing(false);
    };

    const draw = (e: MouseEvent) => {
        if (!isDrawing) {
            return;
        }
        const { offsetX, offsetY } = e.nativeEvent;
        ctxRef.current!.lineTo(offsetX, offsetY);
        ctxRef.current!.stroke();
    };

    const saveDraw = () => {
        if (!isReady) {
            const imageDataUrl = canvasRef.current!.toDataURL("image/png");
            const dataObject = {
                roundId: gameData!.currentRound,
                author: {
                    pseudo: userData!.pseudo,
                    avatar: userData!.avatar,
                },
                content: imageDataUrl,
            };
            socket!.emit(
                "player-ready",
                gameData!.playerIndex,
                gameData!.currentRound,
                dataObject,
                usersData!.roomId
            );
            setIsReady((curr) => !curr);
        }
    };

    useEffect(() => {
        const canvasWidth = canvasRef.current!.clientWidth;
        const canvasHeight = canvasRef.current!.clientHeight;
        canvasRef.current!.width = canvasWidth;
        canvasRef.current!.height = canvasHeight;
        const originalWidth = canvasRef.current!.width;
        const originalHeight = canvasRef.current!.height;
        scaleXRef.current = canvasWidth / originalWidth;
        scaleYRef.current = canvasHeight / originalHeight;
    }, []);

    useEffect(() => {
        const splittedColor = currentColor.split("(")[1].split(",");
        const context = canvasRef.current!.getContext("2d");

        context!.scale(scaleXRef.current, scaleYRef.current);
        context!.lineCap = "round";
        context!.strokeStyle = `
                rgba(
                    ${splittedColor[0]}, 
                    ${splittedColor[1]}, 
                    ${splittedColor[2].split(")")[0]}, 
                    ${currentOpacity}
                )
            `;
        context!.lineWidth = currentSize;
        ctxRef.current = context;
    }, [currentColor, currentSize, currentOpacity]);

    useEffect(() => {
        const saveDrawOnTime = () => {
            const imageDataUrl = canvasRef.current!.toDataURL("image/png");
            const dataObject: RoundDataType = {
                roundId: gameData!.currentRound,
                author: {
                    pseudo: userData!.pseudo,
                    avatar: userData!.avatar,
                },
                content: imageDataUrl,
            };

            socket!.emit(
                "save-content",
                gameData!.playerIndex,
                gameData!.currentRound,
                dataObject,
                usersData!.roomId
            );
        };

        socket!.on("time-to-save-content", () => {
            saveDrawOnTime();
        });
    }, [gameData, socket, userData, usersData]);

    useEffect(() => {
        setIsReady(false);
    }, []);

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
                <h2>{oldSentence}</h2>
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
                    width={940}
                    height={555}
                    onMouseDown={startDrawing}
                    onMouseUp={stopDrawing}
                    onMouseLeave={stopDrawing}
                    onMouseMove={draw}
                ></canvas>
            </div>
            <div className="drawing-step__content__footer">
                <div className="stroke-settings">
                    <fieldset className="stroke-settings__size-modificator">
                        <div
                            className="smallest-size size"
                            id="size-5"
                            onClick={(e) => handleStrokeSize(e)}
                        >
                            <input
                                type="radio"
                                name="smallest-size"
                                id="smallest-size"
                            />
                            <label htmlFor="smallest-size"></label>
                        </div>
                        <div
                            className="small-size size"
                            id="size-10"
                            onClick={(e) => handleStrokeSize(e)}
                        >
                            <input
                                type="radio"
                                name="small-size"
                                id="small-size"
                            />
                            <label htmlFor="small-size"></label>
                        </div>
                        <div
                            className="medium-size size active"
                            id="size-15"
                            onClick={(e) => handleStrokeSize(e)}
                        >
                            <input
                                type="radio"
                                name="medium-size"
                                id="medium-size"
                            />
                            <label htmlFor="medium-size"></label>
                        </div>
                        <div
                            className="big-size size"
                            id="size-20"
                            onClick={(e) => handleStrokeSize(e)}
                        >
                            <input type="radio" name="big-size" id="big-size" />
                            <label htmlFor="big-size"></label>
                        </div>
                        <div
                            className="biggest-size size"
                            id="size-25"
                            onClick={(e) => handleStrokeSize(e)}
                        >
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
                            min={10}
                            max={100}
                            defaultValue={100}
                            onChange={(e) => handleStrokeOpacity(e)}
                        />
                        <span className="strong-opacity"></span>
                    </div>
                </div>
                {isReady ? (
                    <p className="players-ready">
                        {gameData!.playersReady.length}/
                        {gameData!.players.length} Joueurs prêts
                    </p>
                ) : (
                    <button onClick={saveDraw}>
                        <Image
                            src="/images/gartic_ready.svg"
                            alt="Symbole illustrant le fait que l'utilisateur est prêt"
                            width={40}
                            height={40}
                        />
                        <span>terminé !</span>
                    </button>
                )}
            </div>
        </div>
    );
};

export default DrawingContent;
