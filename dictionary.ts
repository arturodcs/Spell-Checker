import Typo from 'typo-js';
import { resolve } from 'node:path';

const DICTIONARIES_BASE_PATH = resolve(__dirname, 'dictionaries');
export type LangCode =
  'spa' | // spanish
  'eng'; // english


const getDictionary = (langCode: LangCode) => {
  return new Typo(langCode, null, null, {
    dictionaryPath: resolve(__dirname, 'dictionaries'),
  });
}

const spanishDictionary = getDictionary('spa');
const englishDictionary = getDictionary('eng');

export const checkWord = (language: LangCode, word: string) => {
  switch (language) {
    case 'eng':
      return englishDictionary.check(word);
    case 'spa':
      return spanishDictionary.check(word);
    default:
      throw new Error(`Invalid language code: ${language}`);
  }
}