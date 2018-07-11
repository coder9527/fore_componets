import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector   : 'app-masonryLayout',
    templateUrl: './masonryLayout.component.html',
    styleUrls: ['./masonryLayout.component.scss']
})
export class MasonryLayoutComponent implements OnInit {
    /**
     * desc:显示方式
     * 水平或者垂直显示瀑布流组件
     */
    @Input() orientType: string;
    /**
     * desc:显示的列数
     */
    @Input() columns: string;
    constructor() {

    }
    ngOnInit () {
        console.log('columns:' + this.columns);
    }


}
