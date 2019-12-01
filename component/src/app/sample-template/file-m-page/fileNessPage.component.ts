import { Component } from '@angular/core';
import { HttpClientService } from '../../framework-services/network-ser/httpclientservice.service';

@Component({
  selector   : 'app-fileNessPage',
  templateUrl: './fileNessPage.component.html',
  styleUrls: ['./fileNessPage.component.scss'],
  providers: [HttpClientService]
})
export class FileNessPageComponent {

  url={
    cate:"http://localhost:8099/getFileCatesList",
  }



}
