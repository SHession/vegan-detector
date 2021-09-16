import { readIngredients } from "./src/ocr"
import { isVegan } from "./src/vegan-checker";

const ingredients = readIngredients();

const ingredientsAreVegan = isVegan(ingredients);

console.log(`The item is: ${isVegan ? "VEGAN" : "NOT VEGAN"}`)