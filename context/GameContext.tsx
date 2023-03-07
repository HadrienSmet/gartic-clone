import {
    createContext,
    Dispatch,
    ReactNode,
    SetStateAction,
    useContext,
    useState,
} from "react";

type GameDataType = {
    gameState: string;
    time: number;
};

type Props = {
    children: ReactNode;
};

const defaultValue = {
    gameData: {
        gameState: "writte",
        time: 60,
    },
    setGameData: () => {},
} as {
    gameData: GameDataType | undefined;
    setGameData: Dispatch<SetStateAction<GameDataType>> | undefined;
};

const MyGameContext = createContext(defaultValue);

export const useGameContext = () => {
    return useContext(MyGameContext);
};

const GameContext = ({ children }: Props) => {
    const [gameData, setGameData] = useState<GameDataType>({
        gameState: "writte",
        time: 6000,
    });

    return (
        <MyGameContext.Provider value={{ gameData, setGameData }}>
            {children}
        </MyGameContext.Provider>
    );
};

export default GameContext;
