import { MouseEvent, useRef, useState } from "react";
import { FaTimes } from "react-icons/fa";
import PersonalisationContent from "./PersonalisationContent";
import PresettingsContent from "./PresettingsContent";

const useSettingsContainer = () => {
    const [headerState, setHeaderState] = useState("presetting");
    const settingsRef = useRef<HTMLDivElement | null>(null);
    const preSettingRef = useRef<HTMLSpanElement | null>(null);
    const personalisationRef = useRef<HTMLSpanElement | null>(null);

    const handleHeaderBehavior = (e: MouseEvent) => {
        const target = e.target as Element;
        personalisationRef.current?.classList.remove("active");
        preSettingRef.current?.classList.remove("active");
        target.classList.add("active");
        setHeaderState(target.id);
    };

    const hideSettingsContainer = () => {
        settingsRef.current!.classList.remove("active");
    };

    return {
        headerState,
        personalisationRef,
        preSettingRef,
        settingsRef,
        handleHeaderBehavior,
        hideSettingsContainer,
    };
};

const SettingsContainer = () => {
    const {
        headerState,
        personalisationRef,
        preSettingRef,
        settingsRef,
        handleHeaderBehavior,
        hideSettingsContainer,
    } = useSettingsContainer();

    return (
        <div ref={settingsRef} className="settings-container">
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
                <FaTimes
                    onClick={hideSettingsContainer}
                    className="settings-container__hide-button"
                />
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
