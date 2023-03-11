import { useUsersContext } from "@/context/UsersContext";
import Image from "next/image";
import React from "react";

const ContributorsContainer = () => {
    const { usersData } = useUsersContext();
    return (
        <div className="results__contributors-container">
            <h2>participants</h2>
            <ul className="results__contributors-list">
                {usersData!.users.map((user) => (
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
            </ul>
        </div>
    );
};

export default ContributorsContainer;
