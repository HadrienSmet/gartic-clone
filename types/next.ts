import { Server as NetServer, Socket } from "net";
import { NextApiResponse } from "next";
import { Server as SocketIOServer } from "socket.io";

export type NextApiResponseServerIO = NextApiResponse & {
    socket: Socket & {
        server: NetServer & {
            io: SocketIOServer;
        };
    };
};

export type UserDataType = {
    pseudo: string;
    avatar: string;
    socketId?: string;
};

export type RoundDataType = {
    roundId: number;
    author: UserDataType;
    content: string;
};

export type SerieType = {
    id: number;
    content: RoundDataType[];
};
