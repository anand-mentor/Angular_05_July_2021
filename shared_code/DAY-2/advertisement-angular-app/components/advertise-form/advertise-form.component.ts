import {Component, EventEmitter, Output} from '@angular/core'
import {Advertise} from '../../entities/advertise.entity';

@Component({
    selector: 'advertise-form',
    templateUrl: './advertise-form.component.html'
})
export class AdvertiseFormComponent {
    @Output()
    addAdvertiseEvent:EventEmitter<Advertise> = new EventEmitter();

    categories:Array<string> = ['Furniture', 'Hardware', 'Mobile'];

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