import Tesseract from 'tesseract.js';

//Example image https://tesseract.projectnaptha.com/img/eng_bw.png

export const readIngredients = ()  => Tesseract.recognize(
  './test-data/Screenshot 2021-09-16 at 11.59.19.png',
  'eng',
//   { logger: m => console.log(m) }
).then(({ data: { text } }) => {
  return text;
})