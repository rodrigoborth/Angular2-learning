import './rxjs-extensions';

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppComponent }         from './app.component';
//Components
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
//Modules
import { HomeComponent }  from './module/home/home.component';
import { routing }              from './app.routing';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  declarations: [
    AppComponent,
    //components
    HeaderComponent,
    FooterComponent,
    //modules
    HomeComponent
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/