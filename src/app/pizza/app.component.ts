import {Component, ViewEncapsulation, OnInit, Inject} from '@angular/core';
import {Pizza} from "./domain/pizza";
import {PIZZA_SERVICE, PizzaService} from "./service/pizza.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  private pizzas: Pizza[];

  constructor(@Inject(PIZZA_SERVICE) private pizzaService: PizzaService) {
  }

  ngOnInit(): void {
    this.pizzaService.getPizzas()
      .then(pizzas => this.pizzas = pizzas);
  }
}
