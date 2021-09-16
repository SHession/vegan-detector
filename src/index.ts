import { readIngredients } from "./ocr"
import { isVegan } from "./vegan-checker";

const ingredients = readIngredients().then( (ingredients: string) => {
    const ingredientsAreVegan = isVegan(ingredients);

    const message = `The item is: ${ingredientsAreVegan.vegan ? "VEGAN" : "NOT VEGAN"}`;
    const veganEl = document.querySelector("#vegan")
    if (veganEl) veganEl.innerHTML = message;

    console.log(ingredientsAreVegan.offendingIngredients);
}).catch(e => console.warn(e));

