/* eslint-disable react-hooks/rules-of-hooks */
import { Dispatch, SetStateAction, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { io, Socket } from "socket.io-client";
import { DefaultEventsMap } from "socket.io/dist/typed-events";

import { useUserContext } from "@/context/UserContext";
import { useUsersContext } from "@/context/UsersContext";
import { useSocketContext } from "@/context/SocketContext";
import { useGameContext } from "@/context/GameContext";

import RoomHeader from "@/components/roomPage/RoomHeader";
import RoomContent from "@/components/roomPage/roomContent/RoomContent";

type Player = {
    pseudo: string;
    avatar: string;
    socketId: string;
};

const useRoom = (
    socket: Socket | undefined,
    setSocket: Dispatch<
        SetStateAction<Socket<DefaultEventsMap, DefaultEventsMap> | undefined>
    >
) => {
    const { userData } = useUserContext();
    const { usersData, setUsersData } = useUsersContext();
    const { gameData, setGameData } = useGameContext();
    const router = useRouter();

    const onConnect = () => {
        if (socket && userData)
            setUsersData!({
                roomId: socket.id + "-room",
                users: [
                    {
                        pseudo: userData.pseudo,
                        avatar: userData.avatar,
                        socketId: socket.id,
                    },
                ],
            });
    };
    const onNewPlayer = (userData: Player) => {
        if (usersData)
            setUsersData!({
                roomId: usersData.roomId,
                users: [...usersData.users, userData],
            });
    };

    const onPlayerList = (room: string, players: Player[]) => {
        setUsersData!({
            roomId: room,
            users: [...players],
        });
    };
    const onGameStarting = (players: Player[]) => {
        const userIndex = players.findIndex(
            (player: Player) => player.pseudo === userData!.pseudo
        );

        setGameData!({
            players: players,
            playersReady: gameData!.playersReady,
            playerIndex: userIndex,
            gameState: gameData!.gameState,
            currentRound: gameData!.currentRound,
            writtingTime: gameData!.writtingTime,
            drawingTime: gameData!.drawingTime,
            series: gameData!.series,
        });
        router.push("/game");
    };

    useEffect(() => {
        if (!socket) {
            const newSocket = io("https://gartic-clone-server.herokuapp.com/", {
                reconnectionDelay: 1000,
                reconnection: true,
                reconnectionAttempts: 10,
                transports: ["polling"],
                rejectUnauthorized: false,
                query: userData,
            });

            newSocket.on("connect", onConnect);
            newSocket.on("new-player", onNewPlayer);
            newSocket.on("players-list", onPlayerList);
            newSocket.on("game-starting", onGameStarting);

            newSocket.on("diconnect", () =>
                console.log("disconnected to the server")
            );
            newSocket.on("connect_error", (error) => console.error(error));
            setSocket(newSocket);
        }

        return () => {
            socket?.disconnect();
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
};

const room = () => {
    const { socket, setSocket } = useSocketContext();
    useRoom(socket, setSocket);

    return (
        <>
            <Head>
                <title>Gartic Clone - Room</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="room">
                <RoomHeader />
                <RoomContent socket={socket} />
            </main>
        </>
    );
};

export default room;
