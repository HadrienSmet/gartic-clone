import { io, Socket } from "socket.io-client";

const socketUrl = process.env.NEXT_PUBLIC_SOCKET_URL || "ws://localhost:3000";
const socket: Socket = io(socketUrl);

export default socket;
