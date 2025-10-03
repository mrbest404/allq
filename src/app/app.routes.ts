import { Routes } from '@angular/router';


export const routes: Routes = [
{
path: '',
loadComponent: () => import('./layout/layout.component').then(m => m.LayoutComponent),
children: [
{ path: '', pathMatch: 'full', loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent) },
// { path: 'search', loadComponent: () => import('./pages/search/search.component').then(m => m.SearchComponent) },
// { path: 'notify', loadComponent: () => import('./pages/notifications/notifications.component').then(m => m.NotificationsComponent) },
// { path: 'settings', loadComponent: () => import('./pages/settings/settings.component').then(m => m.SettingsComponent) },
],
},
{ path: '**', redirectTo: '' },
];