import { readIngredients } from "./ocr"
import { isVegan } from "./vegan-checker";

const filePicker = (document.querySelector("#photo-picker") as HTMLInputElement);
const pic = (document.querySelector("#ingredients-photo") as HTMLImageElement);

filePicker.onchange =  () => {
    var fileList = filePicker.files;
    const image = window.URL.createObjectURL(fileList![0]);
    pic.src = image;
    checkIfVegan(image)
 }

const checkIfVegan = (image: string) => {
    const ingredients = readIngredients(image).then( (ingredients: string) => {
        (document.querySelector("#ingredients") as HTMLElement).innerHTML = ingredients;

        const ingredientsAreVegan = isVegan(ingredients);
    
        const message = `The item is: ${ingredientsAreVegan.vegan ? "VEGAN" : "NOT VEGAN"}`;
        const veganEl = document.querySelector("#vegan")
        if (veganEl) veganEl.innerHTML = message;
    
        console.log(ingredientsAreVegan.offendingIngredients);
    }).catch(e => console.warn(e));
    
}