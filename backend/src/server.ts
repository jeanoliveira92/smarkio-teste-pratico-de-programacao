// VARIAVEIS DO AMBIENTE
require('dotenv/config');

// IMPORTACAO DO EXPRESS
import express from 'express';
// IMPORTACAO DAS ROTAS
import routes from './routes';

// CONFIGURACAO DO SERVIDOR API
const server = express();
server.use(express.json());
server.use(routes);

// INICIALIZACAO DO SERVIDOR API
server.listen(process.env.API_PORT, () => {
    console.log(`[server] API Server running - Port: ${process.env.API_PORT}`);
});