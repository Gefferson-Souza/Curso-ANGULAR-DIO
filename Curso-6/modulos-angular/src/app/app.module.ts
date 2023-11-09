import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {ListaModule} from './lista/lista.module'

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ListaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
