import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { flyInTop } from '../animation-comp/flyInTop.animate';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
  animations: [
    flyInTop
  ]
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

  /**
   *
   * 弹窗类型
   * default confirm  alert
   */
  @Input() dialogType="default";

 /** 
  * 
  *弹窗显示和影藏 
  */

  private dialogShow:boolean=false;

  private flyInTop:string = 'in';


  ngOnInit() {
     

  }
  ngAfterViewInit() {
    //this.dialogAnimate();
  }


  private dialogAnimate(){
    if(this.flyInTop == 'out') {
        this.flyInTop = 'in';
    } else {
        this.flyInTop = 'out';
    }
  }
  
  

  private save(){
    this.confirmCall.emit();
  }


  private close(){
    if(this.flyInTop == 'out'){
      this.dialogShow=false;
    }else if(this.flyInTop == 'in'){
       this.dialogShow=true;
    }
  }


  public closeDialog(){
    if(this.dialogShow==false){
      this.dialogShow=true;
      this.dialogAnimate();
    }else if(this.dialogShow==true){
      this.dialogShow=false;
      this.dialogAnimate();
    }

  }

}
