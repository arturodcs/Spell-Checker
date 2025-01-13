import { isNumber, readJSON, VALID_WORDS } from './utils';
import { Screens } from './types';
import { sanitizeWord } from './wordSanitizer';
import { getLanguage } from './language-detection';
import Typo from 'typo-js';
import { resolve } from 'node:path';
import { getDictionary } from './dictionary';

const spanishDictionary = getDictionary('es_MX');



(async () => {
  const data = await readJSON('./data.json') as Screens;

  let errorCount = 0;

  const screens = Object.values(data);
  screens.forEach((screen) => {
    screen.Secciones.forEach((section) => {
      const items = Object.values(section.items || {});
      items.forEach((item) => {
        const title = item.propiedades.title;
        if (!title) return;

        const language = getLanguage(title);


        const words = title.split(' ');
        words.forEach((word) => {
          const sanitizedWord = sanitizeWord(word);

          if (!sanitizedWord) return;
          if (VALID_WORDS.has(sanitizedWord)) return;
          if (isNumber(sanitizedWord)) return;

          const isCorrect = spanishDictionary.check(sanitizedWord);

          if (!isCorrect) {
            // console.log(`"${sanitizedWord}" contiene un error ortográfico.`);
            errorCount++;
          }
        });
      })
    })
  })


  console.log(`Se encontraron ${errorCount} errores ortográficos.`)
})()