import { assert } from "chai";
import { getLanguage } from "../language-detection";

describe('getLanguage', () => {
  it('should detect spanish language', () => {
    const text = 'Hola, ¿cómo estás?';
    const result = getLanguage(text, "languagedetect");
    assert.equal(result, 'spa');
  });

  it('should detect english language', () => {
    const text = 'Hello, how are you?';
    const result = getLanguage(text, "languagedetect");
    assert.equal(result, 'eng');
  });
});