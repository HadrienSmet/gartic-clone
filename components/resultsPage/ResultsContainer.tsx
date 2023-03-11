import { useGameContext } from "@/context/GameContext";
import React from "react";
import SerieContainer from "./SerieContainer";

const ResultsContainer = () => {
    const { gameData } = useGameContext();
    return (
        <div className="results-container">
            {gameData!.series
                .sort((a, b) => a.id - b.id)
                .map((serie) => (
                    <SerieContainer key={serie.id} serieData={serie} />
                ))}
        </div>
    );
};

export default ResultsContainer;
