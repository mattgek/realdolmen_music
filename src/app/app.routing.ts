import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home'
  },
  {
    path: 'hotlist',
    loadChildren: './hotlist/hotlist.module#HotlistModule'
  },
  {
    path: 'library',
    loadChildren: './library/library.module#LibraryModule'
  },
  {
    path: 'search',
    loadChildren: './search/search.module#SearchModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
