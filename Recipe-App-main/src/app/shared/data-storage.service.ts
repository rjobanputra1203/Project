import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RecipeService } from '../recipes/services/recipe.service';
import { Recipe } from '../recipes/recipes.model';
import { map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor(private http: HttpClient, private recipeService: RecipeService) { }

  storeRecipe() {
    const recipes = this.recipeService.getRecipes();
    this.http.post(
      'http://localhost:3000/recipes',
      recipes[0]
    ).subscribe((res) => {
      console.log(res)
    })
  }

  fetchRecipe() {
    return this.http.get<Recipe[]>(
      'https://project-79a53-default-rtdb.firebaseio.com/recipes.json'
    ).pipe(
      map(recipes => {
        return recipes.map(recipe => {
          return { ...recipe, ingredients: recipe.ingredients ? recipe.ingredients : [] }
        })
      }),
      tap((recipes) => {
        this.recipeService.setRecipe(recipes);

      })
    )
  }
}
