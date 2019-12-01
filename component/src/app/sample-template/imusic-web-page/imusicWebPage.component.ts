import { HttpClientService } from '../../framework-services/network-ser/httpclientservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-imusicWebPage',
  templateUrl: './imusicWebPage.component.html',
  styleUrls: ['./imusicWebPage.component.scss'],
  providers: [HttpClientService]
})

export class ImusicWebPageComponent implements OnInit {

  private musicList:Array<any>=[];



  ngOnInit():void {
    var count = 0;
    var i=0;
    setInterval(function(){
      document.getElementById("album_pic").style.webkitTransform="rotate("+count+"deg)";
      let val=(-1*i)+'px'
      if(i>300){
        i=0;
      }
      document.getElementById("marquee").style.transform="translateY("+val+")";

      i=i+5;
      count=count+5;
    },100);

    //初始化musicList
    this.musicList=[{name:"双截棍", author:"周杰伦",len:"1分钟"},{name:"双截棍", author:"周杰伦",len:"1分钟",path:""}]
  }

  //弹出选择框，选择文件
  choosFile(event: any){
    var inputObj=document.createElement('input')
    inputObj.setAttribute('id','file');
    inputObj.setAttribute('type','file');
    inputObj.setAttribute('name','file');
    inputObj.setAttribute('accept','mp3');
    inputObj.setAttribute("style",'visibility:hidden');
    document.body.appendChild(inputObj);
    inputObj.value;
    inputObj.click();

    let that=this;
    inputObj.addEventListener('change',function(){
      //alert(inputObj.value)
      let temPath= inputObj.value.split("\\");
      that.musicList.push({name:temPath[temPath.length-1].split(".")[0],author:"-",len:"-",path:inputObj.value});


    })

    console.log(inputObj)
  }

  //清空列表
  clearList(){
    this.musicList=[];
  }

  //删除
  delItem(event: any){
    let that=this;
    $(".checkItem").map(function(index,value:any){
        if(value.checked==true){
          that.musicList.splice(index,1)
        }
    });
  }

  //全选
  checkAll(event: any){
    //console.log(JSON.stringify($(event.target))+"-"+$(event.target)[0].checked)
    //alert($(".checkAll")[0].checked)
    if($(".checkAll")[0].checked==true){
      $(".checkItem").map(function(index,value:any){
        value.checked=true;
      });
      $(".checkAll")[0].checked=true;
    }else{
      $(".checkItem").map(function(index,value:any){
        value.checked=false;
      });
      $(".checkAll")[0].checked=false;
    }
  }
  //checkbox check事件
 checkItem(event: any){

   let that=this;
   let checkAllFlag=true;
   $(".checkItem").map(function(index,value:any){
     if(value.checked==false){
       checkAllFlag=false;
     }
   });
   if(checkAllFlag){
     $(".checkAll")[0].checked=true;
   }else{
     $(".checkAll")[0].checked=false;
   }

 }

  //播放
  play(event:any,item:any){
   // console.log("start:"+item.path);
    let audio= $("#musicAudio source")
    audio.attr("src",item.path);
    audio.play();
  }

  //暂停
 stop(event:any){
     console.log("stop")
 }

  //下载
  downMusic(event: any){

  }


}
