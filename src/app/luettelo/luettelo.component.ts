import { Component, OnInit } from '@angular/core';
import phones from '../../assets/phones/phones.json';

@Component({
  selector: 'app-luettelo',
  templateUrl: './luettelo.component.html',
  styleUrls: ['./luettelo.component.css']
})
export class LuetteloComponent implements OnInit {
  phones = phones;

  searchTerm: string = "";
  sorts: string[] = ["newest first", "alphabetical"]

  constructor() {
  }
  ngOnInit(): void {}

  selectedSort: string = '';

 selectChangeHandler(event: any) {

    this.selectedSort = event.target.value;

    if (this.selectedSort == "alphabetical") {
      this.phones.sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1)
    }
    if (this.selectedSort == "newest first") {
      this.phones.sort((a, b) => a.age - b.age)
    }
  } 
}
