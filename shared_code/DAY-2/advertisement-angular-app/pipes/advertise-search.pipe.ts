import {Pipe, PipeTransform} from '@angular/core';
import {Advertise} from '../entities/advertise.entity';

@Pipe({
    name: 'searchadv'
})
export class SearchAdvertisePipe implements PipeTransform {
    transform(advertises:Array<Advertise>, searchText:string):Array<Advertise> {
        let filteredAdvertises:Array<Advertise> = [];
        if(searchText === '') {
            return advertises;
        }
        for(let advertise of advertises) {
            if(advertise.title.includes(searchText) || advertise.name.includes(searchText)
                || advertise.category.includes(searchText) || advertise.description.includes(searchText)) {
                    filteredAdvertises.push(advertise);
                }
        }
        return filteredAdvertises;
    }
}