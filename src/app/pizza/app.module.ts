import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {ReviewsComponent} from "./components/reviews/reviews.component";
import {TabsComponent} from "./components/tabs/tabs.component";
import {PizzaRestService} from "./service/pizzaRest.service";
import {PizzaFileService} from "./service/pizzaFile.service";
import {PIZZA_SERVICE} from "./service/pizza.service";

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
  providers: [{provide: PIZZA_SERVICE, useClass: PizzaRestService}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
