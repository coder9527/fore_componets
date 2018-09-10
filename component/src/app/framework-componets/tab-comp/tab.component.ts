import { flyIn } from '../animation-comp/flyIn.animate';
import { Component, OnInit, Input, Renderer2, ElementRef, ViewChild, ViewChildren, QueryList, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css'],
  animations: [
    flyIn
  ]
})
export class TabComponent implements OnInit {


  @ViewChild('contends') contends: ElementRef;

  @ViewChild('tabHeader') tabHeader: ElementRef;

  @ViewChild('tabLine') tabLine: ElementRef;


  /**
   *
   *tab输入标题头数组
   * ['name1','name2','name3']
   */
  @Input() tabItems: Array<String>;

  /**
   *tabIndex 默认选中第一项
   */
  @Input() tabIndex = 0;


  /**
   *传递当前tabIndex
   */
  @Output() tabIndexCall = new EventEmitter();


  constructor(private changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit() {
   // this.itemClick(null,this.tabIndex);

  }

  ngAfterContentInit() {
      // this.itemClick(null,this.tabIndex);

  }
  ngAfterViewInit() {
    // 初始化tab页面
    this.itemClick('click', this.tabIndex);
    this.changeDetectorRef.detectChanges();
  }

  private flyIn:string = 'in';

  itemClick(event: any, index: number) {

    console.log('tab click index:' + index);

   if(this.flyIn == 'out') {
    this.flyIn = 'in';
   } else {
    this.flyIn = 'out';
   }

    const tabHeaders = this.tabHeader.nativeElement.children;
    const tabContends = this.contends.nativeElement.children;
    const tabLines = this.tabLine.nativeElement.children;

    for (let i = 0; i < tabHeaders.length; i++) {
        tabHeaders[i].classList.remove('active');
        tabContends[i].classList.remove('active');
        tabLines[i].classList.remove('active');
        if (index == i ) {
           tabHeaders[i].classList.add('active');
          tabContends[i].classList.add('active');
          tabLines[i].classList.add('active');
          this.tabIndexCall.emit(i);
        }
    }


  }

}
