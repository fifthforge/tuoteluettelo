import { Component, OnInit } from '@angular/core';
import { PhoneServiceService as PhoneService } from '../phone-service.service'; 

import phones1 from '../../assets/phones/dell-streak-7.json';
import phones2 from '../../assets/phones/dell-venue.json';
import phones3 from '../../assets/phones/droid-2-global-by-motorola.json';
import phones4 from '../../assets/phones/droid-pro-by-motorola.json';
import phones5 from '../../assets/phones/lg-axis.json';
import phones6 from '../../assets/phones/motorola-atrix-4g.json';

import phones7 from '../../assets/phones/motorola-bravo-with-motoblur.json';
import phones8 from '../../assets/phones/motorola-charm-with-motoblur.json';
import phones9 from '../../assets/phones/motorola-defy-with-motoblur.json';
import phones10 from '../../assets/phones/motorola-xoom-with-wi-fi.json';
import phones11 from '../../assets/phones/motorola-xoom.json';
import phones12 from '../../assets/phones/nexus-s.json';
import phones13 from '../../assets/phones/samsung-galaxy-tab.json';
import phones14 from '../../assets/phones/samsung-gem.json';
import phones15 from '../../assets/phones/samsung-mesmerize-a-galaxy-s-phone.json';
import phones16 from '../../assets/phones/samsung-showcase-a-galaxy-s-phone.json';
import phones17 from '../../assets/phones/samsung-transform.json';
import phones18 from '../../assets/phones/sanyo-zio.json';
import phones19 from '../../assets/phones/t-mobile-g2.json';
import phones20 from '../../assets/phones/t-mobile-mytouch-4g.json';



@Component({
  selector: 'app-valittu',
  templateUrl: './valittu.component.html',
  styleUrls: ['./valittu.component.css']
})
export class ValittuComponent implements OnInit {
  phones = phones1;
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

  constructor(private data : PhoneService) { }

  chosenPhoneID : string;
  ngOnInit(): void {
    this.data.currentMessage.subscribe(message => this.chosenPhoneID = message); 
    if (this.chosenPhoneID == "dell-streak-7") this.phones = phones1;
    else if (this.chosenPhoneID == "dell-venue") this.phones = phones2;
    else if (this.chosenPhoneID == "droid-2-global-by-motorola") this.phones = phones3;
    else if (this.chosenPhoneID == "droid-pro-by-motorola") this.phones = phones4;
    else if (this.chosenPhoneID == "lg-axis") this.phones = phones5;
    else if (this.chosenPhoneID == "motorola-bravo-with-motoblur") this.phones = phones6;
    else if (this.chosenPhoneID == "motorola-charm-with-motoblur") this.phones = phones7;
    else if (this.chosenPhoneID == "dell-venue") this.phones = phones8;
    else if (this.chosenPhoneID == "motorola-defy-with-motoblur") this.phones = phones9;
    else if (this.chosenPhoneID == "motorola-xoom-with-wi-fi") this.phones = phones10;
    else if (this.chosenPhoneID == "motorola-xoom") this.phones = phones11;
    else if (this.chosenPhoneID == "nexus-s") this.phones = phones12;
    else if (this.chosenPhoneID == "samsung-galaxy-tab") this.phones = phones13;
    else if (this.chosenPhoneID == "samsung-gem") this.phones = phones14;
    else if (this.chosenPhoneID == "samsung-mesmerize-a-galaxy-s-phone") this.phones = phones15;
    else if (this.chosenPhoneID == "samsung-showcase-a-galaxy-s-phone") this.phones = phones16;
    else if (this.chosenPhoneID == "samsung-transform") this.phones = phones17;
    else if (this.chosenPhoneID == "sanyo-zio") this.phones = phones18;
    else if (this.chosenPhoneID == "t-mobile-g2") this.phones = phones19;
    else if (this.chosenPhoneID == "t-mobile-mytouch-4g") this.phones = phones20;

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
  }

  

}
