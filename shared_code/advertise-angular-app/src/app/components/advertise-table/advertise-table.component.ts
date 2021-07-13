import {Component, Input, EventEmitter, Output} from '@angular/core';
import { AdvertiseService } from '../../services/adv-service/advertise.service';
import {Advertise} from '../../entities/advertise.entity';
import {Router} from '@angular/router';

@Component({
    selector: 'adv-table',
    templateUrl: 'advertise-table.component.html'
})
export class AdvertiseTableComponent {
    @Input()
    public advertises:Array<Advertise> = [];
    @Output()
    deleteAdvertiseEvent:EventEmitter<string> = new EventEmitter();

    constructor(private advertiseService: AdvertiseService, private router: Router) {

    }
    editAdvertise(advId:string) {
        console.log('editAdvertise: ', advId);
        this.router.navigate(['/edit', advId]);
    }
    deleteAdvertise(advId:string) {
        console.log('deleteAdv: ', advId);
        this.advertiseService.deleteAdvertise(advId).subscribe((data)=>{
            console.log('delete data ', data);
            if(data === true) {
                this.deleteAdvertiseEvent.emit(advId);
                console.log('Event emitted: ', advId);
            }
        })
    }
}