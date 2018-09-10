import { HttpClientService } from '../../framework-services/network-ser/httpclientservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-repertoryHomePage',
  templateUrl: './repertoryHomePage.component.html',
  styleUrls: ['./repertoryHomePage.component.scss'],
  providers: [HttpClientService]
})
export class RepertoryHomePageComponent implements OnInit {
  
   private picUrls: Array<string>;

  constructor() { 
        const array = new Array();
         array.push('./assets/images/slider/infor-1.jpg');
         array.push('./assets/images/slider/infor-2.jpg');
         array.push('./assets/images/slider/infor-3.jpg');
         array.push('./assets/images/slider/infor-4.jpg');
        this.picUrls = array;
  }

  ngOnInit() {
  }
  
  private golist(){
    //this.router.navigateByUrl('/detail#readMore');
  }

}
