import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { DragDropModule } from '@angular/cdk/drag-drop';


import { AppComponent } from './app.component';
import { VirtualComponent } from './componentes/virtual/virtual.component';
import { DragDropComponent } from './componentes/drag-drop/drag-drop.component';

@NgModule({
  declarations: [
    AppComponent,
    VirtualComponent,
    DragDropComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ScrollingModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
