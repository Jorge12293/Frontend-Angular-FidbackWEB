import { Component, Input } from '@angular/core';
import { ImagenCarousel } from '../../interfaces/imagen-carousel.interface';

@Component({
  selector: 'app-carousel-images-dark',
  templateUrl: './carousel-images-dark.component.html',
  styleUrls: ['./carousel-images-dark.component.css']
})

export class CarouselImagesDarkComponent {
  @Input() listImages: ImagenCarousel[] = [];
}
