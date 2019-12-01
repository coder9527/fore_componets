import { Component, OnInit , ElementRef, ViewChild, } from '@angular/core';

@Component({
  selector: 'app-YogaAudio',
  templateUrl: './YogaAudio.component.html',
  styleUrls: ['./YogaAudio.component.scss']
})
export class YogaAudioComponent implements OnInit {





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
  private picUrls: Array<string>;



  private sildeOptions;

  @ViewChild('yogaMenu') yogaMenu: ElementRef;
  constructor() {
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
