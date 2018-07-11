import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


import { AppComponent } from './app.component';
import { FrameworkModule } from './framework-componets/framework.module';
import { FrameworkServiceModule } from './framework-services/frameworkservice.module';
import { HttpClientService } from './framework-services/network-ser/httpclientservice.service';
import { FrameworkRoutingModule } from './router.module';
import { SampleModule } from './sample-code/sample.module';
import { TabSampComponent } from './sample-code/tab-samp/tabSamp.component';
import { BlogPageComponent } from './sample-template/blog-page/blogPage.component';
import { HomePageComponent } from './sample-template/home-page/homePage.component';
import { ProductGridPageComponent } from './sample-template/productGrid-page/productGridPage.component';
import { LoginPageComponent } from './sample-template/login-page/loginpage/loginPage.component';
import { RegistePageComponent } from './sample-template/login-page/registepage/registePage.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ProductGridPageComponent,
    LoginPageComponent,
    RegistePageComponent,
    BlogPageComponent,
    TabSampComponent
  ],
  imports: [
    BrowserModule,
    FrameworkRoutingModule,
    FrameworkModule,
    FrameworkServiceModule
  ],
  providers: [
    
  ],
  bootstrap: [
    AppComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
