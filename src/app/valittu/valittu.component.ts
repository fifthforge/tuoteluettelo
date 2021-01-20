import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http'

import phones1 from '../../assets/phones/dell-streak-7.json';

@Component({
  selector: 'app-valittu',
  templateUrl: './valittu.component.html',
  styleUrls: ['./valittu.component.css']
})
export class ValittuComponent implements OnInit {
  phones = phones1;
  dataArray : string[];
  description = this.phones.description;
  name = this.phones.name;
  Images = this.phones.images;
  MainImage = this.phones.images[0];
  AvailabilityK = Object.keys(this.phones.availability);
  AvailabilityV = Object.values(this.phones.availability);
  BatteryK = Object.keys(this.phones.battery);
  BatteryV = Object.values(this.phones.battery);
  StorageMemoryK = Object.keys(this.phones.storage);
  StorageMemoryV = Object.values(this.phones.storage);
  ConnectivityK = Object.keys(this.phones.connectivity);
  ConnectivityV = Object.values(this.phones.connectivity);

  changeMainPicture($event) {
    this.MainImage = this.phones.images[$event.target.alt];
    }

  constructor(private router: Router, private HttpService: HttpClient) {
    document.documentElement.scrollTop = 0;
    this.HttpService.get(`assets/phones/${this.router.url.slice(10)}.json`).toPromise().then(data => {
      
      this.phones = data

      this.description = this.phones.description;
      this.name = this.phones.name;
      this.Images = this.phones.images;
      this.MainImage = this.phones.images[0];
      this.AvailabilityK = Object.keys(this.phones.availability);
      this.AvailabilityV = Object.values(this.phones.availability);
      this.BatteryK = Object.keys(this.phones.battery);
      this.BatteryV = Object.values(this.phones.battery);
      this.StorageMemoryK = Object.keys(this.phones.storage);
      this.StorageMemoryV = Object.values(this.phones.storage);
      this.ConnectivityK = Object.keys(this.phones.connectivity);
      this.ConnectivityV = Object.values(this.phones.connectivity);
    })
    
  }

  ngOnInit(): void {} 

}
