import { LayoutSampleComponent } from './layout-samp/layoutSample.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FrameworkModule} from '../framework-componets/framework.module';
import { FrameworkRoutingModule } from '../router.module';
import { ModalSampleComponent } from './modal-samp/modalSample.component';
import {SliderSampleComponent} from './slider-samp/sliderSample.component';
import { TabSampComponent } from './tab-samp/tabSamp.component';
import { UploaderSampComponent } from './uploader-samp/uploadersamp.component';




@NgModule({ // @NgModule 用来定义模块用的装饰器
    declarations: [
        LayoutSampleComponent,
        TabSampComponent,
        ModalSampleComponent,
        UploaderSampComponent,
        SliderSampleComponent
    ],
    imports: [
        BrowserModule,
        FrameworkModule,
        FrameworkRoutingModule
    ],
    exports: [ LayoutSampleComponent, SliderSampleComponent, TabSampComponent,UploaderSampComponent ],
    bootstrap: [],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]

})
export class SampleModule {

}
