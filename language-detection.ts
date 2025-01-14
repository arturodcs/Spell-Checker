import { franc, francAll } from "franc-min"
import { LangCode } from "./dictionary";


const validLanguages: Set<LangCode> = new Set(["spa", "eng"])
const minimumAcceptanceRate = 0.9;


export const getLanguage = (text: string): LangCode | undefined => {
  const languageDetectionResult = francAll(text);

  for (const [langCode, percentage] of languageDetectionResult) {
    if (validLanguages.has(langCode as LangCode) && percentage >= minimumAcceptanceRate) {
      return langCode as LangCode;
    }
  }

  return undefined;
}