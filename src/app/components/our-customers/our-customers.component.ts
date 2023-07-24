import { Component } from '@angular/core';
import { ImagenCarousel } from 'src/app/interfaces/imagen-carousel.interface';

@Component({
  selector: 'app-our-customers',
  templateUrl: './our-customers.component.html',
  styleUrls: ['./our-customers.component.css']
})
export class OurCustomersComponent {

  listImages: ImagenCarousel[] = [
    {
      url: 'assets/img/avatar.png',
      title: 'Sara Jhines',
      descriptionLarge: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      description:'UI Designer',
    },
    {
      url: 'assets/img/avatar2.png',
      title:'Sara Jhines',
      descriptionLarge: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      description:'Product Manager',
    },
    {
      url: 'assets/img/avatar.png',
      title: 'Sara Jhines',
      descriptionLarge: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      description:'IT HR',
    },
    {
      url: 'assets/img/avatar2.png',
      title:'Sara Jhines',
      descriptionLarge: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      description:'Product Manager',
    }
  ];

}

