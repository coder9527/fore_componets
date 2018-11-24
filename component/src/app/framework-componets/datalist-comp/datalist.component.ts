import { Component, OnInit, Input, ViewContainerRef, ViewChild, ComponentFactoryResolver, ComponentRef, ComponentFactory } from '@angular/core';
import { DialogComponent } from '../dialog-comp/dialog.component';

@Component({
  selector: 'app-datalist',
  templateUrl: './datalist.component.html',
  entryComponents: [DialogComponent],
  styleUrls: ['./datalist.component.css']
})
export class DatalistComponent implements OnInit {

    /**
   * 数据列表项配置
   *  title :['aa','bb','cc']
   *  data:[
   * *  {value:'123',type:'',rowNum:'',show:'true',check:'true'},
   * *  {value:'456',type:'',rowNum:'',show:'true',check:'true'},
   * *  {value:'789',type:'',rowNum:'',show:'true',check:'true'}
   * * ]
   *  sequence:true false
   *  checkbox: true false
   *  operationstate:true false
   *  operation:{edit:true,delete:true,detail:true}
   *  checkAll:false
   */
   @Input() dataOptions ={} as any;
  
  
  private title:Array<String>;
  
  private datas:Array<String>;
  
  private showSequence:boolean;
  
  private showCheckBox:boolean;
  
  private operationstate:boolean=false;
  
  private checkallitems:boolean=false;
  
  //<app-dialog [dialogTitle]="'删除'" (confirmCall)="confirmEvent($event)">确认删除？</app-dialog>

 // @ViewChild("appDialog", { read: ViewContainerRef }) container: ViewContainerRef;

  //componentRef: ComponentRef<DialogComponent>;
  @ViewChild("appDialog") appDialog: DialogComponent;
  
  constructor(private resolver: ComponentFactoryResolver) { 
    
    //console.log("constructor dataList:"+JSON.stringify(this.dataOptions));
   // this.title=this.dataOptions.title;
   // this.datas=this.dataOptions.data;
   // this.showSequence=this.dataOptions.sequence;
  }

  ngOnInit() {
    
    console.log("ngOnInit dataList:"+JSON.stringify(this.dataOptions));
    this.title=this.dataOptions.title;
    this.datas=this.dataOptions.data;
    this.showSequence=this.dataOptions.sequence?true:false;
    this.showCheckBox=this.dataOptions.checkbox?true:false;
    this.operationstate=this.dataOptions.operationstate?true:false;
    this.checkallitems=this.dataOptions.checkAll?true:false;
  }
  
  ngAfterViewInit() {
      
  }

   ngOnDestroy() {
   // this.componentRef.destroy()
  }
  
  
  private deleteItem(rowNum:number){
    this.dataOptions.data.splice(rowNum,1); 
  }
  
  private showDialog(){
    /*
    this.container.clear();
    const factory: ComponentFactory<DialogComponent> =this.resolver.resolveComponentFactory(DialogComponent);
    this.componentRef = this.container.createComponent(factory);
    // this.componentRef.instance.type = type;
    let tempDialog=this.componentRef.instance;*/

   this.appDialog.closeDialog();
    
  }
  
  
  private addItem(){
    let obj={};
    
    this.dataOptions.data.push(obj)
  }
  
  private editItem(){
  
  }
  
  private checkAll(){
    if(this.checkallitems){
      for( let item of this.dataOptions.data){
          item.check=false;
      }
    }else{
       for( let item of this.dataOptions.data){
          item.check=true;
      }
    }
  }
  
  private confirmEvent(){
    //this.deleteItem(i);
  }
  

}
