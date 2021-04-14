import express from 'express';

import * as comment from './controller/Comments';
import * as speech from './controller/IBMTextToSpeech';

const routes = express.Router();

// COMENTARIOS
routes.get('/comment', comment.index);  // RETORNA TODOS OS COMENTARIOS 
routes.post('/comment', comment.store); // CRIA UM COMENTARIO 

// SPECH
routes.get("/pronunciation/:id", comment.findComment, speech.pronunciation);    // Retorna o audio do comentario por ID

export default routes;