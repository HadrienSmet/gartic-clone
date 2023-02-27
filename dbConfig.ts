const mongoose = require("mongoose");

export const mongoConnexion = () => {
    mongoose
        .connect(
            "mongodb+srv://" +
                process.env.DB_SECRET_NAME +
                ":" +
                process.env.DB_SECRET_PASSWORD +
                "@" +
                process.env.DB_SECRET_CLUSTER +
                "." +
                process.env.DB_SECRET_URLCODE +
                ".mongodb.net/?retryWrites=true&w=majority",
            { useNewUrlParser: true, useUnifiedTopology: true }
        )
        .then(() => console.log("Connexion à MongoDB réussie !"))
        .catch(() => console.log("Connexion à MongoDB échouée !"));
};
