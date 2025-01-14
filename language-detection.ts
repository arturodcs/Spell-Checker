import { francAll } from "franc-min"
import { LangCode } from "./dictionary";
import LanguageDetect from "languagedetect";

const lngDetector = new LanguageDetect();


type Tool = "franc" | "languagedetect";
export const getLanguage = (text: string, tool: Tool) => {
  switch (tool) {
    case "franc":
      return getLanguageWithFranc(text);
    case "languagedetect":
      return getLanguageWithLanguageDetect(text);
    default:
      throw new Error(`Invalid tool: ${tool}`);
  }
}


export const getLanguageWithLanguageDetect = (text: string): LangCode | undefined => {
  const minimumAcceptanceRate = 0.9;
  const validLanguages: Set<LangCode> = new Set(["spa", "eng"]);

  const languageDetectionResult = francAll(text);

  for (const [langCode, percentage] of languageDetectionResult) {
    if (validLanguages.has(langCode as LangCode) && percentage >= minimumAcceptanceRate) {
      return langCode as LangCode;
    }
  }

  return undefined;
}


export const getLanguageWithFranc = (text: string): LangCode | undefined => {
  const validLanguages = new Set(["spanish", "english"]);
  const languageDetectionResult = lngDetector.detect(text);

  for (const [langCode, percentage] of languageDetectionResult) {
    if (validLanguages.has(langCode)) {
      if (langCode === "spanish") {
        return "spa";
      }

      if (langCode === "english") {
        return "eng";
      }
    }
  }
}