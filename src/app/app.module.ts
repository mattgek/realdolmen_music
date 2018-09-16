import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { AlbumCardModule, MenuModule } from './components';
import { HomeModule } from './pages';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, MenuModule, HomeModule, AlbumCardModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
