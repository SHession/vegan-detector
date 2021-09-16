import { ingredients } from "./resources/ingredients.json"

const nonVeganIngredients = ingredients;

export const isVegan = (ingredients: string) => {
    let vegan = true;

    nonVeganIngredients.forEach(nonVeganIngredient => {
        vegan = vegan && ingredients.includes(nonVeganIngredient);
    });

    return vegan;
}