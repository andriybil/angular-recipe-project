import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  ingredietsChanged = new Subject<Ingredient[]>();

  ingredients: Ingredient[] = [
    new Ingredient("Apples", 5),
    new Ingredient("Tomatoes", 10)
  ];

  constructor() { }

  getIngredients() {
    return this.ingredients.slice();
  }

  setIngredient(ingredient: Ingredient) {
    this.ingredients.push(new Ingredient(ingredient.name, ingredient.amount) );
    this.ingredietsChanged.next(this.ingredients.slice());
  }

  setIngredients( ingredients: Ingredient[]) {
    // for (let ingredient of ingredients) {
    //   this.setIngredient(ingredient);
    // }
    this.ingredients.push(...ingredients);
    this.ingredietsChanged.next(this.ingredients.slice());
  }
}
