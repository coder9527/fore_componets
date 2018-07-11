import { Component, Input, OnInit } from '@angular/core';


//import * as SwiperAnimate from 'swiper-animate/swiper.animate1.0.2.min.js';

@Component({
    selector   : 'app-slider',
    templateUrl: './slider.component.html',
    styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

    @Input() picPaths: Array<string>;

    @Input() picNames: Array<string>;

    constructor() {


    }

    ngAfterViewInit() {
       // this.initView();
        //console.log('xxxxxxx' + JSON.stringify(this.picPaths));
       //console.log('xxxxxxx' + JSON.stringify(this.picPaths.length));
       const mySwiper = new Swiper('.swiper-container', {
              autoplay: true,
              mode : 'horizontal',
             // loop: true,
              speed: 400,
              updateOnImagesReady : true,
              preloadImages: false,
              lazyLoading : true,
             //移动端使用  simulateTouch:false,
              observer: true,
              observeParents: true,
              effect : 'slide', // fade cube coverflow flip
              pagination: {
                  el: '.swiper-pagination',
                },
              navigation: {
                  nextEl: '.swiper-button-next',
                  prevEl: '.swiper-button-prev',
                },
              // 如果需要滚动条
              scrollbar: {
                el: '.swiper-scrollbar',
              },
              on:{
                init: function(){
                  swiperAnimateCache(this); //隐藏动画元素 
                  swiperAnimate(this); //初始化完成开始动画
                }, 
                slideChangeTransitionEnd: function(){ 
                  swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
                } 
              }
            });


    }
    ngOnInit () {
         this.picPaths = this.picPaths.toString().split(',');
         



    }


}
