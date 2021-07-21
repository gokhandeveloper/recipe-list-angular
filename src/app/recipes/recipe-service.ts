import {Recipe} from "./recipe.model";
import {EventEmitter, Injectable} from "@angular/core";
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list-service";

@Injectable()
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[]=[
    new Recipe("A test recipe",
      "description",
      "https://www.inspiredtaste.net/wp-content/uploads/2018/12/Sauteed-Zucchini-Recipe-1-1200.jpg",
      [new Ingredient('pasta',"1"),
        new Ingredient('bread',"3")]),

    new Recipe("A test recipe 2",
      "description 2",
      "https://www.inspiredtaste.net/wp-content/uploads/2018/12/Sauteed-Zucchini-Recipe-1-1200.jpg",
        [new Ingredient('macaroni',"4"),
        new Ingredient('bun',"5")]),

  ];

  constructor(private shoppingListService :ShoppingListService) {
  }
  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients:Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
