// import { SocketProvider } from "@/context/SocketContext";
import UserContext from "@/context/UserContext";
import UsersContext from "@/context/UsersContext";
import React, { ReactNode } from "react";

type Props = {
    children: ReactNode;
};
const Layout = ({ children }: Props) => {
    return (
        <>
            {/* <SocketProvider> */}
            <UserContext>
                <UsersContext>{children}</UsersContext>
            </UserContext>
            {/* </SocketProvider> */}
        </>
    );
};

export default Layout;
