// VARIAVEIS DO AMBIENTE
require('dotenv/config');

// BANCO DE DADOS - INICIAR TABELAS
require('./database/index');
// IMPORTACAO DO EXPRESS
import express from 'express';
// CORS
import cors from 'cors';
// IMPORTACAO DAS ROTAS
import routes from './routes';

// CONFIGURACAO DO SERVIDOR API
const server = express();
server.use(express.json());
server.use(cors());
server.use(routes);

// INICIALIZACAO DO SERVIDOR API
server.listen(process.env.API_PORT, () => {
    console.log(`[server] API Server started.`);
    console.log(`[server] API Server running - Port: ${process.env.API_PORT}`);
});