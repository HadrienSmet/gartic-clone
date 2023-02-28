import { Server } from "socket.io";

const io = new Server(3000);

io.on("connection", (socket) => {
    socket.emit("bonjour le client je suis mr serveur", 1, "2", {
        3: Buffer.from([4]),
    });

    socket.on("bonjour du client", (...args) => {
        console.log(...args);
    });
});
