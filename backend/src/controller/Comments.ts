import { Request, Response, NextFunction } from 'express';
import { exception } from 'node:console';

const Comment = require('../models/Comments');

// GRAVA UM COMENTARIO
export async function store(req: Request, res: Response) {
    const { text } = req.body;

    try {
        const commentary = await Comment.create({ text });

        return res.json(commentary);
    }
    catch (err) {
        return res.status(err.status || 500).json({ status: err.status, message: err.message })
    }
}

// RETORNA TODOS OS COMENTARIOS
export async function index(req: Request, res: Response) {

    try {
        const comments = await Comment.findAll();
        return res.json(comments);
    }
    catch (err) {
        return res.status(err.status || 500).json({ status: err.status, message: err.message })
    }
}

// RETORNA UM COMENTARIO POR ID - MIDDLEWARE
export async function findComment(req: Request, res: Response, next: NextFunction) {

    try {
        const comments = await Comment.findByPk(req.params.id);
        
        req.params.txt = comments.dataValues.text;

        next();
    }
    catch (err) {
        return res.status(err.status || 500).json({ status: err.status, message: err.message })
    }
}