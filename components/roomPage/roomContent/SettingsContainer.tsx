import Image from "next/image";
import React, { MouseEvent, useRef, useState } from "react";

const SettingsContainer = () => {
    const [headerState, setHeaderState] = useState("presetting");
    const preSettingRef = useRef<HTMLSpanElement | null>(null);
    const personalisationRef = useRef<HTMLSpanElement | null>(null);

    const handleHeaderBehavior = (e: MouseEvent) => {
        const target = e.target as Element;
        personalisationRef.current?.classList.remove("active");
        preSettingRef.current?.classList.remove("active");
        target.classList.add("active");
        setHeaderState(target.id);
    };

    return (
        <div className="settings-container">
            <div className="settings-container__header">
                <span
                    id="presetting"
                    onClick={(e) => handleHeaderBehavior(e)}
                    ref={preSettingRef}
                    className="active"
                >
                    préréglages
                </span>
                <span
                    id="personalisation"
                    onClick={(e) => handleHeaderBehavior(e)}
                    ref={personalisationRef}
                >
                    personnalisations
                </span>
            </div>
            {headerState === "presetting" ? (
                <div className="settings-container__content">
                    <div className="card-mode">
                        <Image
                            src={"/images/gartic_freestyle-mode.svg"}
                            alt={"freestyle mode illu"}
                            width={139}
                            height={70}
                        />
                        <h3>normal</h3>
                        <p>
                            La base de tout ! Alterne entre l{`'`}écriture et le
                            dessin jusqu{`'`}à la fin du tour
                        </p>
                    </div>
                    <div className="card-mode">
                        <Image
                            src={"/images/gartic_freestyle-mode.svg"}
                            alt={"freestyle mode illu"}
                            width={139}
                            height={70}
                        />
                        <h3>normal</h3>
                        <p>
                            La base de tout ! Alterne entre l`&apos;`écriture et
                            le dessin jusqu`&apos;`à la fin du tour
                        </p>
                    </div>
                    <div className="card-mode">
                        <Image
                            src={"/images/gartic_freestyle-mode.svg"}
                            alt={"freestyle mode illu"}
                            width={139}
                            height={70}
                        />
                        <h3>normal</h3>
                        <p>
                            La base de tout ! Alterne entre l`&apos;`écriture et
                            le dessin jusqu`&apos;`à la fin du tour
                        </p>
                    </div>
                    <div className="card-mode">
                        <Image
                            src={"/images/gartic_freestyle-mode.svg"}
                            alt={"freestyle mode illu"}
                            width={139}
                            height={70}
                        />
                        <h3>normal</h3>
                        <p>
                            La base de tout ! Alterne entre l`&apos;`écriture et
                            le dessin jusqu`&apos;`à la fin du tour
                        </p>
                    </div>
                    <div className="card-mode">
                        <Image
                            src={"/images/gartic_freestyle-mode.svg"}
                            alt={"freestyle mode illu"}
                            width={139}
                            height={70}
                        />
                        <h3>normal</h3>
                        <p>
                            La base de tout ! Alterne entre l`&apos;`écriture et
                            le dessin jusqu`&apos;`à la fin du tour
                        </p>
                    </div>
                    <div className="card-mode">
                        <Image
                            src={"/images/gartic_freestyle-mode.svg"}
                            alt={"freestyle mode illu"}
                            width={139}
                            height={70}
                        />
                        <h3>normal</h3>
                        <p>
                            La base de tout ! Alterne entre l`&apos;`écriture et
                            le dessin jusqu`&apos;`à la fin du tour
                        </p>
                    </div>
                    <div className="card-mode">
                        <Image
                            src={"/images/gartic_freestyle-mode.svg"}
                            alt={"freestyle mode illu"}
                            width={139}
                            height={70}
                        />
                        <h3>normal</h3>
                        <p>
                            La base de tout ! Alterne entre l`&apos;`écriture et
                            le dessin jusqu`&apos;`à la fin du tour
                        </p>
                    </div>
                    <div className="card-mode">
                        <Image
                            src={"/images/gartic_freestyle-mode.svg"}
                            alt={"freestyle mode illu"}
                            width={139}
                            height={70}
                        />
                        <h3>normal</h3>
                        <p>
                            La base de tout ! Alterne entre l`&apos;`écriture et
                            le dessin jusqu`&apos;`à la fin du tour
                        </p>
                    </div>
                    <div className="card-mode">
                        <Image
                            src={"/images/gartic_freestyle-mode.svg"}
                            alt={"freestyle mode illu"}
                            width={139}
                            height={70}
                        />
                        <h3>normal</h3>
                        <p>
                            La base de tout ! Alterne entre l`&apos;`écriture et
                            le dessin jusqu`&apos;`à la fin du tour
                        </p>
                    </div>
                </div>
            ) : (
                <div className="settings-container__content">
                    <p>Pas encore codé</p>
                </div>
            )}
        </div>
    );
};

export default SettingsContainer;
