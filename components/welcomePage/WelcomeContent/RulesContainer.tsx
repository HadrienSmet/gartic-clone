import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
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

const RulesContainer = () => {
    const firstAnimatedRef = useRef<HTMLLIElement | null>(null);
    const [ruleIndex, setRuleIndex] = useState(0);
    useEffect(() => {
        const rulesIndexes = document.querySelectorAll(".rule-index");
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
                `${ruleIndex + 2 > 6 ? 1 : ruleIndex + 2}`
            );
            animatedCircle?.classList.add("active");
        }, 7000);
        return () => {
            clearInterval(interval);
        };
    }, [ruleIndex]);

    useEffect(() => {
        firstAnimatedRef.current?.classList.add("active");
    }, []);
    return (
        <div className="rules">
            <h2>Comment jouer</h2>
            <div className="rules-content">
                {rulesArray[ruleIndex].icons}
                <h3>{rulesArray[ruleIndex].title}</h3>
                <p>{rulesArray[ruleIndex].description}</p>
            </div>
            <ul className="rules-steps-indicator">
                <li ref={firstAnimatedRef} className="rule-index" id="1">
                    <svg>
                        <circle cx="14" cy="14" r="14"></circle>
                    </svg>
                </li>
                <li className="rule-index" id="2">
                    <svg>
                        <circle cx="14" cy="14" r="14"></circle>
                    </svg>
                </li>
                <li className="rule-index" id="3">
                    <svg>
                        <circle cx="14" cy="14" r="14"></circle>
                    </svg>
                </li>
                <li className="rule-index" id="4">
                    <svg>
                        <circle cx="14" cy="14" r="14"></circle>
                    </svg>
                </li>
                <li className="rule-index" id="5">
                    <svg>
                        <circle cx="14" cy="14" r="14"></circle>
                    </svg>
                </li>
                <li className="rule-index" id="6">
                    <svg>
                        <circle cx="14" cy="14" r="14"></circle>
                    </svg>
                </li>
            </ul>
        </div>
    );
};

export default RulesContainer;
