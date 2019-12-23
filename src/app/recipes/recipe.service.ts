import { Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable({
  providedIn: "root"
})
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe(
      0,
      "Tasty Vegan Schnitsel",
      "simple recipe",
      "https://www.hummusapien.com/wp-content/uploads/2019/04/Vegan-Broccoli-Salad-cashew-dressing.jpg",
      [
        new Ingredient("Broccoli", 3), 
        new Ingredient("French Fries", 20)
      ]
    ),
    new Recipe(
      1,
      "Vegan Burger",
      "simple recipe",
      "https://elavegan.com/wp-content/uploads/2019/09/Vegan-burger-with-Awesome-burger-patty-veggies-and-homemade-cheese.jpg",
      [
        new Ingredient("burger buns", 3), 
        new Ingredient("tomatoes", 2)
      ]
    ),
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number){
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.setIngredients(ingredients);
  }
}
