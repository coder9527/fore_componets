import { Component } from '@angular/core';
import { HttpClientService } from '../../framework-services/network-ser/httpclientservice.service';

@Component({
  selector   : 'app-fileCatePage',
  templateUrl: './fileCatePage.component.html',
  styleUrls: ['./fileCatePage.component.scss'],
  providers: [HttpClientService]
})
export class FileCatePageComponent {

  private httpClientService:HttpClientService

  constructor(httpClientService: HttpClientService) {
    this.httpClientService = httpClientService;
  }

  private cates:any=[]

  url={
    cate:"http://localhost:8099/getFileCatesList"
  }

  async ngOnInit(){

    let that=this;

    await this.httpClientService.httpAsyncGet(this.url.cate).then(reponse=>{


      reponse=JSON.parse(reponse);
      // localStorage.setItem("data",reponse);
      for(let i in reponse){
        if(0==reponse[i].parentId){
          reponse[i]["children"]=[]
          that.cates.push(reponse[i])
        }else{
          for(let j in that.cates){
            if(that.cates[j].cateNo==reponse[i].parentId){
              that.cates[j]["children"].push(reponse[i])
            }
          }
        }
      }
      console.log(JSON.stringify(that.cates))

    }).catch(error=>{
      //alert("err2:"+JSON.stringify(error));
      console.log("error"+error.message);

    });
  }



}
