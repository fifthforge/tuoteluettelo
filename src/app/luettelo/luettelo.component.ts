import { Component, OnInit } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

import phones from '../../assets/phones/phones.json';

@Component({
  selector: 'app-luettelo',
  templateUrl: './luettelo.component.html',
  styleUrls: ['./luettelo.component.css']
})
export class LuetteloComponent implements OnInit {
  title = 'json-file-read-angular';
  phones = phones;
  cheese = "yes"

  searchTerm : string = "";

  faCoffee = faCoffee;

  constructor() {
    console.log(phones);
  }

  ngOnInit(): void {
  }

}
