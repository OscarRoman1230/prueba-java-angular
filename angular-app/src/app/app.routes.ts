import { Routes } from '@angular/router';
import {SearchClientComponent} from './components/search-client/search-client.component';
import {ClientComponent} from './components/client/client.component';

export const routes: Routes = [
  {
    path: 'search-client',
    component: SearchClientComponent,
  },
  {
    path: '',
    redirectTo: '/search-client',
    pathMatch: 'full'
  },
  {
    path: 'client/:typeDoc/:doc',
    component: ClientComponent
  }
];
