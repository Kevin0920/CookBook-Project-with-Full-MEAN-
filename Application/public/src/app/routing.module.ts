import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import {UserService} from "./user.service";
import { RecipeComponent } from './recipe/recipe.component';
import { HomeComponent } from './home/home.component';
import { CookbookComponent } from './cookbook/cookbook.component';


const routes: Routes = [
  {path: "", pathMatch: 'full', component: HomeComponent},
  {path: "search", component: SearchComponent},
  {path: ":id", component: RecipeComponent},
  {path: "home", component: HomeComponent},
  {path: "cookbook", component: CookbookComponent},
  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }