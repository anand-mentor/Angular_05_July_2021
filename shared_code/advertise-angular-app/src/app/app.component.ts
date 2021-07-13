import { Component } from '@angular/core';
import {Advertise} from './entities/advertise.entity';
import { AdvertiseService } from './services/adv-service/advertise.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'advertise-angular-app';
}