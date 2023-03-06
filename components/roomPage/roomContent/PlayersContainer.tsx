import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaPlay } from "react-icons/fa";
// import { useUserContext } from "@/context/UserContext";
import { useUsersContext } from "@/context/UsersContext";

// const numberArr: number[] = [];
// for (let i = 1; i < 15; i++) {
//     numberArr.push(i);
// }
const selectChoices = [4, 5, 6, 7, 8, 9, 10, 15, 20, 25];

const PlayersContainer = () => {
    // const { userData } = useUserContext();
    const [maxPlayers, setMaxPlayers] = useState(4);
    const [maxPlayersArr, setMaxPlayersArr] = useState<number[]>([]);
    const { usersData } = useUsersContext();

    const handleMaxPlayers = (maxNumber: string | number) => {
        typeof maxNumber === "string"
            ? setMaxPlayers(parseInt(maxNumber))
            : setMaxPlayers(maxNumber);
    };

    useEffect(() => {
        for (let i = 0; i < maxPlayers + 1; i++) {
            if (i === 0) {
                setMaxPlayersArr([i]);
            } else {
                setMaxPlayersArr((currArr) => [...currArr, i]);
            }
        }
    }, [maxPlayers]);

    return (
        <div className="players-container">
            <h2>
                Joueurs {usersData?.users.length}/{maxPlayers}
            </h2>
            <div className="players-container__select-division">
                <select onChange={(e) => handleMaxPlayers(e.target.value)}>
                    {selectChoices.map((number) => (
                        <option
                            value={number}
                            onClick={() => handleMaxPlayers(number)}
                            key={number}
                        >
                            {number} joueurs
                        </option>
                    ))}
                </select>
                <FaPlay />
            </div>
            <ul>
                {usersData?.users.map((user) => (
                    <li className="player busy" key={"li-" + user.pseudo}>
                        <Image
                            src={user.avatar}
                            alt="Avatar vide"
                            height={53}
                            width={46}
                        />{" "}
                        <span>{user.pseudo}</span>
                    </li>
                ))}
                {maxPlayersArr.map((number) => {
                    if (number > usersData!.users.length) {
                        return (
                            <li className="player" key={"li-" + number}>
                                <Image
                                    src={"/images/gartic-avt_empty.png"}
                                    alt="Avatar vide"
                                    height={53}
                                    width={46}
                                />{" "}
                                <span>vide</span>
                            </li>
                        );
                    }
                })}
            </ul>
        </div>
    );
};

export default PlayersContainer;
