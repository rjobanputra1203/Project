import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipesDetailComponent } from './recipes/recipes-detail/recipes-detail.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { RecipeResolverService } from './recipes/services/recipe-resolver.service';
import { authcomponent } from './auth/auth.component';
import { authguard } from './auth/auth-guard';
import { DisableIfAuthGuard } from './auth/diasabled-authguard';

// const routes: Routes = [
//   { path: '', redirectTo: '/recipes', pathMatch: 'full' },
//   {
//     path: 'recipes', component: RecipesComponent, children: [
//       { path: '', component: RecipeStartComponent },
//       { path: 'new', component: RecipeEditComponent },
//       { path: ':id', component: RecipesDetailComponent, resolve: [RecipeResolverService] },
//       { path: ':id/edit', component: RecipeEditComponent, resolve: [RecipeResolverService] }
//     ], canActivate: [authguard]
//   },
//   { path: 'shopping-list', component: ShoppingListComponent },
//   { path: 'auth', component: authcomponent }
// ];

const routes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  {
    path: 'recipes', component: RecipesComponent, children: [
      { path: '', component: RecipeStartComponent },
      { path: 'new', component: RecipeEditComponent },
      { path: ':id', component: RecipesDetailComponent, resolve: [RecipeResolverService] },
      { path: ':id/edit', component: RecipeEditComponent, resolve: [RecipeResolverService] }
    ], canActivate: [authguard]
  },
  { path: 'shopping-list', component: ShoppingListComponent },
  { path: 'auth', component: authcomponent, canActivate: [DisableIfAuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
