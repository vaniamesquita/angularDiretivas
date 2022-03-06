import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { MoviesComponent } from './movies/movies.component';
import { RatingComponent } from './rating/rating.component';
import {MatIconModule} from '@angular/material/icon';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import {FormsModule} from '@angular/forms';
import { PanelComponent } from './panel/panel.component'

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    MoviesComponent,
    RatingComponent,
    PanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    NoopAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
