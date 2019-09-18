import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimelineComponent } from './timeline/timeline.component';
import { MatCardModule, MatDialogModule, MatTableModule, MatButtonModule, MatPaginatorModule, MatExpansionModule } from '@angular/material';
import { LocationComponent } from './location/location.component';
import { StatusesComponent } from './timeline/statuses/statuses.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {TimeAgoPipe} from 'time-ago-pipe'
import { HttpClientModule } from '@angular/common/http'; 

@NgModule({
  declarations: [
    AppComponent,
    TimelineComponent,
    LocationComponent,
    StatusesComponent,
    TimeAgoPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatDialogModule,
    MatTableModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    MatExpansionModule,
    HttpClientModule
  ],
  providers: [],
  entryComponents: [StatusesComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
