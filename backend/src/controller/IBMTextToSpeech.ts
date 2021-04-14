import { Request, Response } from 'express';

import { getPronunciation } from '../models/IBMTextToSpeech';

export async function pronunciation(req: Request, res: Response) {
    const audio = await getPronunciation(req.params.txt);
    //fs.writeFileSync('hello_world.mp3', audio);
    return res.send(audio);
};