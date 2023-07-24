import { Component } from '@angular/core';
import { ImagenCarousel } from 'src/app/interfaces/imagen-carousel.interface';

@Component({
  selector: 'app-advantages',
  templateUrl: './advantages.component.html',
  styleUrls: ['./advantages.component.css']
})
export class AdvantagesComponent {
  
  listImages: ImagenCarousel[] = [
    {
      url: 'assets/svg/product.svg',
      title: 'Elevate yourCustomer score',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ',
      descriptionLarge:'',
    },
    
    {
      url: 'assets/svg/product.svg',
      title: 'Track your consumption and purchases',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ',
      descriptionLarge:'',
    },
    {
      url: 'assets/svg/product.svg',
      title: 'Data analysis segmentedby categories',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ',
      descriptionLarge:'',
    },
    {
      url: 'assets/svg/product.svg',
      title: 'Earn pointsand rewards',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ',
      descriptionLarge:'',
    },
    {
      url:'assets/svg/product.svg',
      title: 'Get your consumption track record',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ',
      descriptionLarge:'',
    },
    {
      url:'assets/svg/product.svg',
      title: 'Scale up your customer interaction',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ',
      descriptionLarge:'',
    }
  ];

}

