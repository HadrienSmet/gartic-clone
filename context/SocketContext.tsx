import { createContext, ReactNode, useContext, useState } from "react";
import { Socket } from "socket.io-client";
import { DefaultEventsMap } from "socket.io/dist/typed-events";

type SocketContextType = {
    socket: Socket<DefaultEventsMap, DefaultEventsMap> | undefined;
    setSocket: React.Dispatch<
        React.SetStateAction<
            Socket<DefaultEventsMap, DefaultEventsMap> | undefined
        >
    >;
};

type Props = {
    children: ReactNode;
};

const MySocketContext = createContext<SocketContextType>({
    socket: undefined,
    setSocket: () => {},
});

export const useSocketContext = () => {
    return useContext(MySocketContext);
};

const SocketContext = ({ children }: Props) => {
    const [socket, setSocket] = useState<
        Socket<DefaultEventsMap, DefaultEventsMap> | undefined
    >();

    return (
        <MySocketContext.Provider value={{ socket, setSocket }}>
            {children}
        </MySocketContext.Provider>
    );
};

export default SocketContext;
