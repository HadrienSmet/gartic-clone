/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect } from "react";
import Head from "next/head";
import { io } from "socket.io-client";

import { useUserContext } from "@/context/UserContext";
import { useUsersContext } from "@/context/UsersContext";
import { useSocketContext } from "@/context/SocketContext";

import RoomHeader from "@/components/roomPage/RoomHeader";
import RoomContent from "@/components/roomPage/roomContent/RoomContent";
import { useGameContext } from "@/context/GameContext";
import { useRouter } from "next/router";

type Player = {
    pseudo: string;
    avatar: string;
    socketId: string;
};

const room = () => {
    const { userData } = useUserContext();
    const { usersData, setUsersData } = useUsersContext();
    const { socket, setSocket } = useSocketContext();
    const { gameData, setGameData } = useGameContext();
    const router = useRouter();

    useEffect(() => {
        if (!socket) {
            const newSocket = io("http://localhost:3000", {
                path: "/api/socket",
                query: userData,
            });

            newSocket.on("connect", () => {
                setUsersData!({
                    roomId: newSocket.id + "-room",
                    users: [
                        {
                            pseudo: userData!.pseudo,
                            avatar: userData!.avatar,
                            socketId: newSocket.id,
                        },
                    ],
                });
            });

            newSocket.on("new-player", (userData) => {
                setUsersData!({
                    roomId: usersData!.roomId,
                    users: [...usersData!.users, userData],
                });
            });
            newSocket.on("players-list", (room, players) =>
                setUsersData!({
                    roomId: room,
                    users: [...players],
                })
            );
            newSocket.on("game-starting", (players) => {
                const userIndex = players.findIndex(
                    (player: Player) => player.pseudo === userData!.pseudo
                );
                console.log({
                    players: players,
                    playerIndex: userIndex,
                    gameState: gameData!.gameState,
                    currentRound: gameData!.currentRound,
                    writtingTime: gameData!.writtingTime,
                    drawingTime: gameData!.drawingTime,
                    series: gameData!.series,
                });

                setGameData!({
                    players: players,
                    playerIndex: userIndex,
                    gameState: gameData!.gameState,
                    currentRound: gameData!.currentRound,
                    writtingTime: gameData!.writtingTime,
                    drawingTime: gameData!.drawingTime,
                    series: gameData!.series,
                });
                router.push("/game");
            });

            newSocket.on("diconnect", () => {
                console.log("disconnected to the server");
            });
            newSocket.on("connect_error", (error) => {
                console.error(error); // Vérifiez l'erreur de connexion
            });
            setSocket(newSocket);
        }

        return () => {
            socket?.disconnect();
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
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
