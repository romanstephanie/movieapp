import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule,
        NgModel} from '@angular/forms';
import { NgModule } from '@angular/core';
import {MdToolbarModule, 
        MdCardModule, 
        MdInputModule} from '@angular/material';
import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import {MoviesService} from './movies.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdToolbarModule,
    HttpModule,
    MdCardModule,
    MdInputModule,
    FormsModule
  
  ],
  providers: [MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
