import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeSearchComponent } from './view/home-search/home-search.component';
import { HomeComponent } from './view/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeSearchComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
