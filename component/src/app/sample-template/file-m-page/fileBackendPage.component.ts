import { Component,OnInit,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientService } from '../../framework-services/network-ser/httpclientservice.service';
import {BaseService} from "../../framework-services/base-ser/BaseService.service";

@Component({
  selector   : 'app-fileBackendPage',
  templateUrl: './fileBackendPage.component.html',
  styleUrls: ['./fileBackendPage.component.scss'],
  providers: [HttpClientService,BaseService]
})
export class FileBackendPageComponent implements OnInit{

  private httpClientService:HttpClientService

  private baseService:BaseService

  private cates:any=[]
  private cate:any={}
  private cateslist:any=[]
  private filelist:any=[]



  public uploadCfg:any={
    uploadName:"file",
    pure:true,
    reCodeName:true,
    url:"http://localhost:8099/uploadFDFS",
    fileInfo:{}
 }


  public url={
    saveCate:"http://localhost:8099/saveFileCate",
    childCates: "http://localhost:8099/getchildCatesList",
    cates:"http://localhost:8099/getFileCatesList",
    files:"http://localhost:8099/getFileInfosList",
    saveFile:"http://localhost:8099/saveFileInfo",
  }

  private file:any={
    id:"",
    icon:"",
    title:"",
    version:"1.0",
    authorize:"共享软件",
    softType:"",
    softLanguage:["中文","英文"],
    updateTime:"",
    applyPlat:"windows",
    softWebsite:"",
    softSize:"2M",
    monthDownCount:"12",
    score:"2",
    softDesc:"ssss",
    softPics:"",
    downUrl:""
  }

  constructor(httpClientService: HttpClientService,baseService:BaseService) {
    this.httpClientService = httpClientService;
    this.baseService=baseService;
  }

  async ngOnInit(){
    let that=this
    await this.httpClientService.httpAsyncPost(that.url.childCates,{}).then(reponse=>{
      reponse=JSON.parse(reponse.toString())

     // console.log("cates:"+that.cates);
      for(let i in reponse){
        that.cates.push(reponse[i])
      }

    }).catch(error=>{
      //alert("err2:"+JSON.stringify(error));
      console.log("error");

    });

    await this.httpClientService.httpAsyncPost(that.url.cates,{}).then(reponse=>{
      reponse=JSON.parse(reponse.toString())
      that.cateslist=reponse
    }).catch(error=>{
      //alert("err2:"+JSON.stringify(error));
      console.log("error");

    });

    await this.httpClientService.httpAsyncPost(that.url.files,{}).then(reponse=>{
      reponse=JSON.parse(reponse.toString())
      that.filelist=reponse
    }).catch(error=>{
      //alert("err2:"+JSON.stringify(error));
      console.log("error");

    });



  }

  public async addCate(event: any){

    console.log(JSON.stringify(this.cate))

    await this.httpClientService.httpAsyncPost(this.url.saveCate,this.cate).then(reponse=>{
      console.log("succcess");

      alert("数据插入成功！")
    }).catch(error=>{
      //alert("err2:"+JSON.stringify(error));
      console.log("error");

    });
  }

  public async addFile(event: any){
    //console.log(JSON.stringify(this.file))

    this.file.title=this.uploadCfg.fileInfo.fileName.split(".")[0]
    this.file.icon= $("#myimg").attr("src")
    this.file.downUrl=this.uploadCfg.fileInfo.fileNameCode.split(".")[0]
    this.file.softType=this.uploadCfg.fileInfo.fileName.split(".")[1]

    console.log(JSON.stringify(this.file))
    await this.httpClientService.httpAsyncPost(this.url.saveFile,this.file).then(reponse=>{
      console.log("succcess");

      alert("数据插入成功！")
    }).catch(error=>{
      //alert("err2:"+JSON.stringify(error));
      console.log("error");

    });
  }


  tabEvent(index){
    console.log("sample index:"+index);
  }


  imgChange(event: any,img) {
  // 生成一个文件读取的对象
  const reader = new FileReader();

  reader.onload = function (ev :any) {
    // base64码
    var imgFile =ev.target.result;//或e.target都是一样的
   // document.querySelector("img").src= ev.target.result;
    $("#myimg").attr("src",ev.target.result)
    //$("#myimg").attr("src","http://www.abiud")
  }
  //发起异步读取文件请求，读取结果为data:url的字符串形式，
  reader.readAsDataURL(event.srcElement.files[0]);
}


  private removeCate(){

  }

  private removeFile(){

  }


}
