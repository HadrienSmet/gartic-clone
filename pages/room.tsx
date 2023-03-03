/* eslint-disable react-hooks/rules-of-hooks */
import LanguagesModal from "@/components/mui/LanguagesModal";
import RoomContent from "@/components/roomPage/roomContent/RoomContent";
import Head from "next/head";
import React, { useEffect } from "react";
import RoomHeader from "../components/roomPage/RoomHeader";
import { io } from "socket.io-client";
import { useUserContext } from "@/context/UserContext";
import { useUsersContext } from "@/context/UsersContext";

const socket = io("http://localhost:3000", {
    path: "/api/socket",
});
const room = () => {
    const { userData, setUserData } = useUserContext();
    const { usersData, setUsersData } = useUsersContext();
    useEffect(() => {
        console.log("useEffect working");

        socket.on("connect", () => {
            console.log(`connected to the server with id: ${socket.id}`);
            setUsersData!({
                roomId: socket.id,
                users: [
                    {
                        pseudo: userData!.pseudo,
                        avatar: userData!.avatar,
                    },
                ],
            });
        });
        socket.on("diconnect", () => {
            console.log("disconnected to the server");
        });
        socket.on("connect_error", (error) => {
            console.error(error); // Vérifiez l'erreur de connexion
        });

        return () => {
            socket.disconnect();
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <>
            <Head>
                <title>Gartic Room</title>
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
                <RoomContent />
                <LanguagesModal />
            </main>
        </>
    );
};

export default room;
