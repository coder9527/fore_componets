import { HttpClientService } from '../../framework-services/network-ser/httpclientservice.service';
import { Component, OnInit, Input,forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import {BaseService} from "../../framework-services/base-ser/BaseService.service";

@Component({
  selector: 'app-uploader',
  templateUrl: './uploader.component.html',
  styleUrls: ['./uploader.component.css'],
  providers: [HttpClientService,BaseService,{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => UploaderComponent),
    multi: true
  }]
})
export class UploaderComponent implements OnInit, ControlValueAccessor  {

  private model: any;
  private baseService:BaseService

  public onModelChange: Function = (any) => {};
  public onModelTouched: Function = () => {};
  writeValue(value: any) {
    this.model = value;
  }
  registerOnChange(fn: Function): void {
    this.onModelChange = fn;
  }
  registerOnTouched(fn: Function): void {
    this.onModelTouched = fn;
  }
  setDisabledState(val: boolean): void {}




  ngOnInit() {
  }




  private httpClientService:HttpClientService;
  //
  constructor(httpClientService: HttpClientService,baseService:BaseService) {
    this.httpClientService=httpClientService;
    this.baseService=baseService;

  }

  private uploader:any;

  public progressNum:any;

  @Input() uploadCfg:any;


  ngAfterViewInit() {
    console.log("----->>>>uploadName:"+this.uploadCfg.uploadName);
    let current_id="#"+this.uploadCfg.uploadName;
    console.log("----->>>>current_id:"+current_id);

    let url=this.uploadCfg.url

   this.uploader =WebUploader.create({
        // 文件接收服务端。
        server:url,// 'http://127.0.0.1:8089/demo/uploadDataBlock',
        // 选择文件的按钮。可选。
        // 内部根据当前运行是创建，可能是input元素，也可能是flash.
        pick: {id: current_id,   //这个id是你要点击上传文件的id，自己设置就好
        multiple:false},
        // 不压缩image, 默认如果是jpeg，文件上传前会压缩一把再上传！
        resize: false,
        auto:true,
        //开启分片上传
        chunked: false,
        chunkSize:1024*512, //512k进行数据分块上传，【默认值5242880 默认大小为5M】
        threads : 3,//上传并发数。允许同时最大上传进程数。
        formData: {
             guid: WebUploader.Base.guid() //自定义参数，待会儿解释
        }

       // accept: {
        //限制上传文件为MP4
              //extensions: 'mp4',
              //mimeTypes: 'video/mp4',
         // }
    });
     let that=this;
     this.uploader.on( 'fileQueued', function( file ) {
        if(that.uploadCfg.reCodeName==true){
          that.genFileCode(file)
        }
     });


      this.uploader.on('uploadProgress', function(file, percentage) {

        console.log("uploadProgress:"+percentage);
        that.progressNum=percentage;



      });
    this.uploader.on( 'uploadSuccess', function( file ) {

       console.log("uploadSuccess:"+JSON.stringify(file.source));
       console.log("uploadSuccess:"+JSON.stringify(file.blocks.length-1));
       file.blocks[0].transport
     // that.uploader.upload();
    //  file.blocks[0].start();
     // console.log("uploadSuccess:"+JSON.stringify(this.chunks));


      /*
      that.httpClientService.httpAsyncGet("http://127.0.0.1:8089/demo/mergeAllDB").then(reponse=>{
      //alert("res2:"+JSON.stringify(reponse));
    }).catch(error=>{
      //alert("err2:"+JSON.stringify(error));
    });*/

    });

     //上传出错后执行的方法

     this.uploader.on('uploadError', function( file ) {
             that.uploader.stop(true);
       });


  }

  reupload(){
    this.uploader.upload();
  }

  stop(){
    this.uploader.stop(true);
  }


  /**
   *
   * 文件重新编码
   */
  async genFileCode(file){
    this.model.fileName=file.name
    file.name=this.guid()+"."+(file.name.split(".")[1]);
    this.model.fileNameCode=file.name
    this.onModelChange(this.model);

  }


   guid() {
      let temp= 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0,
          v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
      });
    return temp
  }


}
