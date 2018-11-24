import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-yogaHome',
  templateUrl: './yogaHome.component.html',
  styleUrls: ['./yogaHome.component.css']
})
export class YogaHomeComponent implements OnInit {

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
