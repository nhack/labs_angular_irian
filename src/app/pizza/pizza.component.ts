import {Component, Input} from '@angular/core';

import {Pizza} from './domain/pizza';

@Component({
  selector: 'pizza',
  templateUrl: 'app/pizza/pizza.component.html',
  styleUrls: ['app/pizza/pizza.component.css'],
})
export class PizzaComponent {

  @Input()
  private pizza: Pizza;
}
