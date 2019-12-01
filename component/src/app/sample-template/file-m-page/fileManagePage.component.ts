import { Component } from '@angular/core';
import { HttpClientService } from '../../framework-services/network-ser/httpclientservice.service';

@Component({
  selector   : 'app-fileManagePage',
  templateUrl: './fileManagePage.component.html',
  styleUrls: ['./fileManagePage.component.scss'],
  providers: [HttpClientService]
})
export class FileManagePageComponent {


  private httpClientService: HttpClientService;

  private picUrls: Array<string>;

  private sildeOptions;

  private fileInfo={};


  constructor(httpClientService: HttpClientService) {
    this.httpClientService = httpClientService;
    const array = new Array();
    array.push('/assets/images/slider/infor-1.jpg');
    array.push('/assets/images/slider/infor-2.jpg');
    array.push('/assets/images/slider/infor-3.jpg');
    array.push('/assets/images/slider/infor-4.jpg');
    this.picUrls = array;

    //
    this.sildeOptions = {};

    this.sildeOptions['anType'] = "flip";

    this.sildeOptions['parentNodeCls'] = "img_scroll";

    //init data
    let that = this;

    this.httpClientService.httpAsyncGet("http://localhost:8099/getFileInfo?id=3879439432989").then(reponse=> {
      console.log("res2:" + JSON.stringify(reponse));

      reponse = JSON.parse(reponse);
      that.fileInfo = reponse;

    })

  }

  public downloadFile(event: any){

    let that=this;

    location.href="http://127.0.0.1:8099/downloadFDFS?filePath="+that.fileInfo["downUrl"];

    }


  public tabEvent(){

  }
}
