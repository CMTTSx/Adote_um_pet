import express from "express";
import db from "./config/database.js";
import productRoutes from "./routes/index.js";
import cors from "cors";

const app = express();

try {
    await db.authenticate();
    console.log('Banco de Dados conectado com Sucesso!');
} catch (error) {
    console.error('Connection error:', error);
}

app.use(cors());
app.use(express.json());
app.use('/products', productRoutes);

app.listen(5000, () => console.log('Servidor em funcionamento na porta 5000!'));