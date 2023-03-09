import { Server as ServerIO } from "socket.io";
import { Server as NetServer } from "http";
import { NextApiRequest } from "next";
import { NextApiResponseServerIO } from "@/types/next";

export const config = {
    api: {
        bodyParser: false,
    },
};

type Player = {
    pseudo: string;
    avatar: string;
    socketId: string;
};

const players: Record<string, Player[]> = {};

const SocketHandler = async (
    req: NextApiRequest,
    res: NextApiResponseServerIO
) => {
    if (!res.socket.server.io) {
        const httpServer: NetServer = res.socket.server as any;
        const io = new ServerIO(httpServer, {
            path: "/api/socket",
        });

        io.on("connection", (socket) => {
            const { pseudo, avatar } = socket.handshake.query;
            const player = {
                pseudo: typeof pseudo === "string" ? pseudo : "",
                avatar: typeof avatar === "string" ? avatar : "",
                socketId: socket.id,
            };
            socket.join(socket.id + "-room");
            const room = socket.id + "-room";
            if (!players[room]) players[room] = [];
            players[room].push(player);

            io.in(room).emit("players-list", room, players[room]);

            socket.on("join-room", (room, previousRoom, userData) => {
                socket.leave(previousRoom);
                socket.join(room);
                socket.to(room).emit("new-player", userData);
                players[room].push(player);
                io.in(room).emit("players-list", room, players[room]);
            });

            socket.on("disconnect", () => {
                const index = players[room].findIndex(
                    (p) => p.socketId === socket.id
                );
                if (index !== -1) players[room].splice(index, 1);
                io.in(room).emit("players-list", room, players[room]);
            });
        });

        res.socket.server.io = io;
    }
    res.end();
};
export default SocketHandler;
