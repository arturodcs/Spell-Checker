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


const validateAgainstAllDictionaries = (word: string) => {
  const spanishCheck = spanishDictionary.check(word);
  if (spanishCheck) {
    return true;
  }

  const englishCheck = englishDictionary.check(word);
  if (englishCheck) {
    return true;
  }

  return false;
}

export const isWordCorrect = (language: LangCode | undefined, word: string) => {
  if(!language) {
    return validateAgainstAllDictionaries(word);
  }


  switch (language) {
    case 'eng':
      return englishDictionary.check(word);
    case 'spa':
      return spanishDictionary.check(word);
    default:
      throw new Error(`Invalid language code: ${language}`);
  }
}