import ContributorsContainer from "@/components/resultsPage/ContributorsContainer";
import ResultsContainer from "@/components/resultsPage/ResultsContainer";
import Head from "next/head";
import React from "react";

const results = () => {
    return (
        <>
            <Head>
                <title>Gartic Clone - Results</title>
                <meta
                    name="description"
                    content="Admire les résultats hilarants que toi et tes amis avez produits!"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="results">
                <ContributorsContainer />
                <ResultsContainer />
            </main>
        </>
    );
};

export default results;
