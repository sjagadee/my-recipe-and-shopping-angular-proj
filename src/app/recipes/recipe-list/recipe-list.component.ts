import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() recipePassed = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe("A Test Recipe", "This is simply a recipe", "https://i.pinimg.com/originals/dc/ae/62/dcae62410dc554f5fcfff458c8ebeaca.png"),
    new Recipe("Another Test Recipe", "This is simply a recipe", "https://i.pinimg.com/originals/dc/ae/62/dcae62410dc554f5fcfff458c8ebeaca.png")
  ];

  constructor() { }

  ngOnInit() {
  }

  sendRecipe(recipeEl: Recipe) {
    this.recipePassed.emit(recipeEl);
  }

}
