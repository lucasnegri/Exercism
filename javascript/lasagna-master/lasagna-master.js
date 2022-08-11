/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */
export function cookingStatus(timeLeft) {
    if(timeLeft === 0) { return 'Lasagna is done.'}
    else if(timeLeft > 0) { return 'Not done, please wait.' }
    else { return 'You forgot to set the timer.'}
}

export function preparationTime(layers, minutesPerLayer = 2){
   return layers.length * minutesPerLayer;
}

export function quantities(layers){
    const ingredients = {noodles: 0, sauce: 0};
    for(let i=0; i<layers.length; i++){
        if (layers[i] === 'sauce') {
        ingredients.sauce = ingredients.sauce + 0.2
        }else if (layers[i] === 'noodles'){
        ingredients.noodles = ingredients.noodles + 50
        }   
    }
    return ingredients
}

export function addSecretIngredient(friendsList, myList){
    myList.push(friendsList[friendsList.length - 1]);
}

export function scaleRecipe(recipe, portions){
    const portionsPerRecipe = 2;
    let scaleFactor = portions / portionsPerRecipe;
    let scaledRecipe = {};
    for (let ingredient in recipe){
        scaledRecipe[ingredient] = recipe[ingredient] * scaleFactor;
    } 
    return scaledRecipe;
}