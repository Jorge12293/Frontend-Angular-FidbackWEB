import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ThemeModule } from '../theme/theme.module';
import { HttpClientModule } from '@angular/common/http';
import { ComponentsModule } from '../components/components.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    HomeComponent,
  ],
  exports:[
    HomeComponent
  ],
  imports: [
    CommonModule,
    ThemeModule,
    ComponentsModule,
    SharedModule
  ]
})
export class PagesModule { }
