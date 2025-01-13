import { franc, francAll } from "franc-min"


const defaultLanguage = "spa"
const validLanguages = new Set(["spa", "eng"])

export const getLanguage = (text: string) => {
  const languageDetectionResult = francAll(text);

  // return the first valid language detected
  for(const [langCode] of languageDetectionResult) {
    if(validLanguages.has(langCode)) {
      return langCode;
    }
  }

  return defaultLanguage;
}