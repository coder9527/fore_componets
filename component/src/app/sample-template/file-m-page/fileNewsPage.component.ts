import { Component } from '@angular/core';
import { HttpClientService } from '../../framework-services/network-ser/httpclientservice.service';

@Component({
  selector   : 'app-fileNewsPage',
  templateUrl: './fileNewsPage.component.html',
  styleUrls: ['./fileNewsPage.component.scss'],
  providers: [HttpClientService]
})
export class FileNewsPageComponent {

  url={
    fileAll:"http://localhost:8099/getFileInfoNewsList?type=all",
    fileIOS:"http://localhost:8099/getFileInfoNewsList?type=ios",
    fileAndroid:"http://localhost:8099/getFileInfoNewsList?type=android",
    fileWindows:"http://localhost:8099/getFileInfoNewsList?type=windows"
  }
  private httpClientService:HttpClientService;

  private NewAll:any=[];
  private NewIos:any=[];
  private NewAndroid:any=[];
  private NewWindows:any=[];


  constructor(httpClientService: HttpClientService) {
    this.httpClientService = httpClientService;
  }


  async ngOnInit() {}



  async tabEvent(index){
    let that = this;
    if(0==index){
      await this.httpClientService.httpAsyncGet(this.url.fileAll).then(reponse=> {
        reponse=JSON.parse(reponse);
        that.NewAll=reponse;
      })
    }else if(1==index){
      await this.httpClientService.httpAsyncGet(this.url.fileAndroid).then(reponse=> {
        reponse=JSON.parse(reponse);
        that.NewAndroid=reponse;
      })
    }else if(2==index){
      await this.httpClientService.httpAsyncGet(this.url.fileIOS).then(reponse=> {
        reponse=JSON.parse(reponse);
        that.NewIos=reponse;
      })
    }else if(3==index){
      await this.httpClientService.httpAsyncGet(this.url.fileWindows).then(reponse=> {
        reponse=JSON.parse(reponse);
        that.NewWindows=reponse;
      })
    }
    //console.log("sample index:"+index);
  }






}
