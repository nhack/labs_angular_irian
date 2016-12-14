import {Component, Input, OnInit, Inject} from '@angular/core';

import {NavigationService} from '../common/navigation.service';
import {PizzaService, PIZZA_SERVICE} from './service/pizza.service';
import {Pizza} from './domain/pizza';

@Component({
  selector: 'pizza-list',
  templateUrl: 'app/pizza/pizzaList.component.html',
  styleUrls: ['app/pizza/pizzaList.component.css']
})
export class PizzaListComponent implements OnInit {

  private pizzas: Pizza[];

  constructor(@Inject(PIZZA_SERVICE) private pizzaService: PizzaService, private navigationService: NavigationService) {
  }

  public goToPizza(pizza: Pizza) {
    this.navigationService.openPizza(pizza._id);
  }

  public ngOnInit() {
    this.pizzaService.getPizzas()
      .then(pizzas => this.pizzas = pizzas);
  }
}
