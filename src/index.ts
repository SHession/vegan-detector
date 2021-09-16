import { readIngredients } from "./ocr"
import { isVegan } from "./vegan-checker";

const ingredients = readIngredients().then( (ingredients: string) => {
    const ingredientsAreVegan = isVegan(ingredients);

    console.log(`The item is: ${ingredientsAreVegan.vegan ? "VEGAN" : "NOT VEGAN"}`)
    console.log(ingredientsAreVegan.offendingIngredients);
}).catch(e => console.warn(e));

