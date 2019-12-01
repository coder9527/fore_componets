import { Component,ViewChild,ElementRef } from '@angular/core';
import { HttpClientService } from '../../framework-services/network-ser/httpclientservice.service';

@Component({
  selector   : 'app-fileRanklistPage',
  templateUrl: './fileRanklistPage.component.html',
  styleUrls: ['./fileRanklistPage.component.scss'],
  providers: [HttpClientService]
})
export class FileRanklistPageComponent {


  url={
    cate:"http://localhost:8099/getFileCatesList",
    hot:"",
    downList:"http://localhost:8099/getFileInfoRank?type=all"
  }
  private httpClientService:HttpClientService

  private cates:any=[]

  private childCate:any=[]

  constructor(httpClientService: HttpClientService) {
    this.httpClientService = httpClientService;
  }

  async ngOnInit(){

    let that=this;
    await this.httpClientService.httpAsyncGet(this.url.cate).then(reponse=>{
      reponse=JSON.parse(reponse);
      console.log(JSON.stringify(reponse))
     // this.newsList=reponse;
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

      that.childCate=that.cates[0]["children"]

    }).catch(error=>{

    });

  }

  public tabEvent(){

  }

  @ViewChild('cateline') catesClick: ElementRef;

  @ViewChild('childcateline') childcatesClick: ElementRef;


  private cateClick(event: any,index:any){

    const cateItems = this.catesClick.nativeElement.children;
    console.log("-aaaa--->>>:"+index)

    for(let i=0;i<cateItems.length;i++){
      cateItems[i].classList.remove("selected");
      if (index == i ) {
        cateItems[i].classList.add("selected");
      }
    }

    this.childCate=this.cates[index-2]["children"]

  }

  private childCateClick(event: any,index:any){
    const childCateItems = this.childcatesClick.nativeElement.children;
    console.log("-aaaa--->>>:"+index)

    for(let i=0;i<childCateItems.length;i++){
      childCateItems[i].classList.remove("selected");
      if (index == i ) {
        childCateItems[i].classList.add("selected");
      }
    }
  }


}
