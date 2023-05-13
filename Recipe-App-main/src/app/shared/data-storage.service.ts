import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RecipeService } from '../recipes/services/recipe.service';
import { Recipe } from '../recipes/recipes.model';
import { map, tap } from 'rxjs';
import { ActivatedRoute, Params } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor(private http: HttpClient, private recipeService: RecipeService, private route: ActivatedRoute) { }

  id:number;

  storeRecipe() {
    const recipes = this.recipeService.getRecipes();
    //   this.route.params.subscribe((param: Params)=>{
    //     this.id = +param['id']
    //   })
    // if (this.id){
    //   this.http.put(
    //     'http://localhost:3000/recipes',
    //     recipes[0]
    //   ).subscribe((res) => {
    //     console.log(res)
    //   })
    // }
    // else{
    this.http.post(
      'http://localhost:3000/recipes',
      recipes[0]
    ).subscribe((res) => {
      console.log(res)
    })
  // }
  }

  fetchRecipe() {
    return this.http.get<Recipe[]>(
      'http://localhost:3000/recipes'
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
