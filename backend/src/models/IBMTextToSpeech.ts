require('dotenv/config');
const fs = require("fs");

// IBM Text to Speech
import TextToSpeechV1 from 'ibm-watson/text-to-speech/v1';
import { IamAuthenticator } from 'ibm-watson/auth';

const textToSpeech = new TextToSpeechV1({
  authenticator: new IamAuthenticator({
    apikey: process.env.apikey || "",
  }),
  serviceUrl: process.env.serviceUrl,
});

export async function getPronunciation(text: string) {
  const synthesizeParams = {
    text: text,
    accept: 'audio/wav',
    voice: 'pt-BR_IsabelaVoice',
  };

  const synthesize = await textToSpeech.synthesize(synthesizeParams);

  const buffer = await textToSpeech.repairWavHeaderStream(synthesize.result as any) as any;

  return buffer;
}