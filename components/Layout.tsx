// import { SocketProvider } from "@/context/SocketContext";
import GameContext from "@/context/GameContext";
import UserContext from "@/context/UserContext";
import UsersContext from "@/context/UsersContext";
import React, { ReactNode } from "react";

type Props = {
    children: ReactNode;
};
const Layout = ({ children }: Props) => {
    return (
        <>
            <GameContext>
                <UserContext>
                    <UsersContext>{children}</UsersContext>
                </UserContext>
            </GameContext>
            {/* </SocketProvider> */}
        </>
    );
};

export default Layout;
