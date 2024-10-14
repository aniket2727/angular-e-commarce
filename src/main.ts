// src/main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app/app.routes';  // Correct import for routes

bootstrapApplication(AppComponent, {
  providers: [provideRouter(appRoutes)]  // Correct appRoutes usage
});
