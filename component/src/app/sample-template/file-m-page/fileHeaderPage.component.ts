import { Component,ElementRef, ViewChild,Input } from '@angular/core';
import { HttpClientService } from '../../framework-services/network-ser/httpclientservice.service';
import {Router,ActivatedRoute} from '@angular/router';

@Component({
  selector   : 'app-fileHeaderPage',
  templateUrl: './fileHeaderPage.component.html',
  styleUrls: ['./fileHeaderPage.component.scss'],
  providers: [HttpClientService]
})
export class FileHeaderPageComponent {


  @ViewChild('fileMenu') fileMenu: ElementRef;

  @ViewChild('searchVal') searchVal: ElementRef;


  @Input() tag:any;




  constructor(private router: Router) {

  }

  async ngOnInit(){
    //alert(this.tag);
    if(undefined==this.tag){
      this.tag=0;
    }
    const menuItems = this.fileMenu.nativeElement.children;
    for(let i=0;i<menuItems.length;i++){
      menuItems[i].classList.remove("selected");
      if (this.tag == i ) {
        menuItems[i].classList.add("selected");
        this.tag=i;
      }
    }
  }


  public menuClick(event: any,index:any){

    const menuItems = this.fileMenu.nativeElement.children;
    console.log("---->>>:"+index)

    for(let i=0;i<menuItems.length;i++){
      menuItems[i].classList.remove("selected");
      if (index == i ) {
        menuItems[i].classList.add("selected");
        this.tag=i;
      }
    }
  }

  public gosearch(){

    let searchText=this.searchVal.nativeElement.value;
    console.log("searchText"+searchText)
    this.router.navigate(['/fileSearch'],{queryParams:{searchText:searchText}});
  }

}
