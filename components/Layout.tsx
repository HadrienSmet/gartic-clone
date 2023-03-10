// import { SocketProvider } from "@/context/SocketContext";
import GameContext from "@/context/GameContext";
import SocketContext from "@/context/SocketContext";
import UserContext from "@/context/UserContext";
import UsersContext from "@/context/UsersContext";
import React, { ReactNode } from "react";

type Props = {
    children: ReactNode;
};
const Layout = ({ children }: Props) => {
    return (
        <>
            <SocketContext>
                <GameContext>
                    <UserContext>
                        <UsersContext>{children}</UsersContext>
                    </UserContext>
                </GameContext>
            </SocketContext>
        </>
    );
};

export default Layout;
