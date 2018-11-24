import { BrowserModule } from '@angular/platform-browser';
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
    YogaHomeComponent
  ],
  imports: [
    BrowserModule,
    FrameworkRoutingModule,
    FrameworkModule,
    FrameworkServiceModule,
    SampleModule
    
  ],
  providers: [
    
  ],
  bootstrap: [
    AppComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
