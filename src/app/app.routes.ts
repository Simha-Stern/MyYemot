import { Routes } from '@angular/router';
import { Main } from './main/main';
import { MyProjects } from './my-projects/my-projects';
import { Messages } from './messages/messages';
import { Contact } from './contact/contact';
import { PayPackages } from './pay-packages/pay-packages';
import { App } from './app';
import { Home } from './home/home';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: '',
    component: Main,
    children: [
      {
        path: 'home',
        component: Home,
      },
      { path: 'my-projects', component: MyProjects },
      { path: 'payments-and-packages', component: PayPackages }, // Assuming MyProjects handles payments
      { path: 'messages', component: Messages },
      { path: 'contact', component: Contact },
    ],
  }, // Redirect to Main component for the root path
];
