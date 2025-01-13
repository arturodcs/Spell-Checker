import Typo from 'typo-js';
import { resolve } from 'node:path';

const DICTIONARIES_BASE_PATH = resolve(__dirname, 'dictionaries');
type LangCode = 'es_MX';

export const getDictionary = (langCode: LangCode) => {
  return new Typo(langCode, null, null, {
    dictionaryPath: resolve(__dirname, 'dictionaries'),
  });

}