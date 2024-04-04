import { Routes } from '@angular/router';
import { loggedOutGuard } from './logged-out.guard';
import { LoginFormComponent } from './login-form/login-form.component';
import { TimelineComponent } from './timeline/timeline.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginFormComponent,
    title: 'Login',
    pathMatch: 'full',
  },
  {
    path: 'timeline',
    component: TimelineComponent,
    pathMatch: 'full',
    canActivate: [loggedOutGuard],
    title: 'Timeline',
  },
];
