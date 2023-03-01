import UserContext from "@/context/UserContext";
import React, { ReactNode } from "react";

type Props = {
    children: ReactNode;
};
const Layout = ({ children }: Props) => {
    return (
        <>
            <UserContext>{children}</UserContext>
        </>
    );
};

export default Layout;
