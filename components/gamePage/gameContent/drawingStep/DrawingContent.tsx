import Image from "next/image";
import React from "react";
import { FaDownload, FaVolumeUp } from "react-icons/fa";

const DrawingContent = () => {
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
                    src={"/images/gartic-bgcanvas.svg"}
                    alt="logo de Gartic Phone"
                    width={267}
                    height={150}
                />
                <canvas width={758} height={424}></canvas>
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
                        <input
                            type="range"
                            name="opacity"
                            id="opacity"
                            min={1}
                            max={100}
                        />
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
