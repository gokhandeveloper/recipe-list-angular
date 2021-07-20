import {Recipe} from "./recipe.model";

export class RecipeService {
  private recipes: Recipe[]=[
    new Recipe("A test recipe",
      "description",
      "https://www.inspiredtaste.net/wp-content/uploads/2018/12/Sauteed-Zucchini-Recipe-1-1200.jpg"),
    new Recipe("A test recipe 2",
      "description 2",
      "https://www.inspiredtaste.net/wp-content/uploads/2018/12/Sauteed-Zucchini-Recipe-1-1200.jpg")

  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
