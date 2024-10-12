// src/app/routes.ts
import { Routes } from '@angular/router';
import { LoginComponent } from '../login/login/login.component';
import { RegisterComponent } from './register/register/register.component';

export const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' }  // Wildcard route
];
