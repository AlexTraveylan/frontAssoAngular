import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/landing-page/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'about',
    loadChildren: () =>
      import('./pages/about-page/about-page.module').then(
        (m) => m.AboutPageModule
      ),
  },
  {
    path: 'compta',
    loadChildren: () =>
      import('./pages/compta-page/compta-page.module').then(
        (m) => m.ComptaPageModule
      ),
  },
  {
    path: 'conseils',
    loadChildren: () =>
      import('./pages/conseils-page/conseils-page.module').then(
        (m) => m.ConseilsPageModule
      ),
  },
  {
    path: 'eventend',
    loadChildren: () =>
      import('./pages/event-end-page/event-end-page.module').then(
        (m) => m.EventEndPageModule
      ),
  },
  {
    path: 'joinus',
    loadChildren: () =>
      import('./pages/joinus-page/joinus-page.module').then(
        (m) => m.JoinusPageModule
      ),
  },
  {
    path: 'orga',
    loadChildren: () =>
      import('./pages/organize-event-page/organize-event-page.module').then(
        (m) => m.OrganizeEventPageModule
      ),
  },
  {
    path: 'createOrga',
    loadChildren: () =>
      import('./pages/create-organize-event/create-organize-event.module').then(
        (m) => m.CreateOrganizeEventModule
      ),
  },
  {
    path: 'details',
    loadChildren: () =>
      import('./pages/details-event/details-event.module').then(
        (m) => m.DetailsEventModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
      useHash: true,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
