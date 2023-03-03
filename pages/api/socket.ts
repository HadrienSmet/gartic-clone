import { Server as ServerIO } from "socket.io";
import { Server as NetServer } from "http";
import { NextApiRequest } from "next";
import { NextApiResponseServerIO } from "@/types/next";

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

        res.socket.server.io = io;
    }
    res.end();
};
export default SocketHandler;
