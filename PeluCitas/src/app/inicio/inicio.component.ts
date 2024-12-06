import { Component } from '@angular/core';
import { CarouselModule, CarouselResponsiveOptions } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CarouselModule, ButtonModule],  // No necesitamos TagModule
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {

  // Datos con las imágenes de los cortes de cabello
  products: any[] = [
    {
      image: '/assets/img/corte1.png',
    },
    {
      image: '/assets/img/corte2.png',
    },
    {
      image: '/assets/img/corte3.png',
    },
    {
      image: '/assets/img/corte4.png',
    }
  ];

  // Opciones de diseño responsivo para el carrusel
  responsiveOptions: CarouselResponsiveOptions[] = [
    {
      breakpoint: '1024px',
      numVisible: 3,
      numScroll: 3
    },
    {
      breakpoint: '768px',
      numVisible: 2,
      numScroll: 2
    },
    {
      breakpoint: '560px',
      numVisible: 1,
      numScroll: 1
    }
  ];

}
