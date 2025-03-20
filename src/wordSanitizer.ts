const removeInitialChar = (word: string): string => {
  const firstChar = word.charAt(0);
  const targetChars = new Set(['"', '¿', '¡', '(', '[', '{', '<']);

  if (targetChars.has(firstChar)) {
    return word.slice(1);
  }

  return word;
}

const removeFinalChar = (word: string): string => {
  const lastChar = word.charAt(word.length - 1);
  const targetChars = new Set(['.', ',', ';', ':', '!', '?', '"', ')', ']', '}', '>']);

  if (targetChars.has(lastChar)) {
    return word.slice(0, -1);
  }

  return word;
}


export const sanitizeWord = (word: string): string => {
  let sanitizedWord = word;

  sanitizedWord = removeInitialChar(sanitizedWord);
  sanitizedWord = removeFinalChar(sanitizedWord);

  return sanitizedWord;
};