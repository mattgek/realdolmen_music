import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivePlaylistComponent } from './active-playlist.component';

const routes: Routes = [
  {
    path: '',
    component: ActivePlaylistComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ActivePlaylistRoutingModule {}
