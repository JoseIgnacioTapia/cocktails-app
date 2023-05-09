import { Cocktail } from '../features/cocktails/cocktailtSlice';

export function transformCocktail(cocktail: any): Cocktail {
  const {
    strIngredient1,
    strIngredient2,
    strIngredient3,
    strIngredient4,
    strIngredient5,
  } = cocktail;

  const ingredients = [
    strIngredient1,
    strIngredient2,
    strIngredient3,
    strIngredient4,
    strIngredient5,
  ];

  return {
    id: cocktail.idDrink,
    name: cocktail.strDrink,
    image: cocktail.strDrinkThumb,
    info: cocktail.strInstructions,
    glass: cocktail.strGlass,
    category: cocktail.strCategory,
    instructions: cocktail.strInstructions,
    ingredients,
  };
}
