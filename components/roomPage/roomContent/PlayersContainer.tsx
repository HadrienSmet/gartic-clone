import React from "react";

const numberArr: number[] = [];
for (let i = 1; i < 15; i++) {
    numberArr.push(i);
}

const PlayersContainer = () => {
    return (
        <div className="room-content__players-container">
            <h2>Joueurs 1/14</h2>
            <input type="select" />
            {numberArr.map((number) => (
                <li key={number}>Joueur n°{number}</li>
            ))}
        </div>
    );
};

export default PlayersContainer;
