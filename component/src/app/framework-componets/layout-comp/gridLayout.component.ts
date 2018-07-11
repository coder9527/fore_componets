import { Component, OnInit, Input,ElementRef ,Renderer2  } from '@angular/core';

@Component({
  selector: 'app-gridLayout',
  templateUrl: './gridLayout.component.html',
  styleUrls: ['./gridLayout.component.scss']
})
export class GridLayoutComponent implements OnInit {


  @Input() rows: string;

  @Input() cloumns: string;
  
  
  public gridTempCss:string;

  constructor(public element: ElementRef,private render:Renderer2 ) {
  
     console.log("rows:"+this.rows+"--cloumns:"+this.cloumns);
  
  }
  ngAfterViewInit(){
    
 // this.element.nativeElement.querySelector('.app_grid').style['grid-template'] = 'repeat('+this.rows+', 1fr) / repeat('+this.cloumns + ', 1fr)';
   //    let temp=this.element.nativeElement.querySelector('#app_grid');
   // console.log("after"+JSON.stringify(temp));
  }


  ngOnInit() {
    
   // this.gridTempCss="'grid-template':'repeat('+this.rows+', 1fr) / repeat('+this.cloumns + ', 1fr)'";
    /*
    console.log("init-rows:"+this.rows+"--cloumns:"+this.cloumns);
   // let temp=this.element.nativeElement.querySelector('#app_grid');
    let temp=this.render.selectRootElement(".app_grid");
    console.log(temp+"----"+JSON.stringify(temp));
    temp.style['background-color'] = '#eee';*/
  }

}
