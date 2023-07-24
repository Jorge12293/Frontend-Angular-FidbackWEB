
import { Component, Input } from '@angular/core';
import { ImagenCarousel } from '../../interfaces/imagen-carousel.interface';

@Component({
  selector: 'app-carousel-images-light',
  templateUrl: './carousel-images-light.component.html',
  styleUrls: ['./carousel-images-light.component.css']
})
export class CarouselImagesLightComponent {
  @Input() listImages: ImagenCarousel[] = [];
}
