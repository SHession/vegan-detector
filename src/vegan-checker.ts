// import { ingredients } from "./resources/ingredients.json"
const nonVeganIngredients = [
    "Milk",
    "Egg",
    "Casein",
    "Lactose",
    "Whey",
    "Elastin",
    "Keratin",
    "Gelatine",
    "Gelatin",
    "Aspic",
    "Lard",
    "Tallow",
    "Shellac",
    "Royal Jelly",
    "Honey",
    "Propolis",
    "Vitamin D3",
    "Albumen",
    "Albumin",
    "Isinglass",
    "Cod liver oil",
    "Pepsin",
    "E120",
    "E441",
    "E542",
    "E901",
    "E904",
    "E910",
    "E920",
    "E921",
    "E913",
    "E966"
];

export const isVegan = (ingredients: string) => {
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