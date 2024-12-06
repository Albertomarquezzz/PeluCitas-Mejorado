import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { InicioComponent } from './inicio/inicio.component';
import { RegisterComponent } from './register/register.component'; 
import { SobreNosotrosComponent } from './sobre-nosotros/sobre-nosotros.component';

export const routes: Routes = [
    { path: 'inicio', component: InicioComponent }, // Definir la ruta para el componente de inicio
    { path: 'login', component: LoginComponent }, // Definir la ruta para el componente de login
    { path: 'crear-cuenta', component: RegisterComponent }, // Definir la ruta para el componente de register
    { path: 'sobre-nosotros', component: SobreNosotrosComponent }, // Definir la ruta para el componente de Sobre Nosotros
    { path: '', redirectTo: '/inicio', pathMatch: 'full' } // Redirigir a inicio por defecto
];
