import { Component, OnInit } from "@angular/core";
import { Recipe } from "./recipe.model";

@Component({
    selector: "app-recipes",
    templateUrl: "./recipes.component.html"
})

export class RecipesComponent implements OnInit {

    recipes: Recipe[] = [
        new Recipe("A Test Recipe", "This is simply a recipe", "https://i.pinimg.com/originals/dc/ae/62/dcae62410dc554f5fcfff458c8ebeaca.png"),
        new Recipe("A Test Recipe", "This is simply a recipe", "https://i.pinimg.com/originals/dc/ae/62/dcae62410dc554f5fcfff458c8ebeaca.png")
    ];

    constructor() {

    }

    ngOnInit() {
    }
}