import { FrameworkRoutingModule } from '../router.module';
import { BaseService } from './base-ser/BaseService.service';
import { HttpClientService } from './network-ser/httpclientservice.service';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';




@NgModule({ // @NgModule 用来定义模块用的装饰器
    declarations: [
    ], // 导入模块所依赖的组件、指令等,用于指定这个模块的视图类
    imports: [
        BrowserModule,
        FrameworkRoutingModule,
        HttpModule
    ], // 导入当前模块所需要的其他模块
     providers: [
       HttpClientService,
       BaseService
    ],
    exports: [

    ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class FrameworkServiceModule { }
