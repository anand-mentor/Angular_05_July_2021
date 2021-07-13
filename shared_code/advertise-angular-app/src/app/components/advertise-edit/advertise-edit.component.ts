import {Component, EventEmitter, OnInit, Output} from '@angular/core'
import {Advertise} from '../../entities/advertise.entity';
import {AdvertiseService} from '../../services/adv-service/advertise.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'advertise-edit',
    templateUrl: './advertise-edit.component.html'
})
export class EditAdvertiseComponent implements OnInit {

    categories:Array<string> = ['Furniture', 'Hardware', 'Mobile'];
    advertise:Advertise = new Advertise();

    @Output()
    updateAdvertiseEvent:EventEmitter<Advertise> = new EventEmitter();
    constructor(private advertiseService:AdvertiseService, private router: Router, private activatedRoute: ActivatedRoute) {
    }
    ngOnInit(): void {
        let advId = this.activatedRoute.snapshot.params['advId'];
        this.advertiseService.getAdvertiseById(advId).subscribe((data)=>{
            this.advertise = data;
            console.log('edit advertise ', this.advertise);
        })
    }

    updateAdvertise(advForm:any) {
        console.log('advForm - ' , advForm);
        let advertise:Advertise = new Advertise();
        advertise.title = advForm.title;
        advertise.name = advForm.name;
        advertise.category = advForm.category;
        advertise.description = advForm.description;
        
        this.advertiseService.updateAdvertise(advForm.id, advertise).subscribe((data)=>{
            //this.updateAdvertiseEvent.emit(data);
            //console.log('Event emitted: ', data);
            this.router.navigate(['/']);
        })
    }
    cancelUpdate() {
        this.router.navigate(['/']);
    }
}