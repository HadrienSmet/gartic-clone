import ResultsContainer from "@/components/resultsPage/ResultsContainer";
import PlayersContainer from "@/components/roomPage/roomContent/PlayersContainer";
import React from "react";

const results = () => {
    return (
        <main className="results">
            <PlayersContainer />
            <ResultsContainer />
        </main>
    );
};

export default results;
