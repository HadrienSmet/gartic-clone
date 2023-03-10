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

type CanvasConfig = {
    lineWidth?: number;
    strokeStyle?: string | CanvasGradient | CanvasPattern;
    fillStyle?: string | CanvasGradient | CanvasPattern;
    font?: string;
    textAlign?: CanvasTextAlign;
    textBaseline?: CanvasTextBaseline;
    lineCap?: CanvasLineCap;
    lineJoin?: CanvasLineJoin;
    miterLimit?: number;
    shadowColor?: string;
    shadowBlur?: number;
    shadowOffsetX?: number;
    shadowOffsetY?: number;
};

type RoundDataType = {
    author: UserDataType;
    content: string | CanvasConfig;
};

type SerieType = {
    id: number;
    content: RoundDataType[];
};

type SeriesType = SerieType[];

type GameDataType = {
    players: UserDataType[];
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
