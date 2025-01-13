import { franc, francAll } from "franc-min"
import { LangCode } from "./dictionary";


const defaultLanguage: LangCode = "spa"
const validLanguages: Set<LangCode> = new Set(["spa", "eng"])

export const getLanguage = (text: string): LangCode => {
  const languageDetectionResult = francAll(text);

  // return the first valid language detected
  for (const [langCode] of languageDetectionResult) {
    if (validLanguages.has(langCode as LangCode)) {
      return langCode as LangCode;
    }
  }

  return defaultLanguage;
}