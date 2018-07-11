import { HttpClientService } from '../../framework-services/network-ser/httpclientservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productGridPage',
  templateUrl: './productGridPage.component.html',
  styleUrls: ['./productGridPage.component.scss'],
  providers: [HttpClientService]
})
export class ProductGridPageComponent implements OnInit {

  private httpClientService:HttpClientService;
  //
  constructor(httpClientService: HttpClientService) { 
    this.httpClientService=httpClientService;
  
  }

   ngOnInit() {

    /// assets/jsons/test.json

    let temp =  this.httpClientService.httpAsyncGet("/assets/jsons/test.json").then(reponse=>{
      alert("res2:"+JSON.stringify(reponse));
    }).catch(error=>{
      alert("err2:"+JSON.stringify(error));
    });
    
    //alert(JSON.stringify(temp));
  }

}
