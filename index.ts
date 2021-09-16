import { readIngredients } from "./src/ocr.js"
import { isVegan } from "./src/vegan-checker.js";

const ingredients = readIngredients().then( (ingredients: string) => {
    const ingredientsAreVegan = isVegan(ingredients);

    console.log(`The item is: ${ingredientsAreVegan.vegan ? "VEGAN" : "NOT VEGAN"}`)
    console.log(ingredientsAreVegan.offendingIngredients);
});

