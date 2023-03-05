import {
    createContext,
    Dispatch,
    ReactNode,
    SetStateAction,
    useContext,
    useState,
} from "react";

type UserDataType = {
    pseudo: string;
    avatar: string;
    socketId: string;
};

type UsersDataType = {
    roomId: string;
    users: UserDataType[];
};

type Props = {
    children: ReactNode;
};

const defaultValue = {
    usersData: {
        roomId: "",
        users: [
            {
                pseudo: "",
                avatar: "",
                socketId: "",
            },
        ],
    },
    setUsersData: () => {},
} as {
    usersData: UsersDataType | undefined;
    setUsersData: Dispatch<SetStateAction<UsersDataType>> | undefined;
};

const MyUsersContext = createContext(defaultValue);

export const useUsersContext = () => {
    return useContext(MyUsersContext);
};

const UsersContext = ({ children }: Props) => {
    const [usersData, setUsersData] = useState<UsersDataType>({
        roomId: "",
        users: [
            {
                pseudo: "",
                avatar: "",
                socketId: "",
            },
        ],
    });

    return (
        <MyUsersContext.Provider value={{ usersData, setUsersData }}>
            {children}
        </MyUsersContext.Provider>
    );
};

export default UsersContext;
