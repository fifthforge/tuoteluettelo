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
  alphaPhones : any;

  searchTerm : string = "";
  sorts : string[] = ["newest first" ,"alphabetical"]

  faCoffee = faCoffee;

  selectedValue : any;
  
  constructor() {
    console.log(phones[0]);
    
  }

  ngOnInit(): void {
  }

  selectedSort: string = '';

  //event handler for the select element's change event
  selectChangeHandler (event: any) {
    //update the ui
    this.selectedSort = event.target.value;
    console.log(this.selectedSort)
    if (this.selectedSort == "alphabetical") {
      this.phones.sort((a,b) => a.name > b.name ? 1 : -1)
    } 
    if (this.selectedSort == "newest first") {
      this.phones.sort((a,b) => a.age-b.age)
    }
  }
  

}
