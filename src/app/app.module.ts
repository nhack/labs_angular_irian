import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {ReviewsComponent} from "./reviews.component";
import {TabsComponent} from "./tabs.component";
import {PizzaService} from "./pizza.service";

@NgModule({
  declarations: [
    AppComponent,
    ReviewsComponent,
    TabsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [PizzaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
