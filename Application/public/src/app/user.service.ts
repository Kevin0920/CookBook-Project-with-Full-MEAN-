import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import 'rxjs/Rx';
@Injectable()
export class UserService {

  constructor(public _http: Http) { 

  }
  cookbook=[]

  getUsers(){
    console.log("USER SERVICE METHOD GET USERS");
    this._http.get("http://localhost:8000/users")
  }
  // id = "French-Onion-Soup-The-Pioneer-Woman-Cooks-_-Ree-Drummond-41364"
  getRecipe(info) {
    console.log("in get recipe")
     return this._http.get("http://api.yummly.com/v1/api/recipe/" + info + "?_app_id=baaa4fb0&_app_key=e291c930bf66e0de996e3ca20755ef9a").map(data=>data.json()).toPromise()
  }
  searchfield = null
  // search(info1, info2, info3, info4, info5, info6, info7, info8){
  //   this.searchfield = info1
  //   console.log(this.searchfield)
  //   return this._http.get("http://api.yummly.com/v1/api/recipes?_app_id=baaa4fb0&_app_key=e291c930bf66e0de996e3ca20755ef9a&q=" + info1 + "&requirePictures=true" + info2 + info3 + info4 + info5 + info6 + info7 + info8).map(data=>data.json()).toPromise()
  // }
  search(info1){
    this.searchfield = info1
    console.log(this.searchfield)
    return this._http.get("http://api.yummly.com/v1/api/recipes?_app_id=baaa4fb0&_app_key=e291c930bf66e0de996e3ca20755ef9a&q=" + info1 + "&requirePictures=true").map(data=>data.json()).toPromise()
  }
  add(id){
    this.cookbook.push(id)
    // return(data=>data.json()).toPromise()
  }

}
