import { Component, OnInit , Input, ViewChildren, ElementRef, QueryList, ViewChild, Renderer2} from '@angular/core';

@Component({
  selector: 'app-averageLayout',
  templateUrl: './averageLayout.component.html',
  styleUrls: ['./averageLayout.component.scss']
})
export class AverageLayoutComponent implements OnInit {

  @Input() orientType: string;

  @ViewChild('averageLayout') contendDivs: ElementRef;

  
  constructor(private render: Renderer2) {}

  ngOnInit() {
    
    let tempChildren=this.contendDivs.nativeElement.children;
    
    console.log(""+JSON.stringify( tempChildren))
    /*
    for(let i=0;i<tempChildren.length;i++){
       //tempChildren[i].addClass("averae_layout_item");
       console.log("eeeee-"+JSON.stringify( tempChildren[i]));
      this.render.setAttribute(tempChildren[i], "class", "averae_layout_item");
    }*/
    console.log("eeeee");
    
  }


}
