import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { MenuModule } from './components';
import { ScrollClassModule } from './directives';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, MenuModule, ScrollClassModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
