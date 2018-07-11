import { LayoutSampleComponent } from './layout-samp/layoutSample.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FrameworkModule} from '../framework-componets/framework.module';
import {SliderSampleComponent} from './slider-samp/sliderSample.component';
import { TabSampComponent } from './tab-samp/tabSamp.component';


@NgModule({ // @NgModule 用来定义模块用的装饰器
    declarations: [
        LayoutSampleComponent,
        TabSampComponent,
        SliderSampleComponent
    ],
    imports: [
        BrowserModule,
        FrameworkModule
    ],
    exports: [ LayoutSampleComponent, SliderSampleComponent, TabSampComponent ],
    bootstrap: [],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]

})
export class SampleModule {

}
