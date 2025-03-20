import { isNumber, readJSON, VALID_WORDS } from './utils';
import { Screens } from './types';
import { sanitizeWord } from './wordSanitizer';
import { isWordCorrect } from './dictionary';
import {getLanguage } from "./language-detection";


(async () => {
  const data = await readJSON('./data/data.json') as Screens;

  let errorCount = 0;

  const screens = Object.values(data);
  screens.forEach((screen) => {
    screen.Secciones.forEach((section) => {
      const items = Object.values(section.items || {});
      items.forEach((item) => {
        const title = item.propiedades.title;
        if (!title) return;

        const language = getLanguage(title, 'languagedetect');
        
        
        const words = title.split(' ');
        words.forEach((word) => {
          const sanitizedWord = sanitizeWord(word);
          if (!sanitizedWord) return;

          if (VALID_WORDS.has(sanitizedWord)) return;
          if (isNumber(sanitizedWord)) return;

          const isCorrect = isWordCorrect(language, sanitizedWord);

          if (!isCorrect) {
            console.log(`"${sanitizedWord}" contiene un error ortográfico en la oración "${title}", se detectó como ${language}.`);
            errorCount++;
          }
        });
      })
    })
  })


  console.log(`Se encontraron ${errorCount} errores ortográficos.`)
})()

