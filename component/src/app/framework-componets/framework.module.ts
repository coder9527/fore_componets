import { FrameworkServiceModule } from '../framework-services/frameworkservice.module';
import { FrameworkRoutingModule } from '../router.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import {ChartModule} from "angular2-highcharts";
import { MasonryLayoutComponent  } from './layout-comp/masonryLayout.component';
import {LineLayoutComponent} from './layout-comp/lineLayout.component';
import { SliderComponent } from './slider-comp/slider.component';
import { ToolbarComponent } from './toolbar-comp/toolbar.component';
import { GridLayoutComponent } from './layout-comp/gridLayout.component';
import { ImageCardComponent } from './card-comp/imagecard.component';
import { AverageLayoutComponent } from './layout-comp/averageLayout.component';
import { TabComponent } from './tab-comp/tab.component';
import { DialogComponent } from './dialog-comp/dialog.component';
import { UploaderComponent } from './uploader-comp/uploader.component';
import { CheckboxComponent } from './checkbox-comp/checkbox.component';
import { DatalistComponent } from './datalist-comp/datalist.component';
import { SelectComponent } from './select-comp/select.component';
import { PaginationComponent } from './pagination-comp/pagination.component';
import { EditorComponent } from './editor-comp/editor.component';
import {StepsComponent} from './steps-comp/steps.component';







@NgModule({ // @NgModule 用来定义模块用的装饰器
    declarations: [
        MasonryLayoutComponent,
        LineLayoutComponent,
        SliderComponent,
        GridLayoutComponent,
        ImageCardComponent,
        AverageLayoutComponent,
        TabComponent,
        DialogComponent,
        ToolbarComponent,
        DatalistComponent,
        CheckboxComponent,
        SelectComponent,
        PaginationComponent,
        EditorComponent,
        UploaderComponent,
        StepsComponent
    ], // 导入模块所依赖的组件、指令等,用于指定这个模块的视图类
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        FrameworkRoutingModule,
        FrameworkServiceModule,
        ChartModule,
    ], // 导入当前模块所需要的其他模块
    exports: [
        MasonryLayoutComponent,
        LineLayoutComponent,
        SliderComponent,
        ToolbarComponent,
        GridLayoutComponent,
        ImageCardComponent,
        AverageLayoutComponent,
        TabComponent,
        DialogComponent,
        UploaderComponent,
        CheckboxComponent,
        DatalistComponent,
        SelectComponent,
        StepsComponent
    ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class FrameworkModule { }
