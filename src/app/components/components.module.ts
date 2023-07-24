import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutUsComponent } from './about-us/about-us.component';
import { AdvantagesComponent } from './advantages/advantages.component';
import { OurCustomersComponent } from './our-customers/our-customers.component';
import { SocialNetworkComponent } from './social-network/social-network.component';
import { OurAppsComponent } from './our-apps/our-apps.component';
import { FidbackComponent } from './fidback/fidback.component';
import { CompaniesComponent } from './companies/companies.component';
import { MiniumRequeridComponent } from './minium-requerid/minium-requerid.component';
import { SharedModule } from '../shared/shared.module';


const listComponents = [
  AboutUsComponent,
  AdvantagesComponent,
  OurCustomersComponent,
  SocialNetworkComponent,
  OurAppsComponent,
  FidbackComponent,
  CompaniesComponent,
  MiniumRequeridComponent,
];

@NgModule({
  declarations: [
    ...listComponents,
  ],
  exports:[
    ...listComponents 
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class ComponentsModule { }
