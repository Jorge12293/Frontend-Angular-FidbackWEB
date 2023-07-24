import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AppRoutingModule } from '../app-routing.module';

const listComponents = [
  FooterComponent,
  NavBarComponent 
];

@NgModule({
  declarations: [
    ...listComponents
  ],
  exports:[
    ...listComponents
  ],
  imports: [
    AppRoutingModule,
    CommonModule
  ]
})
export class ThemeModule { }
