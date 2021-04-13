import express, { Request, Response } from 'express';
import fs from 'fs';
import path from 'path';

import { getPronunciation } from '../models/IBMTextToSpeech';

export async function pronunciation(req: Request, res: Response) {
    const audio = await getPronunciation(req.params.txt);

    //fs.writeFileSync('hello_world.mp3', audio);
    res.set("content-type", "audio/mp3");
    return res.send(audio);
};