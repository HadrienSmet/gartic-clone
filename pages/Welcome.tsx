import LanguagesModal from "@/components/mui/LanguagesModal";
import WelcomeContent from "@/components/welcomePage/WelcomeContent/WelcomeContent";
import WelcomeFooter from "@/components/welcomePage/WelcomeFooter";
import WelcomeHeader from "@/components/welcomePage/WelcomeHeader";
import { useGameContext } from "@/context/GameContext";
// import { useSocketContext } from "@/context/SocketContext";
import { useUsersContext } from "@/context/UsersContext";
import { useEffect } from "react";

const Welcome = () => {
    // const { socket } = useSocketContext();
    const { setGameData } = useGameContext();
    const { setUsersData } = useUsersContext();
    useEffect(() => {
        setGameData!({
            players: [],
            playersReady: [],
            playerIndex: 0,
            gameState: "writte",
            currentRound: 1,
            writtingTime: 6000,
            drawingTime: 18000,
            series: [],
        });
        setUsersData!({
            roomId: "",
            users: [
                {
                    pseudo: "",
                    avatar: "",
                    socketId: "",
                },
            ],
        });
    }, []);
    return (
        <main className="welcome">
            <WelcomeHeader />
            <WelcomeContent />
            <WelcomeFooter />
            <LanguagesModal />
        </main>
    );
};

export default Welcome;
