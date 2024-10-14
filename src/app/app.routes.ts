// src/app/routes.ts
import { Routes } from '@angular/router';
import { LoginComponent } from '../login/login/login.component';  // Adjust path if necessary
import { RegisterComponent } from '../app/register/register/register.component';  // Adjust path if necessary

export const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' }  // Wildcard route
];
