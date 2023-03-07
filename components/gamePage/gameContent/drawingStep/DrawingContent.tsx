import Image from "next/image";
import React from "react";

const DrawingContent = () => {
    return (
        <div className="drawing-step__content">
            <div className="drawing-step__content__header">
                <div className="first-row">
                    <p>y aura des icones et le logo ici</p>
                </div>
                <h1>
                    hé, c{"'"}est l{"'"}heure du dessin !
                </h1>
                <h2>Y aura la phrase que tu reçois ici</h2>
            </div>
            <div className="drawing-step__content__main">
                <p>gros canvas des familles ici</p>
            </div>
            <div className="drawing-step__content__footer">
                <div className="stroke-width-settings">
                    <p>ici tu pouras modifier la taille du curseur</p>
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
