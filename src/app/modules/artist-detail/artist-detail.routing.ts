import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtistDetailComponent } from './artist-detail.component';

const routes: Routes = [
  {
    path: '',
    component: ArtistDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ArtistDetailRoutingModule {}
