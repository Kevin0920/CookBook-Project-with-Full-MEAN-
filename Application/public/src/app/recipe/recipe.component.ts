import { Component, OnInit } from '@angular/core';
import {UserService} from "../user.service";
import { AppRoutingModule } from '.././routing.module'; 
import { Router } from "@angular/router"
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';
import { Pipe, PipeTransform } from '@angular/core';
@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
  

  constructor(public _userService: UserService, public _router: Router, private _route: ActivatedRoute, private sanitizer: DomSanitizer) { 
    this._route.params.subscribe((param)=>{
      console.log("TaskDetailsComponent loaded and url id given is: ", param.id);
      this.id = param.id
      
    })
    }
  

  ngOnInit() {
    this.getRecipe()
    console.log(this.recipe)
    this.transform(this.recipe.source.sourceRecipeUrl) 
  }
    transform(url) {
      return this.sanitizer.bypassSecurityTrustResourceUrl(url);
      }
id = null 
recipe = {
    attribution: "",
    ingredientLines: "",
    nutritionEstimates: "",
    images: [
        {
            hostedLargeUrl: "",
            hostedSmallUrl: ""
        }],
    name: "",
    yield: "",
    totalTime: "",
    attributes: "",
    totalTimeInSeconds: "",
    rating: "",
    numberOfServings: "",
    source: {
        "sourceRecipeUrl": "http://allrecipes.com/Recipe/hot-turkey-salad-sandwiches/detail.aspx",
        "sourceSiteUrl": "http://www.allrecipes.com",
        "sourceDisplayName": "Al"
    },
    id: ""
  }
  address = this.recipe.source.sourceRecipeUrl
  getRecipe(){
    this._userService.getRecipe(this.id)
    .then( info => { this.recipe = info })
    .catch( err => { console.log(err); })
    console.log(this.recipe)
  }
  message = ""
  add(){
    this._userService.add(this.id)
    
    console.log(this.recipe)
  }

}
