import { bootstrapApplication } from '@angular/platform-browser';
import { Dashboard } from './app/dashboard';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { Routes, provideRouter } from '@angular/router';

const routes: Routes = [];

bootstrapApplication(Dashboard, {
providers: [provideAnimationsAsync(), provideRouter(routes)],
}).catch((err) => console.error(err));