import { Component, OnInit } from '@angular/core';
import {Ingredient} from "../shared/ingredient.model";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients:Ingredient[]=[];
  constructor() {
    this.ingredients = [new Ingredient("pepper","15gram"),
      new Ingredient("salt","40gram")]


  }

  ngOnInit(): void {
  }

  onIngredientAdded($event: Ingredient) {
    this.ingredients.push($event)

  }
}
