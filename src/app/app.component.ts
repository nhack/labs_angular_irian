import {Component, ViewEncapsulation} from '@angular/core';
import {Pizza} from "./pizza";
import {PIZZAS} from "./data";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {

  private pizzas: Pizza[];

  constructor() {
    this.pizzas = PIZZAS;
  }
}
