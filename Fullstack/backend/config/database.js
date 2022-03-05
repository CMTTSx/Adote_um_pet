import { Sequelize } from "sequelize";

const db = new Sequelize('mern', 'root', 'password', {
    host: "localhost",
    dialect: "mysql"
});

export default db;