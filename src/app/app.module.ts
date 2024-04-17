import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatExpansionModule } from '@angular/material/expansion';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CarsComponent } from './cars/cars.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CarsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatExpansionModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
