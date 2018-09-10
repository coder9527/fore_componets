import { HttpClientService } from '../../framework-services/network-ser/httpclientservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-repertoryMainPage',
  templateUrl: './repertoryMainPage.component.html',
  styleUrls: ['./repertoryMainPage.component.scss'],
  providers: [HttpClientService]
})
export class RepertoryMainPageComponent implements OnInit {

  private httpClientService: HttpClientService;


  public itemProducts:  Array<any>=[];
  
  
  private currentProduct:any;
  //
  constructor(httpClientService: HttpClientService) {
    this.httpClientService = httpClientService;

  }

   ngOnInit() {

  
    
     let that=this;
     console.log("init:"+JSON.stringify(localStorage.getItem("data")));
     let temp_data=localStorage.getItem("data")==null?[]:JSON.parse(localStorage.getItem("data")) as any;
      that.itemProducts=[];
      for(let i=0;i<temp_data.length;i++){
        temp_data[i].edit=false;
        that.itemProducts.push(temp_data[i]);
      }
     
   
  }
  
  public getRemoteData(){
    let ip=$("#IpAddr").val();

    let that=this;
    let temp =  this.httpClientService.httpAsyncGet("http://"+ip+"/getRepertoryList").then(reponse=>{
      console.log("res2:"+JSON.stringify(reponse));
      reponse=JSON.parse(reponse);
     // localStorage.setItem("data",reponse);
      for(let i=0;i<reponse.length;i++){
        reponse[i].edit=false;
        that.itemProducts.push(reponse[i]);
      }
      
      localStorage.setItem("data",JSON.stringify(that.itemProducts));
      
      $(".sync").text("暂无更新数据");
      $(".sub_title").text("");
      
    }).catch(error=>{

     
      
    });
  }
  
  
  public async updateAll(event:any){
     let that=this;
    
    //更新数据
     let temp_data=localStorage.getItem("data")==null?null:JSON.parse(localStorage.getItem("data")) as any;
     if(null==temp_data){
        await this.getRemoteData();
     }else{
         for(let i=0;i<temp_data.length;i++){
          if(temp_data[i].edit!=undefined&& temp_data[i].edit==true){
                let ip=$("#IpAddr").val();
                let url="http://"+ip+"/updateRepertory?repertoryId="+temp_data[i].id+"&number="+temp_data[i].countNum as string;
                await that.httpClientService.httpAsyncGet(url).then(reponse=>{
                     console.log("succcess");
                     that.getRemoteData();
                      }).catch(error=>{
                        //alert("err2:"+JSON.stringify(error));
                        console.log("error");
                        $(".sub_title").text("数据同步失败，请重试！");
                        
                      });
          }
        }
       
     }
    
    
    
    
    
    //获取数据
  }
  
  public repertoryUpdate(event:any,operate,product){
    this.currentProduct=product;
  }
  
  public confirmEvent(){
    let product=this.currentProduct as any;
    let in_number=$("#in_number").val();
     let out_number=$("#out_number").val();
        if(parseInt(in_number)>parseInt(out_number)){
          product.countNum=parseInt(product.countNum)+(parseInt(in_number)-parseInt(out_number));
         
          
        }else if(parseInt(out_number)>parseInt(in_number)){
          product.countNum=parseInt(product.countNum)-(parseInt(out_number)-parseInt(in_number))>0?parseInt(product.countNum)-(parseInt(out_number)-parseInt(in_number)):0;
          
        }
      
    
      product.edit=true;
      console.log("last:"+JSON.stringify(product));
      let temp_data=JSON.parse(localStorage.getItem("data")) as any;
     
      for(let i=0;i<temp_data.length;i++){
        if(temp_data[i].id==product.id){
          temp_data[i]=product;
        }
      }
      
       localStorage.setItem("data",JSON.stringify(temp_data));
        $("#myModal").hide();
        $(".modal-backdrop").hide();
        $(".sync").text("一键更新数据");
  }

}
