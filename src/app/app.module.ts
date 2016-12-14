import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {ReviewsComponent} from "./pizza/components/reviews/reviews.component";
import {TabsComponent} from "./pizza/components/tabs/tabs.component";
import {PizzaRestService} from "./pizza/service/pizzaRest.service";
import {PizzaFileService} from "./pizza/service/pizzaFile.service";
import {PIZZA_SERVICE} from "./pizza/service/pizza.service";
import {PizzaComponent} from "./pizza/pizza.component";
import {AppComponent} from "./app.component";

@NgModule({
  declarations: [
    AppComponent,
    PizzaComponent,
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
