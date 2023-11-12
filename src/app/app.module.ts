import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';
import { counterReducer } from './counter.reducer';
import { MyCounterComponent } from './my-counter/my-counter.component';
import { HanoiCityComponent } from './hanoi-city/hanoi-city.component';
import { districtReducer } from './hanoi-city/hanoi-city.reducer';

@NgModule({
  declarations: [
    AppComponent,
    MyCounterComponent,
    HanoiCityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({
      maccaiquan: counterReducer,
      district: districtReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
