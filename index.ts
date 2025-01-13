import { isNumber, readJSON, VALID_WORDS } from './utils';
import { Screens } from './types';
import { sanitizeWord } from './wordSanitizer';
import { getLanguage } from './language-detection';
import { checkWord } from './dictionary';



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

        const language = getLanguage(title);
        if(!language) {
          console.log(`No se pudo detectar el idioma de "${title}".`);
          return;
        }
        

        const words = title.split(' ');
        words.forEach((word) => {
          const sanitizedWord = sanitizeWord(word);
          if (!sanitizedWord) return;

          if (VALID_WORDS.has(sanitizedWord)) return;
          if (isNumber(sanitizedWord)) return;

          const isCorrect = checkWord(language, sanitizedWord);

          if (!isCorrect) {
            console.log(`"${sanitizedWord}" contiene un error ortográfico.`);
            errorCount++;
          }
        });
      })
    })
  })


  console.log(`Se encontraron ${errorCount} errores ortográficos.`)
})()