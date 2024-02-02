import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe("A test Recipe", 'This is simply a test', 'https://assets.epicurious.com/photos/6508a73d04e0d5ae4ef86c6e/16:9/w_5455,h_3068,c_limit/Dauphinoise-Potatoes_RECIPE.jpg'),
    new Recipe("A test Recipe", 'This is simply a test', 'https://assets.epicurious.com/photos/6508a73d04e0d5ae4ef86c6e/16:9/w_5455,h_3068,c_limit/Dauphinoise-Potatoes_RECIPE.jpg'),
  ];
}
