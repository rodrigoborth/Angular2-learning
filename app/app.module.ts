import './rxjs-extensions';

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppComponent }         from './app.component';
//Components
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { AlertModule } from 'ng2-bootstrap/ng2-bootstrap';
//Modules
import { HomeComponent }  from './module/home/home.component';
import { routing }              from './app.routing';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AlertModule,
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