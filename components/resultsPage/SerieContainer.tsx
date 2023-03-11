import { SerieType } from "@/types/next";
import React from "react";
import RoundContainer from "./RoundContainer";

type Props = {
    serieData: SerieType;
};

const SerieContainer = ({ serieData }: Props) => {
    return (
        <div className="serie-container">
            <h2>{serieData!.id}</h2>
            {serieData!.content.map((round, id) => (
                <RoundContainer key={id} roundData={round} id={id} />
            ))}
        </div>
    );
};

export default SerieContainer;
