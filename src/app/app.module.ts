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
import {NavigationService} from "./common/navigation.service";
import {RouterModule} from "@angular/router";
import {ROUTES} from "./app.routes";
import {PizzaListComponent} from "./pizza/pizzaList.component";

@NgModule({
  declarations: [
    AppComponent,
    PizzaComponent,
    PizzaListComponent,
    ReviewsComponent,
    TabsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [{provide: PIZZA_SERVICE, useClass: PizzaRestService}, NavigationService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
