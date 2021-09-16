import Tesseract from 'tesseract.js';

//Example image https://tesseract.projectnaptha.com/img/eng_bw.png

export const readIngredients = (image: string)  => Tesseract.recognize(
  image,
  'eng',
  { logger: m => console.log(m) }
).then(({ data: { text } }) => {
  console.log(text);
  return text;
})