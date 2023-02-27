import React from "react";
import { FaTimes } from "react-icons/fa";

const LanguagesModal = () => {
    return (
        <div className="languages-modal__layout">
            <div className="languages-modal__container">
                <div className="languages-modal__header">
                    <h4>langues</h4>
                    <FaTimes />
                </div>
                <ul className="languages-modal__content">
                    <li>Français</li>
                    <li>Belge</li>
                    <li>Brusseleir</li>
                    <li>Wallon</li>
                    <li>Corse</li>
                    <li>Breton</li>
                    <li>Basque</li>
                    <li>Alsacien</li>
                    <li>Québecois</li>
                    <li>Suisse</li>
                    <li>Provençal</li>
                    <li>Ancien français</li>
                </ul>
                <button className="languages-modal__button">confirmer</button>
            </div>
        </div>
    );
};

export default LanguagesModal;
