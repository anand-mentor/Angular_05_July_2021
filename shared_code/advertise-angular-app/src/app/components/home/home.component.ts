import {Component} from '@angular/core';
import {Advertise} from '../../entities/advertise.entity';
import { AdvertiseService } from '../../services/adv-service/advertise.service';

@Component({
    selector: 'home',
    templateUrl: './home.component.html'
  })
export class HomeComponent {
    advertises:Array<Advertise> = [];

    constructor(private advertiseService: AdvertiseService) {
      advertiseService.getAllAdvertises().subscribe((data)=>{
        this.advertises = data;
      });
    }
    addAdvertise(advertise:Advertise) {
      this.advertises.push(advertise);
      console.log('Event received: ', this.advertises);
    }
    deleteAdvertise(advId:string) {
      this.advertises.forEach((advertise)=>{
        if(advertise.id === advId) {
          let index = this.advertises.indexOf(advertise);
          this.advertises.splice(index, 1);
        }
      })
    }
  
}