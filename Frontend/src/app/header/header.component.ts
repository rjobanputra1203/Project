import { Component } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { authservice } from '../auth/auth.servises';
import { Router } from '@angular/router';
import { RecipeService } from '../recipes/services/recipe.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private dataStorageService: DataStorageService, private recipeService: RecipeService,  private authservice : authservice , private router: Router){}

  onSaveData(){
    this.dataStorageService.storeRecipe();
  }

  onFetchData(){
    this.dataStorageService.fetchRecipe().subscribe();
  }
  logout() {
    this.recipeService.setRecipe([])
    this.authservice.logout();
    this.router.navigate(['auth']);
  }

}
