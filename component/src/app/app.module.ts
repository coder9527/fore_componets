import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { FrameworkModule } from './framework-componets/framework.module';
import { FrameworkServiceModule } from './framework-services/frameworkservice.module';
import { HttpClientService } from './framework-services/network-ser/httpclientservice.service';
import { FrameworkRoutingModule } from './router.module';
import { SampleModule } from './sample-code/sample.module';
import { BlogPageComponent } from './sample-template/blog-page/blogPage.component';
import { HomePageComponent } from './sample-template/home-page/homePage.component';
import { ProductGridPageComponent } from './sample-template/productGrid-page/productGridPage.component';
import { LoginPageComponent } from './sample-template/login-page/loginpage/loginPage.component';
import { RegistePageComponent } from './sample-template/login-page/registepage/registePage.component';
import { RepertoryMainPageComponent } from './sample-template/repertory-m-page/repertoryMainPage.component';
import { RepertoryHomePageComponent } from './sample-template/repertory-m-page/repertoryHomePage.component';
import { RepertoryManagerComponent } from './sample-template/repertory-web-page/repertoryManager.component';
import { YogaHomeComponent } from './sample-template/yoga-web-page/yogahome.component';
import { YogaInfoComponent } from './sample-template/yoga-web-page/yogaInfo.component';
import { YogaVideosComponent } from './sample-template/yoga-web-page/YogaVideos.component';
import { YogaAudioComponent } from './sample-template/yoga-web-page/YogaAudio.component';
import {ImusicWebPageComponent} from './sample-template/imusic-web-page/ImusicWebPage.component';
import {FileManagePageComponent} from './sample-template/file-m-page/fileManagePage.component';
import {FileHeaderPageComponent} from './sample-template/file-m-page/fileHeaderPage.component';
import {FileHomePageComponent} from "./sample-template/file-m-page/fileHomePage.component";
import {FileTailPageComponent} from "./sample-template/file-m-page/fileTailPage.component";
import {FileRanklistPageComponent} from "./sample-template/file-m-page/fileRanklistPage.component";
import {FileCatePageComponent} from "./sample-template/file-m-page/fileCatePage.component";
import {FileNessPageComponent} from "./sample-template/file-m-page/fileNessPage.component";
import {FileNewsPageComponent} from "./sample-template/file-m-page/fileNewsPage.component";
import {FileBackendPageComponent} from "./sample-template/file-m-page/fileBackendPage.component";
import {FileSearchPageComponent} from "./sample-template/file-m-page/fileSearchPage.component";



@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ProductGridPageComponent,
    LoginPageComponent,
    RegistePageComponent,
    BlogPageComponent,
    RepertoryMainPageComponent,
    RepertoryHomePageComponent,
    RepertoryManagerComponent,
    YogaHomeComponent,
    YogaInfoComponent,
    YogaVideosComponent,
    YogaAudioComponent,
    ImusicWebPageComponent,
    FileManagePageComponent,
    FileHeaderPageComponent,
    FileTailPageComponent,
    FileHomePageComponent,
    FileRanklistPageComponent,
    FileCatePageComponent,
    FileNessPageComponent,
    FileNewsPageComponent,
    FileSearchPageComponent,
    FileBackendPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FrameworkModule,
    FrameworkServiceModule,
    SampleModule,
    FrameworkRoutingModule

  ],
  providers: [

  ],
  exports:[
    FileBackendPageComponent
  ],
  bootstrap: [
    AppComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
