import { Server as ServerIO } from "socket.io";
import { Server as NetServer } from "http";
import { NextApiRequest } from "next";
import { NextApiResponseServerIO } from "@/types/next";
import socket from "@/utils/socket";
import { Socket } from "socket.io-client";

export const config = {
    api: {
        bodyParser: false,
    },
};

const SocketHandler = async (
    req: NextApiRequest,
    res: NextApiResponseServerIO
) => {
    if (!res.socket.server.io) {
        console.log("New Socket.io Server...");
        const httpServer: NetServer = res.socket.server as any;
        const io = new ServerIO(httpServer, {
            path: "/api/socket",
        });

        io.on("connection", (socket) => {
            console.log("l25: " + socket.id);
            io.emit("socket-id", socket.id);

            socket.on("join-room", (room) => {
                socket.leave(socket.id);
                socket.join(room);
                console.log("socket left " + socket.id);
                console.log("socket joined " + room);
            });
        });

        res.socket.server.io = io;
    }
    res.end();
};
export default SocketHandler;
