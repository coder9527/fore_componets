import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-repertoryManager',
  templateUrl: './repertoryManager.component.html',
  styleUrls: ['./repertoryManager.component.css']
})
export class RepertoryManagerComponent implements OnInit {

  constructor() { }
  
  private dataListData:any;

  ngOnInit() {
    this.dataListData={
      title:["title1","title2","title3"],
      data:[["wwww","dddd","cccc"],["wwww","dddd","cccc"]],
      sequence:true,
      checkbox:true,
      operationstate:true,
    }
  }
  
   tabEvent(index){
    console.log("sample index:"+index);
  }

}
