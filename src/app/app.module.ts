import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NodesComponent } from './nodes/nodes.component';
// import { MatAccordion } from '@angular/material/expansion';


@NgModule({
  declarations: [
    AppComponent,
    NodesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // MatAccordion
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
