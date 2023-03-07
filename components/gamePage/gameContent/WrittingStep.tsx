import { useEffect, useState } from "react";
import Image from "next/image";

const placeHoldersArray = [
    "Bob l'éponge lave sa vaisselle",
    "Un escargot et son baluchon partant à l'aventure",
    "Un pirate tombe amoureux d'une sirène",
    "Un singe fait un wheeling en moto",
    "Mario répare sa plomberie",
];

const WrittingStep = () => {
    const [placeHolderIndex, setPlaceHolderIndex] = useState(0);

    useEffect(() => {
        const newIndex = Math.floor(Math.random() * placeHoldersArray.length);
        setPlaceHolderIndex(newIndex);
    }, []);

    return (
        <div className="writting-step">
            <Image
                src="/images/gartic-rule-1.webp"
                alt="illustration d'un vieux téléphone à cadran"
                width={128}
                height={119}
            />
            <h1>écris une phrase</h1>
            <div className="game-content__input-container">
                <input
                    type="text"
                    placeholder={placeHoldersArray[placeHolderIndex]}
                />
                <button>
                    <Image
                        src="/images/gartic_ready.svg"
                        alt="illustration symbolisant que vous êtes prêt"
                        width={30}
                        height={30}
                    />
                    <span>terminé !</span>
                </button>
            </div>
        </div>
    );
};

export default WrittingStep;
