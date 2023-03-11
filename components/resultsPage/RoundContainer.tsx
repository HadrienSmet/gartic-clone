import { RoundDataType } from "@/types/next";
import Image from "next/image";
import React from "react";

type Props = {
    roundData: RoundDataType;
    id: number;
};

const RoundContainer = ({ roundData, id }: Props) => {
    return (
        <div className="round-container">
            <div className="author-container">
                <h3>{roundData.author.pseudo}</h3>
                <Image
                    src={roundData.author.avatar}
                    alt="Avatar de l'auteur de la manche"
                    width={75}
                    height={75}
                />
            </div>
            {roundData.content.slice(0, 4) === "data" ? (
                <Image
                    src={roundData.content}
                    alt="Contenu produit par l'auteur de la manche"
                    width={300}
                    height={200}
                />
            ) : (
                <p className="sentence">{roundData.content}</p>
            )}
        </div>
    );
};

export default RoundContainer;
