import { Component, OnInit } from '@angular/core';
import {UserService} from "../user.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(public _userService: UserService) { 
    // this.getRecipe()
  }

  ngOnInit() {
    // this.getRecipe()
  }

  recipes = {
    attribution: null,
    totalMatchCount: null,
    facetCounts: null,
    matches: []

  }
  searchcuisine: String = ""
  searchcourse: String = ""
  searchphrase: String = ""
  searchholiday: String = ""
  include: String = ""
  exclude: String = ""
  allergen: String = ""
  searchdiet: String = ""

  cuisine = "&allowedCuisine[]=cuisine^cuisine-"
  course = "&allowedCourse[]=course^course-"
  holiday = "&allowedHoliday[]=holiday^holiday-"
  diet = "&allowedDiet[]="
  allergy = "392^Wheat-Free"
  exclude2 = "&excludedIngredient[]="
  allow =  "&allowedIngredient[]="

  cuisine2 = this.cuisine + this.searchcuisine
  course2 = this.course + this.searchcourse
  holiday2 = this.holiday + this.searchholiday
  diet2 = this.diet + this.searchdiet
  allergy2 = this.allergy + this.allergen 
  exclude3 = this.exclude2 + this.exclude
  include2 = this.allow + this.include

  // getRecipe(){
  //   this._userService.getRecipe()
  //   .then( info => { this.recipes = info })
  //   .catch( err => { console.log(err); })
  //   console.log(this.recipes)
  // }

  

  // search(){
  //   console.log("button works")
  //   this._userService.search(this.searchphrase, this.cuisine2, this.course2, this.holiday2, this.diet2, this.allergy2, this.exclude3, this.include2)
  //   .then( info => { this.recipes = info })
  //   .catch( err => { console.log(err); })
  //   console.log(this.recipes)
  // }

  search(){
    console.log("button works")
    this._userService.search(this.searchphrase)
    .then( info => { this.recipes = info })
    .catch( err => { console.log(err); })
    console.log(this.recipes)
  }



}
