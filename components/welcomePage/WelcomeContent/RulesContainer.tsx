import Image from "next/image";
import React, { useEffect, useRef, useState, MouseEvent } from "react";
import {
    FaPenAlt,
    FaPencilAlt,
    FaPhone,
    FaPhoneVolume,
    FaPaintBrush,
    FaPalette,
    FaLaughSquint,
    FaLaughBeam,
    FaLightbulb,
    FaMehBlank,
    FaUserFriends,
    FaTimes,
} from "react-icons/fa";
import { ImSphere } from "react-icons/im";

const rulesArray = [
    {
        icons: (
            <div className="icons-container">
                <FaPhone id="phone-icon" />
                <FaPhoneVolume id="phoneVolume-icon" />
            </div>
        ),
        title: "1. passe un coup de fil",
        description:
            "Invites tes amis via un appel vocal (Discord, Zoom, etc.)",
    },
    {
        icons: (
            <div className="icons-container">
                <FaPenAlt id="pen-icon" />
                <FaPencilAlt id="pencil-icon" />
            </div>
        ),
        title: "2. tous à vos stylos",
        description: "Chaque joueur doit écrire une phrase bizarre",
    },
    {
        icons: (
            <div className="icons-container">
                <FaPaintBrush id="brush-icon" />
                <FaPalette id="palette-icon" />
            </div>
        ),
        title: "3. dessiner, c'est gagner",
        description: "Tu vas recevoir une phrase bizarre à dessiner",
    },
    {
        icons: (
            <div className="icons-container">
                <FaMehBlank id="meh-icon" />
                <FaLightbulb id="bulb-icon" />
            </div>
        ),
        title: "4. c'est quoi ?",
        description: "Essaie de décrire l'un des dessins fous",
    },
    {
        icons: (
            <div className="icons-container">
                <FaLaughBeam id="beam-icon" />
                <FaLaughSquint id="squint-icon" />
            </div>
        ),
        title: "5. découvre ce qu'il s'est passé",
        description: "Regarde les résultats hilarants du téléphone sans fil",
    },
    {
        icons: (
            <div className="icons-container">
                <FaUserFriends id="friends-icon" />
                <ImSphere id="sphere-icon" />
            </div>
        ),
        title: "6. fais-toi de nouveaux amis",
        description:
            "Trouve des milliers de joueurs Gartic sur notre serveur Discord !",
    },
];

const useRulesContainer = () => {
    const rulesRef = useRef<HTMLDivElement | null>(null);
    const firstAnimatedRef = useRef<HTMLLIElement | null>(null);
    const [ruleIndex, setRuleIndex] = useState(0);

    const handleRuleIndex = (e: MouseEvent) => {
        const target = e.target as Element;
        target.classList.add("active");
        const newIndex = parseInt(target.id.split("-")[1]) - 1;
        setRuleIndex(() => newIndex);
    };

    const removeRulesModal = () => {
        rulesRef.current?.classList.remove("active");
    };

    useEffect(() => {
        firstAnimatedRef.current?.classList.add("active");
    }, []);

    useEffect(() => {
        const rulesIndexes = document.querySelectorAll(".rule-index");
        rulesIndexes.forEach((rule) => {
            if (rule.id.split("-")[1] !== `${ruleIndex + 1}`)
                rule.classList.remove("active");
        });
        const interval = setInterval(() => {
            rulesIndexes.forEach((rule) => {
                rule.classList.remove("active");
            });
            if (ruleIndex < 5) {
                setRuleIndex((curr) => (curr += 1));
            } else {
                setRuleIndex(0);
            }
            const animatedCircle = document.getElementById(
                `li-${ruleIndex + 2 > 6 ? 1 : ruleIndex + 2}`
            );
            animatedCircle?.classList.add("active");
        }, 7000);
        return () => {
            clearInterval(interval);
        };
    }, [ruleIndex]);

    return {
        ruleIndex,
        rulesRef,
        firstAnimatedRef,
        handleRuleIndex,
        removeRulesModal,
    };
};

const RulesContainer = () => {
    const {
        ruleIndex,
        rulesRef,
        firstAnimatedRef,
        handleRuleIndex,
        removeRulesModal,
    } = useRulesContainer();

    return (
        <div ref={rulesRef} className="rules">
            <h2>Comment jouer</h2>
            <FaTimes
                className="rules__modal-remover"
                onClick={removeRulesModal}
            />
            <div className="rules-content">
                {rulesArray[ruleIndex].icons}
                <h3>{rulesArray[ruleIndex].title}</h3>
                <p>{rulesArray[ruleIndex].description}</p>
            </div>
            <ul className="rules-steps-indicator">
                <li
                    onClick={(e) => handleRuleIndex(e)}
                    ref={firstAnimatedRef}
                    className="rule-index"
                    id="li-1"
                >
                    <svg id="svg-1">
                        <circle cx="10" cy="10" r="10"></circle>
                    </svg>
                </li>
                <li
                    onClick={(e) => handleRuleIndex(e)}
                    className="rule-index"
                    id="li-2"
                >
                    <svg id="svg-2">
                        <circle cx="10" cy="10" r="10"></circle>
                    </svg>
                </li>
                <li
                    onClick={(e) => handleRuleIndex(e)}
                    className="rule-index"
                    id="li-3"
                >
                    <svg id="svg-3">
                        <circle cx="10" cy="10" r="10"></circle>
                    </svg>
                </li>
                <li
                    onClick={(e) => handleRuleIndex(e)}
                    className="rule-index"
                    id="li-4"
                >
                    <svg id="svg-4">
                        <circle cx="10" cy="10" r="10"></circle>
                    </svg>
                </li>
                <li
                    onClick={(e) => handleRuleIndex(e)}
                    className="rule-index"
                    id="li-5"
                >
                    <svg id="svg-5">
                        <circle cx="10" cy="10" r="10"></circle>
                    </svg>
                </li>
                <li
                    onClick={(e) => handleRuleIndex(e)}
                    className="rule-index"
                    id="li-6"
                >
                    <svg id="svg-6">
                        <circle cx="10" cy="10" r="10"></circle>
                    </svg>
                </li>
            </ul>
        </div>
    );
};

export default RulesContainer;
