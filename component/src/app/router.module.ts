
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
];

export const FrameworkRoutingModule: ModuleWithProviders = RouterModule.forRoot(appRoutes);
