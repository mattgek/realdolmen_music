import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { MenuModule } from './components/menu';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, MenuModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
