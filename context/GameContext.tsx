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

type GameDataType = {
    players: UserDataType[];
    gameState: string;
    currentRound: number;
    writtingTime: number;
    drawingTime: number;
};

type Props = {
    children: ReactNode;
};

const defaultValue = {
    gameData: {
        players: [],
        gameState: "writte",
        currentRound: 1,
        writtingTime: 600,
        drawingTime: 1800,
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
        players: [],
        gameState: "writte",
        currentRound: 1,
        writtingTime: 600,
        drawingTime: 1800,
    });

    return (
        <MyGameContext.Provider value={{ gameData, setGameData }}>
            {children}
        </MyGameContext.Provider>
    );
};

export default GameContext;
