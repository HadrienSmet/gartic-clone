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
};

type Props = {
    children: ReactNode;
};

const defaultValue = {
    userData: {
        pseudo: "",
        avatar: "",
    },
    setUserData: () => {},
} as {
    userData: UserDataType | undefined;
    setUserData: Dispatch<SetStateAction<UserDataType>> | undefined;
};

const MyUserContext = createContext(defaultValue);

export const useUserContext = () => {
    return useContext(MyUserContext);
};

const UserContext = ({ children }: Props) => {
    const [userData, setUserData] = useState<UserDataType>({
        pseudo: "",
        avatar: "",
    });

    return (
        <MyUserContext.Provider value={{ userData, setUserData }}>
            {children}
        </MyUserContext.Provider>
    );
};

export default UserContext;
