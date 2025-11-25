import { bootstrapApplication } from '@angular/platform-browser';
import { UserOverview } from './app/user-overview';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { Routes, provideRouter } from '@angular/router';

const routes: Routes = [];

bootstrapApplication(UserOverview, {
providers: [provideAnimationsAsync(), provideRouter(routes)],
}).catch((err) => console.error(err));