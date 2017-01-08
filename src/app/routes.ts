import { Routes } from '@angular/router';
import { LoginComponent, MainComponent } from './containers';
import { AuthGuard } from './services/auth.guard';

export const routes:Routes = [
    {
        path: 'login',
        component: LoginComponent,
    },    
    {
        path: '',
        // canActivate: [AuthGuard],
        component: MainComponent
    },
    {
        path: '**',
        redirectTo: ''
    }
]