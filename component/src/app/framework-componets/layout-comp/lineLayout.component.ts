import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector   : 'app-lineLayout',
    templateUrl: './lineLayout.component.html',
    styleUrls: ['./lineLayout.component.scss']
})
export class LineLayoutComponent {
    @Input() orientType: string;
    constructor() {
        console.log('this:--->constructor-->' + this.orientType);
    }
    ngOnInit() {
        console.log('this:--->ngOnInit-->' + this.orientType);
    }
    ngDoCheck(): void {
        console.log('this:--->ngDoCheck-->' + this.orientType);
    }

    ngOnChanges() {
        console.log(this.orientType);
    }


    /*
   orientType: string;

    get OrientType(){
        return this.orientType;
    }

    @Input()
    set OrientType(orientType:string){
        this.orientType=orientType;
    }*/

}
