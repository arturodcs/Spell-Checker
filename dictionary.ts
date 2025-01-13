import Typo from 'typo-js';
import { resolve } from 'node:path';

const DICTIONARIES_BASE_PATH = resolve(__dirname, 'dictionaries');
export type LangCode =
  'spa' | // spanish
  'eng'; // english

export const getDictionary = (langCode: LangCode) => {
  return new Typo(langCode, null, null, {
    dictionaryPath: resolve(__dirname, 'dictionaries'),
  });

}