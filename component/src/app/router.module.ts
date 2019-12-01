
import { UploaderComponent } from './framework-componets/uploader-comp/uploader.component';
import { ModalSampleComponent } from './sample-code/modal-samp/modalSample.component';
import { TabSampComponent } from './sample-code/tab-samp/tabSamp.component';
import { UploaderSampComponent } from './sample-code/uploader-samp/uploadersamp.component';
import { HomePageComponent } from './sample-template/home-page/homePage.component';
import { LoginPageComponent } from './sample-template/login-page/loginpage/loginPage.component';
import { RepertoryHomePageComponent } from './sample-template/repertory-m-page/repertoryHomePage.component';
import { RepertoryMainPageComponent } from './sample-template/repertory-m-page/repertoryMainPage.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, ModuleWithProviders } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { YogaHomeComponent } from './sample-template/yoga-web-page/yogahome.component';
import { YogaInfoComponent } from './sample-template/yoga-web-page/yogaInfo.component';
import { YogaVideosComponent } from './sample-template/yoga-web-page/YogaVideos.component';
import { YogaAudioComponent } from './sample-template/yoga-web-page/YogaAudio.component';
import {ImusicWebPageComponent} from './sample-template/imusic-web-page/ImusicWebPage.component';
import {FileManagePageComponent} from './sample-template/file-m-page/fileManagePage.component';
import {FileHomePageComponent} from './sample-template/file-m-page/fileHomePage.component';
import {FileRanklistPageComponent} from "./sample-template/file-m-page/fileRanklistPage.component";
import {FileCatePageComponent} from "./sample-template/file-m-page/fileCatePage.component";
import {FileNessPageComponent} from "./sample-template/file-m-page/fileNessPage.component";
import {FileNewsPageComponent} from "./sample-template/file-m-page/fileNewsPage.component";
import {FileBackendPageComponent} from "./sample-template/file-m-page/fileBackendPage.component";
import {FileSearchPageComponent} from "./sample-template/file-m-page/fileSearchPage.component";

const appRoutes: Routes = [
  { path: '', component: RepertoryHomePageComponent},
  { path: 'home', component: HomePageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'tabSample', component: TabSampComponent},
  { path: 'modal', component: ModalSampleComponent},
  { path: 'upfile', component: UploaderComponent},
  { path: 'upfileSample', component: UploaderSampComponent},
  { path: 'repHome', component: RepertoryHomePageComponent},
  { path: 'repList', component: RepertoryMainPageComponent},
  { path: 'yoga', component: YogaHomeComponent},
  { path: 'yogaInfo', component: YogaInfoComponent},
  { path: 'YogaVideos', component: YogaVideosComponent},
  { path: 'YogaAudio', component: YogaAudioComponent},
  { path:'imusic',component:ImusicWebPageComponent},
  { path:'file',component:FileManagePageComponent},
  { path:'fileSearch',component:FileSearchPageComponent},
  { path:'fileHome',component:FileHomePageComponent},
  { path:'fileRank',component:FileRanklistPageComponent},
  { path:'fileCate',component:FileCatePageComponent},
  { path:'fileNess',component:FileNessPageComponent},
  { path:'fileNews',component:FileNewsPageComponent},
  { path:'fileBackend',component:FileBackendPageComponent},

];

export const FrameworkRoutingModule: ModuleWithProviders = RouterModule.forRoot(appRoutes);
