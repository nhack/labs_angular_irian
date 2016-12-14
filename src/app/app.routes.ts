/**
 * Created by marius on 14/12/2016.
 */
import {Routes} from "@angular/router";
import {PizzaComponent} from "./pizza/pizza.component";
import {PizzaListComponent} from "./pizza/pizzaList.component";

export const ROUTES: Routes = [
  {
    path: '',
    redirectTo: '/pizzas',
    pathMatch: 'full'
  },
  {
    path: 'pizzas',
    children: [
      {path: '', component: PizzaListComponent},
      {path: ':id', component: PizzaComponent}
    ]
  }
];
