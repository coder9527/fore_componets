import { Component } from '@angular/core';
import { HttpClientService } from '../../framework-services/network-ser/httpclientservice.service';
import {Router,ActivatedRoute} from '@angular/router';

@Component({
  selector   : 'app-fileHomePage',
  templateUrl: './fileHomePage.component.html',
  styleUrls: ['./fileHomePage.component.scss'],
  providers: [HttpClientService]
})


export class FileHomePageComponent {




  private sildeOptions;

  private picUrls: Array<string>;

  //最新推荐
  private newsList:Array<any>;

  //下载排行

  private rankList:Array<any>;

  //本周最热
  private weekHotList:Array<any>;

  //本月最热
  private monthHotList:Array<any>;

  //热门推荐

  private hotList:Array<any>;

  //电脑必备
  private computerList:Array<any>;

  //手机必备
  private mobileList:Array<any>;


  private httpClientService:HttpClientService

  async godetail(fileId:string){
    // this.router.navigateByUrl("login")
    this.router.navigate(['/file'],{queryParams:{id:fileId}});
  }

  constructor(httpClientService: HttpClientService,private router: Router) {
    this.httpClientService = httpClientService;
    const array = new Array();
    array.push('/assets/images/slider/infor-1.jpg');
    array.push('/assets/images/slider/infor-2.jpg');
    array.push('/assets/images/slider/infor-3.jpg');
    array.push('/assets/images/slider/infor-4.jpg');
    this.picUrls = array;

    //
    this.sildeOptions={};

    this.sildeOptions['anType']="flip";

    this.sildeOptions['parentNodeCls']="img_scroll";
  }


  private cates:any=[]

  url={
    cate:"http://localhost:8099/getFileCatesList",
    new:"http://localhost:8099/getFileInfosCateNo?cateNo=00050004",
    hot:"http://localhost:8099/getFileInfoScore",
    downList:"http://localhost:8099/getFileInfoRank?type=all",
    monthList:"http://localhost:8099/getFileInfoRank?type=month",
    weekList:"http://localhost:8099/getFileInfoRank?type=week",
    mobileList:"http://localhost:8099/getFileInfosCateNo?cateNo=00070002",
    computerList:"http://localhost:8099/getFileInfosCateNo?cateNo=00070001",
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
     // console.log(JSON.stringify(that.cates))
    }).catch(error=>{
      //alert("err2:"+JSON.stringify(error));
      //console.log("error"+error.message);
    });


    await this.httpClientService.httpAsyncGet(this.url.new).then(reponse=>{
      reponse=JSON.parse(reponse);
      console.log(JSON.stringify(reponse))
      this.newsList=reponse;

    }).catch(error=>{

    });

    await this.httpClientService.httpAsyncGet(this.url.downList).then(reponse=>{
      reponse=JSON.parse(reponse);
      console.log(JSON.stringify(reponse))
      this.rankList=reponse;

    }).catch(error=>{

    });

    await this.httpClientService.httpAsyncGet(this.url.hot).then(reponse=>{
      reponse=JSON.parse(reponse);
      console.log(JSON.stringify(reponse))
      this.hotList=reponse;

    }).catch(error=>{

    });

    await this.httpClientService.httpAsyncGet(this.url.monthList).then(reponse=>{
      reponse=JSON.parse(reponse);
      console.log(JSON.stringify(reponse))
      this.monthHotList=reponse;

    }).catch(error=>{

    });


    await this.httpClientService.httpAsyncGet(this.url.weekList).then(reponse=>{
      reponse=JSON.parse(reponse);
      console.log(JSON.stringify(reponse))
      this.weekHotList=reponse;

    }).catch(error=>{

    });

    await this.httpClientService.httpAsyncGet(this.url.computerList).then(reponse=>{
      reponse=JSON.parse(reponse);
      console.log(JSON.stringify(reponse))
      this.computerList=reponse;

    }).catch(error=>{

    });



    await this.httpClientService.httpAsyncGet(this.url.mobileList).then(reponse=>{
      reponse=JSON.parse(reponse);
      console.log(JSON.stringify(reponse))
      this.mobileList=reponse;

    }).catch(error=>{

    });


  }



}
