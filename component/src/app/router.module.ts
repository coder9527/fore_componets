
import { TabSampComponent } from './sample-code/tab-samp/tabSamp.component';
import { HomePageComponent } from './sample-template/home-page/homePage.component';
import { LoginPageComponent } from './sample-template/login-page/loginpage/loginPage.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, ModuleWithProviders } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';


const appRoutes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'tabSample', component: TabSampComponent}
];

export const FrameworkRoutingModule: ModuleWithProviders = RouterModule.forRoot(appRoutes);
