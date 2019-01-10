import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { HomeModule } from './home';

@NgModule({
  declarations: [AppComponent],
  imports: [
    // application wide module
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,

    // routing
    AppRoutingModule,

    // initial route module
    HomeModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
