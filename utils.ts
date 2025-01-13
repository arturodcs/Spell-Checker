import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';

export const readJSON = async (filePath: string) => {
  const resolvedFilePath = resolve(filePath);
  const content = await readFile(resolvedFilePath, { encoding: 'utf-8' });

  return JSON.parse(content);
}

export const VALID_WORDS = new Set([
  "CALIDRA",
  "RFC",
  "TAX",
  "A.C",
  "ID",
  "y/o",
  "CIE",
]);


export const isNumber = (word: string): boolean => {
  return /^[0-9]+$/.test(word);
}