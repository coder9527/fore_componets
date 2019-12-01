import { Component,Input, OnInit,forwardRef } from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms'

import { flyInTop } from '../animation-comp/flyInTop.animate';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css'],
  animations: [
    flyInTop
  ],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => SelectComponent),
    multi: true
  }]
})
export class SelectComponent implements ControlValueAccessor , OnInit {


  private showItems:boolean=false;


  private currentItem:any;

  /**
   *
   *options 输入数组
   * [{key:001,value:1111}，{key:002,value:22222}]
   */
  @Input() options: Array<any>=[{'key':'001','value':'ceshi1'},{'key':'002','value':'ceshi2'},{'key':'003','value':'ceshi3'}];

  constructor() {

  }

  private model: any;

  public onModelChange: Function = () => {};
  public onModelTouched: Function = () => {};

  writeValue(value: any) {
    this.model = value;
  }
  registerOnChange(fn: Function): void {
    this.onModelChange = fn;
  }
  registerOnTouched(fn: Function): void {
    this.onModelTouched = fn;
  }

  setDisabledState(val: boolean): void {}

  ngOnInit() {

  }





  private showItemsEvent(){
    if(this.showItems==true){
      this.showItems=false;
    }else{
      this.showItems=true;
    }
  }


  private checkItemEvent(option:any,index:any){
    console.log(index+"-"+JSON.stringify(option));
    this.currentItem=option;
    this.showItemsEvent();
  }

  public getSelectItem(){
      return this.currentItem;
  }

  public getSelectItemTxt(){
      return this.currentItem.value;
  }

  public getSelectItemKey(){
      return this.currentItem.key;
  }




}
