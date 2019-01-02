import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AlbumCardModule } from './album-card';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { ArtistModule } from './artist';
import { CarouselModule } from './carousel';
import { HomeService } from './home/services';
import { MenuModule } from './menu';
import { HomeComponent } from './pages';
import { ScrollClassModule } from './scroll-class';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenuModule,
    ScrollClassModule,
    HttpClientModule,
    AlbumCardModule,
    ArtistModule,
    CarouselModule
  ],
  bootstrap: [AppComponent],
  providers: [HomeService]
})
export class AppModule {}
