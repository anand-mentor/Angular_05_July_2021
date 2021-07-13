import {Component, EventEmitter, Output} from '@angular/core'
import {Advertise} from '../../entities/advertise.entity';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
    selector: 'advertise-mdf-form',
    templateUrl: './advertise-mdf-form.component.html'
})
export class AdvertiseMDFFormComponent {
    @Output()
    addAdvertiseEvent:EventEmitter<Advertise> = new EventEmitter();
    categories:Array<string> = ['Furniture', 'Hardware', 'Mobile'];
    advForm:FormGroup = new FormGroup({});
    constructor(formBuilder: FormBuilder) {
        this.advForm = formBuilder.group({ //Creating the form structure
            title: [],
            name: [null, Validators.required, Validators.minLength(3)],
            category: [],
            description: []
        });
    }
/*
    advForm:FormGroup = new FormGroup({ //Creating the form structure
        title: new FormControl(),
        name: new FormControl(null, [Validators.required, Validators.minLength(3)]),
        category: new FormControl(),
        description: new FormControl()
    });
*/
    addMDFAdvertise() {

    }
    addAdvertise(title:string, name:string, category:string, description:string) {
        let advertise:Advertise = new Advertise();
        advertise.title = title;
        advertise.name = name;
        advertise.category = category;
        advertise.description = description;
        console.log('Event emitted: ', advertise);
        this.addAdvertiseEvent.emit(advertise);
    }
}