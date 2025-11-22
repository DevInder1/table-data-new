import { bootstrapApplication } from '@angular/platform-browser';
import { TableCheckboxSelectionDemo } from './app/table-checkbox-selection-demo';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { Routes, provideRouter } from '@angular/router';

const routes: Routes = [];

bootstrapApplication(TableCheckboxSelectionDemo, {
providers: [provideAnimationsAsync(), provideRouter(routes)],
}).catch((err) => console.error(err));