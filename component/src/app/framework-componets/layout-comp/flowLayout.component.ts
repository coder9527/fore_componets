import { Component, Input } from '@angular/core';
@Component({
    selector   : 'app-flowLayout',
    templateUrl: './flowLayout.component.html'
})
export class FlowLayoutComponent {
   @Input() orientType: string;
    constructor() {

    }
}
