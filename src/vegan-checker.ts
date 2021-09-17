import { readIngredients } from "./ocr";
import ingredients from "./resources/ingredients.json"
const nonVeganIngredients = ingredients.ingredients;

export const checkIfVegan = (image: string) => {
    const ingredients = readIngredients(image).then( (ingredients: string) => {
        (document.querySelector("#ingredients") as HTMLElement).innerHTML = ingredients;

        const ingredientsAreVegan = isVegan(ingredients);
    
        const message = `The item is: ${ingredientsAreVegan.vegan ? "VEGAN" : "NOT VEGAN"}`;
        const veganEl = document.querySelector("#vegan")
        if (veganEl) veganEl.innerHTML = message;
    
        console.log(ingredientsAreVegan.offendingIngredients);
    }).catch(e => console.warn(e));
    
}

const isVegan = (ingredients: string) => {
    const lowerIngredients = ingredients.toLowerCase()
    let vegan = true;
    let offendingIngredients: string[] = [];

    nonVeganIngredients.forEach(nonVeganIngredient => {
        const foundNotVegan = lowerIngredients.includes(nonVeganIngredient.toLowerCase());

        if(foundNotVegan){
            offendingIngredients.push(nonVeganIngredient);
        }

        vegan = vegan && !foundNotVegan;
    });

    return {vegan, offendingIngredients};
}