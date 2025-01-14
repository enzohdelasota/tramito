import { Route } from '@angular/router';
import { LayoutComponent } from './ui';

export const appRoutes: Route[] = [
  {
    path: '',
    component: LayoutComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];
