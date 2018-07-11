import { Component } from '@angular/core';

@Component({
    selector   : 'app-homePage',
    templateUrl: './homePage.component.html',
    styleUrls: ['./homePage.component.scss']
})
export class HomePageComponent {

   private picUrls: Array<string>;

    constructor() {
        const array = new Array();
         array.push('/assets/images/slider/infor-1.jpg');
         array.push('/assets/images/slider/infor-2.jpg');
         array.push('/assets/images/slider/infor-3.jpg');
         array.push('/assets/images/slider/infor-4.jpg');
        this.picUrls = array;
    }
}
