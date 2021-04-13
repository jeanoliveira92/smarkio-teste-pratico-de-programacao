import express, { Request, Response } from 'express';

import * as comment from './controller/Comments';
import * as speech from './controller/IBMTextToSpeech';

const routes = express.Router();

// COMENTARIOS
// RETORNA TODOS OS COMENTARIOS 
routes.get('/comment', comment.index);
// CRIA UM COMENTARIO 
routes.post('/comment', comment.store);


// SPECH

// Retorna o audio do comentario por ID
routes.get("/pronunciation/:id", comment.findComment, speech.pronunciation);

export default routes;