import { Routes } from '@angular/router';
import { Main } from './main/main';
import { App } from './app';

export const routes: Routes = [
  { path: '', component: Main },
  { path: 'main', component: Main },
];
