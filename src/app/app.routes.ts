import { Routes } from '@angular/router';

export const routes: Routes = [
  { 
    path: '', 
    loadChildren: () => import('./pages/home/home.module').then(a => a.HomeModule) },

  {
    path: 'tv-shows',
    loadChildren: () => import('./pages/tv-shows/tv-shows.module').then(a => a.TvShowsModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./pages/search/search.module').then(a => a.SearchModule)
  },
  { path: '**', redirectTo: '' }
];
