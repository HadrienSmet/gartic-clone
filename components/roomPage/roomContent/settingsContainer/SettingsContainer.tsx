import Image from "next/image";
import React, { MouseEvent, useRef, useState } from "react";
import PersonalisationContent from "./PersonalisationContent";
import PresettingsContent from "./PresettingsContent";

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
                <PresettingsContent />
            ) : (
                <PersonalisationContent />
            )}
        </div>
    );
};

export default SettingsContainer;
