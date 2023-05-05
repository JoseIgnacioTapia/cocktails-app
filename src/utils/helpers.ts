import { Cocktail } from '../features/cocktails/cocktailtSlice';

export function transformCocktail(cocktail: any): Cocktail {
  return {
    id: cocktail.idDrink,
    name: cocktail.strDrink,
    image: cocktail.strDrinkThumb,
    info: cocktail.strInstructions,
    glass: cocktail.strGlass,
  };
}
