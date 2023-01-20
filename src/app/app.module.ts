import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { NotePad } from './app.NotePadComponent';

@NgModule({
  declarations: [
    NotePad
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [NotePad]
})
export class AppModule { }
