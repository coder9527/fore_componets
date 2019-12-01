import { Component } from '@angular/core';
import { HttpClientService } from '../../framework-services/network-ser/httpclientservice.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector   : 'app-fileSearchPage',
  templateUrl: './fileSearchPage.component.html',
  styleUrls: ['./fileSearchPage.component.scss'],
  providers: [HttpClientService]
})
export class FileSearchPageComponent{

  private httpClientService:HttpClientService;

  url={
    search:"http://localhost:8099/getFileInfoSearch"
  }

  private fileList:any=[]


  async godetail(fileId:string){
    // this.router.navigateByUrl("login")
    this.router.navigate(['/file'],{queryParams:{id:fileId}});
  }


  async ngOnInit(){
    let that=this;
    await this.httpClientService.httpAsyncGet(this.url.search+"?searchText="+this.searchTxt).then(reponse=>{
      reponse=JSON.parse(reponse);
      console.log("list----"+JSON.stringify(reponse))

      this.fileList=reponse;

    }).catch(error=>{

    });




  }

  private searchTxt:any;

  constructor(private activateInfo:ActivatedRoute,httpClientService: HttpClientService,private router: Router){
    this.httpClientService = httpClientService;
    activateInfo.queryParams.subscribe(queryParams => {
           this.searchTxt=queryParams["searchText"];
    })
  }







}
