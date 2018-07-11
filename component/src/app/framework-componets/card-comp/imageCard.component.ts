import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-imageCard',
  templateUrl: './imageCard.component.html',
  styleUrls: ['./imageCard.component.scss']
})
export class ImageCardComponent implements OnInit {
  
  
  @Input() imagePath: string;
  
  @Input() type: string;

  constructor() { }

  ngOnInit() {
    
    console.log()
  }

}
