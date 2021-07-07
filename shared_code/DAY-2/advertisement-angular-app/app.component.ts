import { Component } from '@angular/core';
import {Advertise} from './entities/advertise.entity';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'advertise-angular-app';
  advertises:Array<Advertise> = [
    {title: 'Swift car for Sale', name: 'Tom Cruze', category: 'CAR', description: 'Car available for Sale'},
    {title: 'House on Rent', name: 'Anand Kulkarni', category: 'Real Estate', description: '2 BHK apartment available on rent'}
  ];

  addAdvertise(advertise:Advertise) {
    this.advertises.push(advertise);
    console.log('Event received: ', this.advertises);
  }
}
