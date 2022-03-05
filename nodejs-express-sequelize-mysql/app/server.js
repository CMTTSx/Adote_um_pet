const express = require("express");
const cors = require("cors");
const app = express();
var corsOptions = {
    origin: "http://localhost:8081"
};
app.use(cors(corsOptions));
// parse req- application/json
app.use(express.json());
// parse req- application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
// simple route
app.get("/", (req, res) => {
    res.json({ message: "Testando Servidor." });
});

const db = require("./models");

//Para desenvolvimento deve-se usar para ficar recriando os bancos de dados.
db.sequelize.sync({ force: true }).then(() => {
    console.log("Drop and re-sync db.");
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Servidor está rodando na porta: ${PORT}.`);
});