import {Component, EventEmitter, OnInit, Output} from '@angular/core'
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import {Advertise} from '../../entities/advertise.entity';
import {AdvertiseService} from '../../services/adv-service/advertise.service';

@Component({
    selector: 'advertise-form',
    templateUrl: './advertise-form.component.html'
})
export class AdvertiseFormComponent{

    categories:Array<string> = ['Furniture', 'Hardware', 'Mobile'];

    @Output()
    addAdvertiseEvent:EventEmitter<Advertise> = new EventEmitter();
    constructor(private advertiseService:AdvertiseService) {
    }
    addTDFAdvertise(advForm:any) {
        let advertise:Advertise = new Advertise();
        advertise.title = advForm.title;
        advertise.name = advForm.name;
        advertise.category = advForm.category;
        advertise.description = advForm.description;
        this.advertiseService.addNewAdvertise(advertise).subscribe((data)=>{
            this.addAdvertiseEvent.emit(data);
            console.log('Event emitted: ', data);
        })
    }
}