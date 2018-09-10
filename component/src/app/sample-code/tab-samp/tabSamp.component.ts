import { flyIn } from '../../framework-componets/animation-comp/flyIn.animate';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabSamp',
  templateUrl: './tabSamp.component.html',
  styleUrls: ['./tabSamp.component.css'],
  animations: [
    flyIn
  ]
})
export class TabSampComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  tabEvent(index){
    console.log("sample index:"+index);
  }

}
