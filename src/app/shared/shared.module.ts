import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselImagesDarkComponent } from './carousel-images-dark/carousel-images-dark.component';
import { CarouselImagesLightComponent } from './carousel-images-light/carousel-images-light.component';
import { SliderCompaniesComponent } from './slider-companies/slider-companies.component';


const listComponents = [
  CarouselImagesDarkComponent,
  CarouselImagesLightComponent,
  SliderCompaniesComponent
];

@NgModule({
  declarations: [
    ...listComponents,
  ],
  exports:[
    ...listComponents
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
