import { MouseEvent, useEffect, useRef, useState } from "react";
import { FaCheck, FaTimes } from "react-icons/fa";

const LanguagesModal = () => {
    const layoutRef = useRef<HTMLDivElement | null>(null);
    const containerRef = useRef<HTMLDivElement | null>(null);
    const [isBrowser, setIsbrowser] = useState(false);
    const removeLanguagesModal = () => {
        layoutRef.current?.classList.remove("active");
        containerRef.current?.classList.remove("active");
    };
    const handleMainLanguage = (e: MouseEvent) => {
        const languages = isBrowser
            ? document.querySelectorAll(".language")
            : null;

        const target = e.target as Element;
        languages?.forEach((language) => {
            language.classList.remove("active");
        });
        target.classList.add("active");
    };
    useEffect(() => {
        setIsbrowser(true);
    }, []);
    return (
        <div ref={layoutRef} className="languages-modal__layout">
            <div ref={containerRef} className="languages-modal__container">
                <div className="languages-modal__header">
                    <h4>langues</h4>
                    <FaTimes onClick={removeLanguagesModal} />
                </div>
                <ul className="languages-modal__content">
                    <li
                        onClick={(e) => handleMainLanguage(e)}
                        className="language active"
                    >
                        <FaCheck />
                        <span>Français</span>
                    </li>
                    <li
                        onClick={(e) => handleMainLanguage(e)}
                        className="language"
                    >
                        <FaCheck />
                        <span>Belge</span>
                    </li>
                    <li
                        onClick={(e) => handleMainLanguage(e)}
                        className="language"
                    >
                        <FaCheck />
                        <span>Brusseleir</span>
                    </li>
                    <li
                        onClick={(e) => handleMainLanguage(e)}
                        className="language"
                    >
                        <FaCheck />
                        <span>Wallon</span>
                    </li>
                    <li
                        onClick={(e) => handleMainLanguage(e)}
                        className="language"
                    >
                        <FaCheck />
                        <span>Corse</span>
                    </li>
                    <li
                        onClick={(e) => handleMainLanguage(e)}
                        className="language"
                    >
                        <FaCheck />
                        <span>Breton</span>
                    </li>
                    <li
                        onClick={(e) => handleMainLanguage(e)}
                        className="language"
                    >
                        <FaCheck />
                        <span>Basque</span>
                    </li>
                    <li
                        onClick={(e) => handleMainLanguage(e)}
                        className="language"
                    >
                        <FaCheck />
                        <span>Alsacien</span>
                    </li>
                    <li
                        onClick={(e) => handleMainLanguage(e)}
                        className="language"
                    >
                        <FaCheck />
                        <span>Québecois</span>
                    </li>
                    <li
                        onClick={(e) => handleMainLanguage(e)}
                        className="language"
                    >
                        <FaCheck />
                        <span>Suisse</span>
                    </li>
                    <li
                        onClick={(e) => handleMainLanguage(e)}
                        className="language"
                    >
                        <FaCheck />
                        <span>Provençal</span>
                    </li>
                    <li
                        onClick={(e) => handleMainLanguage(e)}
                        className="language"
                    >
                        <FaCheck />
                        <span>Vieux français</span>
                    </li>
                </ul>
                <button
                    className="languages-modal__button"
                    onClick={removeLanguagesModal}
                >
                    confirmer
                </button>
            </div>
        </div>
    );
};

export default LanguagesModal;
