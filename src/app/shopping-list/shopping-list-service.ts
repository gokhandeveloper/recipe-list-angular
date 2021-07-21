import {Ingredient} from "../shared/ingredient.model";
import {EventEmitter} from "@angular/core";

export class ShoppingListService {

   ingredientAddedEvent = new EventEmitter<Ingredient[]>();

   private ingredients = [new Ingredient("pepper","15gram"),
    new Ingredient("salt","40gram")]

  ingredientAdded(event: Event) {
     this.ingredients.push()

  }

  getIngredients() {
     return this.ingredients.slice()
  }
  addIngredient(ingredient:Ingredient) {
     this.ingredientAddedEvent.emit(this.ingredients.slice());
    this.ingredients.push(ingredient);
  }

  pushIngredients(event: Event) {

  }

  addIngredients(ingredients: Ingredient[]) {
    // for(let ingredient of ingredients) {
    //   this.addIngredient(ingredient);
    // }
    this.ingredients.push(...ingredients);
    this.ingredientAddedEvent.emit(this.ingredients.slice());
  }
}
