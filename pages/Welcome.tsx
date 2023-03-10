import { useEffect } from "react";

import { useGameContext } from "@/context/GameContext";
import { useUsersContext } from "@/context/UsersContext";

import LanguagesModal from "@/components/mui/LanguagesModal";
import WelcomeContent from "@/components/welcomePage/WelcomeContent/WelcomeContent";
import WelcomeFooter from "@/components/welcomePage/WelcomeFooter";
import WelcomeHeader from "@/components/welcomePage/WelcomeHeader";

const useWelcome = () => {
    const { setGameData } = useGameContext();
    const { setUsersData } = useUsersContext();

    useEffect(() => {
        setGameData!({
            players: [],
            playersReady: [],
            playerIndex: 0,
            gameState: "writte",
            currentRound: 1,
            writtingTime: 60000,
            drawingTime: 180000,
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
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
};

const Welcome = () => {
    useWelcome();

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
