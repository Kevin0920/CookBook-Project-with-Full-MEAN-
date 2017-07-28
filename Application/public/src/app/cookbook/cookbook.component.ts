import { Component, OnInit } from '@angular/core';
import {UserService} from "../user.service";
import { Routes, RouterModule } from '@angular/router';

@Component({
  selector: 'app-cookbook',
  templateUrl: './cookbook.component.html',
  styleUrls: ['./cookbook.component.css']
})
export class CookbookComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
