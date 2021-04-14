require('dotenv/config');
const fs = require("fs");

// IBM Text to Speech
import TextToSpeechV1 from 'ibm-watson/text-to-speech/v1';
import { IamAuthenticator } from 'ibm-watson/auth';

// inicia a conexão com o servidor speech da IBM
const textToSpeech = new TextToSpeechV1({
  authenticator: new IamAuthenticator({
    apikey: process.env.apikey || "",
  }),
  serviceUrl: process.env.serviceUrl,
});

// envia o texto para o servidor da ibm e retorna o buffer de audio
export async function getPronunciation(text: string) {
  // parametros de conversão do texto para audio
  const synthesizeParams = {
    text: text,
    accept: 'audio/wav',
    voice: 'pt-BR_IsabelaVoice',
  };

  const synthesize = await textToSpeech.synthesize(synthesizeParams);

  const buffer = await textToSpeech.repairWavHeaderStream(synthesize.result as any) as any;

  return buffer;
}