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
    socketId?: string;
};

type RoundDataType = {
    author: UserDataType;
    content: string;
};

type SerieType = {
    id: number;
    content: RoundDataType[];
};

type SeriesType = SerieType[];

type GameDataType = {
    players: UserDataType[];
    playersReady: number[];
    playerIndex: number;
    gameState: string;
    currentRound: number;
    writtingTime: number;
    drawingTime: number;
    series: SeriesType;
};

type Props = {
    children: ReactNode;
};

const defaultValue = {
    gameData: {
        players: [],
        playersReady: [],
        playerIndex: 0,
        gameState: "writte",
        currentRound: 1,
        writtingTime: 600,
        drawingTime: 1800,
        series: [],
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
        playersReady: [],
        playerIndex: 0,
        gameState: "writte",
        currentRound: 1,
        writtingTime: 60000000,
        drawingTime: 18000000,
        series: [],
    });

    return (
        <MyGameContext.Provider value={{ gameData, setGameData }}>
            {children}
        </MyGameContext.Provider>
    );
};

export default GameContext;
