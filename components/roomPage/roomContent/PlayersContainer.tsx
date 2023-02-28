import Image from "next/image";
import React from "react";
import { FaPlay } from "react-icons/fa";

const numberArr: number[] = [];
for (let i = 1; i < 15; i++) {
    numberArr.push(i);
}

const PlayersContainer = () => {
    return (
        <div className="players-container">
            <h2>Joueurs 1/14</h2>
            <div className="players-container__select-division">
                <select>
                    {numberArr.map((number) => (
                        <option key={number}>{number} joueurs</option>
                    ))}
                </select>
                <FaPlay />
            </div>
            <ul>
                {numberArr.map((number) => (
                    <li className="player" key={"li-" + number}>
                        <Image
                            src={"/images/gartic-avt_empty.png"}
                            alt="Avatar vide"
                            height={53}
                            width={46}
                        />{" "}
                        <span>vide</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PlayersContainer;
