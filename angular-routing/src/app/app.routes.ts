import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {
        path:'',
        component:HomeComponent
    },
    {
        path:'home',
        loadComponent: () => import('./home/home.component').then((m) => m.HomeComponent)
    },
    {
        path:'contact',
        loadComponent: () => import('./contact/contact.component').then((m) => m.ContactComponent)
    }
];
