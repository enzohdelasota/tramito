import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'tmt_mf_footer',
    loadChildren: () =>
      import('tmt_mf_footer/Routes').then((m) => m!.remoteRoutes),
  },
  {
    path: 'tmt_mf_toolbar',
    loadChildren: () =>
      import('tmt_mf_toolbar/Routes').then((m) => m!.remoteRoutes),
  },
  {
    path: '',
    component: NxWelcomeComponent,
  },
];
