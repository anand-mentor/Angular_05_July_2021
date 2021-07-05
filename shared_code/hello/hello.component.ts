import {Component} from '@angular/core';

@Component({
    selector: 'hello',
    templateUrl: 'hello.component.html',
    styleUrls: ['hello.component.css']
})
export class HelloComponent {
    title:string = 'Zensar';
    imgLink:string = 'https://angular.io/assets/images/logos/angular/logo-nav@2x.png';

    handleOkAction(msg: string) {
        console.log('handleOkAction called - ', msg);
        this.title = msg;
    }
}
