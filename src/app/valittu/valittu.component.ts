import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-valittu',
  templateUrl: './valittu.component.html',
  styleUrls: ['./valittu.component.css']
})
export class ValittuComponent implements OnInit {
  phoneData: any = "";
  MainImage: string;
  LoadingCompleted: boolean = false;

  AvailabilityK = [];
  AvailabilityV = [];
  BatteryK = [];
  BatteryV = [];
  StorageMemoryK = [];
  StorageMemoryV = [];
  ConnectivityK = [];
  ConnectivityV = [];


  changeMainPicture($event) {
    this.MainImage = this.phoneData.images[$event.target.alt];
  }

  constructor(private router: Router, private HttpService: HttpClient) {
    document.documentElement.scrollTop = 0;

    this.HttpService.get(`assets/phones/${this.router.url.slice(10)}.json`).toPromise().then(data => {
      this.phoneData = data;
      this.MainImage = this.phoneData.images[0];

      this.AvailabilityK = Object.keys(this.phoneData.availability);
      this.AvailabilityV = Object.values(this.phoneData.availability);
      this.BatteryK = Object.keys(this.phoneData.battery);
      this.BatteryV = Object.values(this.phoneData.battery);
      this.StorageMemoryK = Object.keys(this.phoneData.storage);
      this.StorageMemoryV = Object.values(this.phoneData.storage);
      this.ConnectivityK = Object.keys(this.phoneData.connectivity);
      this.ConnectivityV = Object.values(this.phoneData.connectivity);
    })
    setTimeout(() => { 
      this.LoadingCompleted = true
    }, 50); // harmless delay to remove those presky errors
    ;
  }

  ngOnInit(): void {

  }
}
