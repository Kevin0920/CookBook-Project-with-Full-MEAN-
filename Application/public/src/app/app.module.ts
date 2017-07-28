
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import {UserService} from "./user.service";
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { AppRoutingModule } from './routing.module';
import { RecipeComponent } from './recipe/recipe.component';
import { HomeComponent } from './home/home.component';

import { CookbookComponent } from './cookbook/cookbook.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    RecipeComponent,
    HomeComponent,
    CookbookComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
     HttpModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
