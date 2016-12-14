import {Component, OnInit, Inject} from '@angular/core';

import {Pizza} from './domain/pizza';
import {PIZZA_SERVICE, PizzaService} from "./service/pizza.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'pizza',
  templateUrl: 'app/pizza/pizza.component.html',
  styleUrls: ['app/pizza/pizza.component.css']
})
export class PizzaComponent implements OnInit {

  private pizza: Pizza;

  constructor(@Inject(PIZZA_SERVICE) private pizzaService: PizzaService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.pizzaService.getPizza(this.route.snapshot.params['id'])
      .then(pizza => this.pizza = pizza);
  }
}
