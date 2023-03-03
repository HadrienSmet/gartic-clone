import UserContext from "@/context/UserContext";
import UsersContext from "@/context/UsersContext";
import React, { ReactNode } from "react";

type Props = {
    children: ReactNode;
};
const Layout = ({ children }: Props) => {
    return (
        <>
            <UserContext>
                <UsersContext>{children}</UsersContext>
            </UserContext>
        </>
    );
};

export default Layout;
