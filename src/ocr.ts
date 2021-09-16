import Tesseract from 'tesseract.js';

//Example image https://tesseract.projectnaptha.com/img/eng_bw.png

export const readIngredients = ()  => Tesseract.recognize(
  './test-data/image2_crop.png',
  'eng',
//   { logger: m => console.log(m) }
).then(({ data: { text } }) => {
  console.log(text);
})