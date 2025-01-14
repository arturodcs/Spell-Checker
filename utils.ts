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
  "Sub-Checkbox",
  "Sub-Input",
  "Sub-Select",
  "Sub-Text",
  "Sub-Radio",
  "REPSE",
  "RSE",
  "KPI",
  "ESG",
  "STPS",
  "C4",
  "CUIP",
  "SSP",
  "RL",
]);


export const isNumber = (word: string): boolean => {
  return /^[0-9]+$/.test(word);
}