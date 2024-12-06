import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common'; 
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { TabViewModule } from 'primeng/tabview';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ButtonModule,CommonModule,RouterLink,RouterLinkActive, TabViewModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PeluCitas';

  // Propiedad para controlar la apertura/cierre del menú
  isMenuOpen: boolean = false;

  // Método para alternar el estado del menú
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
