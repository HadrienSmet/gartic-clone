import ContributorsContainer from "@/components/resultsPage/ContributorsContainer";
import ResultsContainer from "@/components/resultsPage/ResultsContainer";
import React from "react";

const results = () => {
    return (
        <main className="results">
            <ContributorsContainer />
            <ResultsContainer />
        </main>
    );
};

export default results;
