import { Component, OnInit , ElementRef, ViewChild, } from '@angular/core';

@Component({
  selector: 'app-yogaHome',
  templateUrl: './yogaHome.component.html',
  styleUrls: ['./yogaHome.component.scss']
})
export class YogaHomeComponent implements OnInit {





    ngOnInit(): void {
      let headHeight=$(".yoga_menu").height()+300;
      let nav=$(".yoga_menu");
      $(window).scroll(function(){
        if($(this).scrollTop()>headHeight){
          nav.addClass("navFixed");
        }else{
          nav.removeClass("navFixed");
        }
      })

    }





  @ViewChild('yogaMenu') yogaMenu: ElementRef;

  private picUrls: Array<string>;

  private picTitleUrls: Array<string>;

  private sildeOptions;

  private sildeOptions_info;






constructor() {

const array = new Array();
         array.push('/assets/images/slider/infor-1.jpg');
         array.push('/assets/images/slider/infor-2.jpg');
         array.push('/assets/images/slider/infor-3.jpg');
         array.push('/assets/images/slider/infor-4.jpg');
        this.picUrls = array;

      //
  this.sildeOptions={};
  this.sildeOptions_info={};
  this.sildeOptions['anType']="cube";
  this.sildeOptions_info['anType']="slide";
  this.sildeOptions['parentNodeCls']="title_images";
  this.sildeOptions_info['parentNodeCls']="img_scroll";

     // console.log()

        this.picTitleUrls=['/assets/images/yogores/bc.jpg','/assets/images/yogores/bc.jpg','/assets/images/yogores/bc.jpg'];
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
