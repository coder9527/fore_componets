import { Component, OnInit , ElementRef, ViewChild, } from '@angular/core';

import { BaseService } from '../../framework-services/base-ser/BaseService.service';
import { HttpClientService } from '../../framework-services/network-ser/httpclientservice.service';

@Component({
  selector: 'app-YogaInfo',
  templateUrl: './YogaInfo.component.html',
  styleUrls: ['./YogaInfo.component.scss'],
  providers: [HttpClientService,BaseService]
})
export class YogaInfoComponent implements OnInit {





  ngOnInit(): void {
    let headHeight=$(".yoga_menu").height()+140;
    let nav=$(".yoga_menu");
    $(window).scroll(function(){
      if($(this).scrollTop()>headHeight){
        nav.addClass("navFixed");
      }else{
        nav.removeClass("navFixed");
      }
    })

  }
  private picUrls: Array<string>;



  private sildeOptions;

  private httpClientService: HttpClientService;

  /**
   *热点
   */
  private hotNews: Array<string>;
  /**
   *最新资讯
   */
   private news: Array<string>;
  /**
   *瑜伽文化
   */
    private yoGaCultrue: Array<string>;

  /**
   *瑜伽书籍
   */
  private yoGaBooks: Array<string>;

  /**
   *瑜伽流派
   */
  private yoGaSchool: Array<string>;


  @ViewChild('yogaMenu') yogaMenu: ElementRef;
  constructor(httpClientService: HttpClientService) {
    this.httpClientService = httpClientService;
    let that=this;
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

    // console.log()
    //加载数据
    let temp =  this.httpClientService.httpAsyncGet("http://localhost/getPortalInfos").then(reponse=>{
      console.log("res2:"+JSON.stringify(reponse));
      reponse=JSON.parse(reponse);
      // localStorage.setItem("data",reponse);
      that.hotNews=reponse.hotNews;
      that.yoGaCultrue=reponse.culturalNews;
      that.yoGaSchool=reponse.yogaSchool;
      that.yoGaBooks=reponse.yogaBooks;
      that.news=reponse.hotNews;

    }).catch(error=>{



    });


  }

  menuClick(event: any,index:any){

    const menuItems = this.yogaMenu.nativeElement.children;

    for(let i=0;i<menuItems.length;i++){
      menuItems[i].classList.remove("selected");
      if (index == i ) {
        menuItems[i].classList.add("selected");
      }
    }
  }




}
