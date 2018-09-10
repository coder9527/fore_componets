import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  constructor() { }
  
  /**
   * 弹窗的标题头
   * 
   */
   @Input() dialogTitle ="弹窗";
  
    /**
   *弹框确认事件
   */
  @Output() confirmCall = new EventEmitter();

  ngOnInit() {
    
  }
  
  private save(){
    this.confirmCall.emit();
  }

}
